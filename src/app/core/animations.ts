import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  keyframes,
} from '@angular/animations';

/** Fade + lift used for the host/app entrance. */
export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(14px)' }),
    animate('420ms cubic-bezier(.22,1,.36,1)', style({ opacity: 1, transform: 'none' })),
  ]),
]);

/** Splash overlay leave animation. */
export const splashFade = trigger('splashFade', [
  transition(':leave', [
    animate('460ms ease', style({ opacity: 0, transform: 'scale(1.04)' })),
  ]),
]);

/** Staggered entrance for skeleton rows / lists. */
export const staggerList = trigger('staggerList', [
  transition(':enter', [
    query(
      '.stagger-item',
      [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        stagger(60, [
          animate('360ms cubic-bezier(.22,1,.36,1)', style({ opacity: 1, transform: 'none' })),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);

/** Logo mark draw-in. */
export const logoPop = trigger('logoPop', [
  transition(':enter', [
    animate(
      '700ms cubic-bezier(.22,1,.36,1)',
      keyframes([
        style({ opacity: 0, transform: 'scale(.7) rotate(-8deg)', offset: 0 }),
        style({ opacity: 1, transform: 'scale(1.06) rotate(2deg)', offset: 0.7 }),
        style({ opacity: 1, transform: 'scale(1) rotate(0)', offset: 1 }),
      ]),
    ),
  ]),
]);
