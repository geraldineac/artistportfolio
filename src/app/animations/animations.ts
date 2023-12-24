import { trigger, transition, style, animate } from '@angular/animations';

export const scrollAnimation = trigger('scrollAnimation', [
  transition('void => *', [
    style({ opacity: 0, transform: 'translateY(50px)' }),
    animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
