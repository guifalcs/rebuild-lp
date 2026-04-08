import { Directive, ElementRef, Input, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') animationType: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-in' = 'fade-up';
  @Input() revealDelay = 0;
  @Input() revealDuration = 0.8;
  @Input() revealStagger = 0;

  private platformId = inject(PLATFORM_ID);
  private trigger?: ScrollTrigger;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement;
    const fromVars: gsap.TweenVars = { duration: this.revealDuration, delay: this.revealDelay, ease: 'power3.out' };

    switch (this.animationType) {
      case 'fade-up':
        gsap.set(element, { opacity: 0, y: 60 });
        fromVars['opacity'] = 1;
        fromVars['y'] = 0;
        break;
      case 'fade-in':
        gsap.set(element, { opacity: 0 });
        fromVars['opacity'] = 1;
        break;
      case 'fade-left':
        gsap.set(element, { opacity: 0, x: -60 });
        fromVars['opacity'] = 1;
        fromVars['x'] = 0;
        break;
      case 'fade-right':
        gsap.set(element, { opacity: 0, x: 60 });
        fromVars['opacity'] = 1;
        fromVars['x'] = 0;
        break;
      case 'scale-in':
        gsap.set(element, { opacity: 0, scale: 0.85 });
        fromVars['opacity'] = 1;
        fromVars['scale'] = 1;
        break;
    }

    fromVars['scrollTrigger'] = {
      trigger: element,
      start: 'top 85%',
      end: 'top 20%',
      toggleActions: 'play none none none',
      once: true,
    };

    gsap.to(element, fromVars);
  }

  ngOnDestroy(): void {
    this.trigger?.kill();
  }
}
