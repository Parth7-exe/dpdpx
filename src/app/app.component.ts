import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { DpdpxEngineService } from './core/dpdpx-engine.service';
import { BootSplashComponent } from './components/boot-splash/boot-splash.component';
import { fadeInUp, splashFade } from './core/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, BootSplashComponent],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInUp, splashFade],
  template: `
    <app-boot-splash *ngIf="loading" @splashFade></app-boot-splash>

    <!--
      Host for the faithful DPDPX engine. The engine renders the full
      application (login, sidebar, topbar, all 44 modules, modals, toasts)
      into this element. We keep it untouched by Angular's template compiler
      by populating it via innerHTML in the service.
    -->
    <div #host class="dpdpx-host" [class.ready]="!loading"></div>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('host', { static: true }) host!: ElementRef<HTMLElement>;
  loading = true;

  constructor(private engine: DpdpxEngineService) {}

  async ngAfterViewInit(): Promise<void> {
    // 1) render the static shell the engine expects
    this.engine.mountShell(this.host.nativeElement);
    // 2) boot the faithful engine (runs in global scope, then wires FX)
    await this.engine.boot();
    // 3) hold the animated splash briefly so the skeleton/entrance reads well
    setTimeout(() => (this.loading = false), 950);
  }
}
