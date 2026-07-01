import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';

/**
 * Standalone, reusable shimmer skeleton. Used by the boot phase and available
 * for any view that wants a placeholder. The same visual language is reused by
 * DpdpxEngineService during in-app navigation.
 */
@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [NgFor],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="skeleton-wrap" aria-busy="true" aria-label="Loading…">
      <div class="skl skl-title"></div>
      <div class="skl skl-line" style="width:28%"></div>
      <div class="skl-kpis">
        <div class="skl-card" *ngFor="let k of kpiSlots">
          <div class="skl skl-ic"></div>
          <div class="skl skl-line" style="width:60%"></div>
          <div class="skl skl-line" style="width:40%"></div>
        </div>
      </div>
      <div class="skl-panel">
        <div class="skl skl-bar"></div>
        <div class="skl skl-line" *ngFor="let r of rowSlots" [style.width]="r"></div>
      </div>
    </div>
  `,
})
export class SkeletonComponent {
  @Input() rows = 6;
  kpiSlots = [0, 1, 2, 3];
  get rowSlots(): string[] {
    const widths = ['92%', '86%', '94%', '78%', '88%', '70%', '90%', '82%'];
    return Array.from({ length: this.rows }, (_, i) => widths[i % widths.length]);
  }
}
