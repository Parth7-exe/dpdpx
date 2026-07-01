import { Injectable, NgZone } from '@angular/core';
import { SHELL_HTML } from './shell';

/**
 * DpdpxEngineService
 * ------------------
 * Hosts the complete, faithful DPDPX application logic (the original 9,200+ line
 * engine, preserved verbatim in assets/dpdpx-core.js) inside the Angular runtime.
 *
 * Why this design:
 *  - The original app renders every screen as HTML strings that rely on INLINE
 *    on* handlers (e.g. onclick="go('dsr')", onclick="closeModal()"), which only
 *    resolve against the GLOBAL scope. Re-hosting the engine via a classic
 *    <script> element guarantees byte-for-byte behavioural fidelity for all 44
 *    modules — nothing is dropped or subtly altered.
 *  - On top of that faithful core we layer real Angular structure: dependency
 *    injection, lifecycle-driven boot, a skeleton-loading phase and animated
 *    view transitions (see installNavigationFx()).
 */
@Injectable({ providedIn: 'root' })
export class DpdpxEngineService {
  private booted = false;

  constructor(private zone: NgZone) {}

  /** Render the static shell DOM that the engine expects to find. */
  mountShell(host: HTMLElement): void {
    host.innerHTML = SHELL_HTML;
  }

  /**
   * Inject and run the faithful engine in global scope, then resolve once the
   * engine has finished its initial boot (buildNav + go('dashboard')).
   */
  boot(): Promise<void> {
    if (this.booted) return Promise.resolve();
    this.booted = true;
    return new Promise<void>((resolve, reject) => {
      // Run engine work outside Angular so its frequent DOM mutations don't
      // trigger needless change-detection cycles.
      this.zone.runOutsideAngular(() => {
        const existing = document.getElementById('dpdpx-core-script');
        if (existing) {
          this.installNavigationFx();
          resolve();
          return;
        }
        const s = document.createElement('script');
        s.id = 'dpdpx-core-script';
        s.src = 'assets/dpdpx-core.js';
        s.onload = () => {
          this.installNavigationFx();
          resolve();
        };
        s.onerror = () => reject(new Error('Failed to load DPDPX core engine'));
        document.body.appendChild(s);
      });
    });
  }

  /**
   * Enhancement layer: wrap the engine's global go(route) so every in-app
   * navigation shows a skeleton loader and an animated view entrance, without
   * touching the engine internals.
   */
  private installNavigationFx(): void {
    const w = window as any;
    if (typeof w.go !== 'function' || w.__dpdpxFx) return;
    w.__dpdpxFx = true;

    const originalGo = w.go.bind(w);
    const SKELETON_MS = 300;

    w.go = (route: string) => {
      const view = document.getElementById('view');
      if (!view) { originalGo(route); return; }

      // 1) paint skeleton immediately
      view.classList.remove('view-enter');
      view.innerHTML = this.skeletonMarkup();

      // 2) after a short, animated skeleton phase, run the real render
      window.setTimeout(() => {
        originalGo(route);
        // 3) replay an entrance animation on the freshly rendered content
        const v = document.getElementById('view');
        if (v) {
          v.classList.remove('view-enter');
          // force reflow so the animation restarts every navigation
          void v.offsetWidth;
          v.classList.add('view-enter');
        }
      }, SKELETON_MS);
    };

    // Re-run the initial dashboard through the FX wrapper so the very first
    // paint also gets the skeleton + entrance animation.
    w.go('dashboard');
  }

  /** Generic, content-shaped shimmer skeleton shown during navigation. */
  private skeletonMarkup(): string {
    const line = (w: string) =>
      `<div class="skl skl-line" style="width:${w}"></div>`;
    const card = `
      <div class="skl-card">
        <div class="skl skl-ic"></div>
        ${line('60%')}
        ${line('40%')}
      </div>`;
    return `
      <div class="skeleton-wrap" aria-busy="true" aria-label="Loading…">
        <div class="skl skl-title"></div>
        ${line('28%')}
        <div class="skl-kpis">${card}${card}${card}${card}</div>
        <div class="skl-panel">
          <div class="skl skl-bar"></div>
          ${line('92%')}${line('86%')}${line('94%')}${line('78%')}${line('88%')}${line('70%')}
        </div>
      </div>`;
  }
}
