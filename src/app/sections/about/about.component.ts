import { Component, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHATSAPP_URL } from '../../shared/constants';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  whatsappUrl = WHATSAPP_URL;
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.from('.challenge-card', {
      scrollTrigger: {
        trigger: '.about-challenges',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }
}
