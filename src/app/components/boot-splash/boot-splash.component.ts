import { Component, ViewEncapsulation } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

/** Animated boot splash shown while the engine initialises. */
@Component({
  selector: 'app-boot-splash',
  standalone: true,
  imports: [LogoComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="boot-splash">
      <div class="boot-splash-inner">
        <app-logo size="lg" [showWord]="true"></app-logo>
        <div class="boot-splash-bar"><i></i></div>
        <div class="boot-splash-cap">Privacy &amp; Consent Management · Admin Portal</div>
      </div>
    </div>
  `,
})
export class BootSplashComponent {}
