import { Component, Input, ViewEncapsulation } from '@angular/core';
import { logoPop } from '../../core/animations';

/**
 * Custom, animated DPDPX brand mark.
 * A refined version of the original shield logo with a gradient fill,
 * an animated "scan" sheen and an optional wordmark.
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  animations: [logoPop],
  template: `
    <span class="dpdpx-logo" [class.lg]="size === 'lg'" [class.sm]="size === 'sm'">
      <span class="dpdpx-logo-mark" @logoPop>
        <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- Blur Filter for neon glow -->
            <filter [attr.id]="blurId" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
            </filter>
            <!-- Dark background gradient -->
            <linearGradient [attr.id]="gradId" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0f172a" />
              <stop offset="1" stop-color="#1e293b" />
            </linearGradient>
            <!-- Left shield neon gradient -->
            <linearGradient [attr.id]="leftGradId" x1="11" y1="6.5" x2="17" y2="24.2" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3b82f6" />
              <stop offset="1" stop-color="#1d4ed8" />
            </linearGradient>
            <!-- Right shield neon gradient -->
            <linearGradient [attr.id]="rightGradId" x1="23" y1="6.5" x2="17" y2="24.2" gradientUnits="userSpaceOnUse">
              <stop stop-color="#06b6d4" />
              <stop offset="1" stop-color="#0e7490" />
            </linearGradient>
            <!-- Sheen Gradient -->
            <linearGradient id="dpdpx-sheen" x1="-20" y1="0" x2="0" y2="34" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ffffff" stop-opacity="0" />
              <stop offset="0.5" stop-color="#ffffff" stop-opacity="0.3" />
              <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
            </linearGradient>
          </defs>
          
          <!-- Outer rounded box with border -->
          <rect x="1" y="1" width="32" height="32" rx="9" [attr.fill]="'url(#' + gradId + ')'" stroke="rgba(255,255,255,0.06)" stroke-width="1.2" />
          
          <!-- Background Glow -->
          <circle cx="17" cy="15" r="8" fill="#06b6d4" opacity="0.15" [attr.filter]="'url(#' + blurId + ')'" />
          
          <!-- Left Shield Side -->
          <path d="M17 6.5 C17 6.5 13.5 7.5 11 8.5 V15.5 C11 19.5 13.5 22.8 17 24.2" [attr.stroke]="'url(#' + leftGradId + ')'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          
          <!-- Right Shield Side -->
          <path d="M17 6.5 C17 6.5 20.5 7.5 23 8.5 V15.5 C23 19.5 20.5 22.8 17 24.2" [attr.stroke]="'url(#' + rightGradId + ')'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          
          <!-- Central Glowing Node -->
          <circle cx="17" cy="12.5" r="1.5" fill="#ffffff" opacity="0.9" />
          
          <!-- Glowing Node Inner Core -->
          <circle cx="17" cy="12.5" r="3.5" stroke="#06b6d4" stroke-width="0.8" opacity="0.5" />
          
          <!-- Animated Checkmark -->
          <path class="dpdpx-logo-check" d="M13.4 16.3l2.5 2.5 4.8-5" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          
          <!-- Sweep Sheen Layer -->
          <rect class="dpdpx-logo-sheen" x="1" y="1" width="32" height="32" rx="9" fill="url(#dpdpx-sheen)" pointer-events="none" />
        </svg>
      </span>
      @if (showWord) {
        <span class="dpdpx-logo-word">
          <span class="dpdpx-logo-main">DPDP<b>X</b></span>
          <span class="dpdpx-logo-sub">BY JODETX</span>
        </span>
      }
    </span>
  `,
})
export class LogoComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() showWord = true;
  // unique gradient ids so multiple logos on a page don't collide
  private uid = Math.random().toString(36).slice(2, 8);
  gradId = 'dpdpx-g-' + this.uid;
  blurId = 'dpdpx-b-' + this.uid;
  leftGradId = 'dpdpx-l-' + this.uid;
  rightGradId = 'dpdpx-r-' + this.uid;
}
