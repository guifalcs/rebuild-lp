import { AfterViewInit, Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-pres-hero',
  templateUrl: './pres-hero.component.html',
  styleUrl: './pres-hero.component.scss',
})
export class PresHeroComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.pres-hero-eyebrow', { opacity: 0, y: 16, duration: 0.7, delay: 0.15 })
      .from('.pres-hero-title-line', { opacity: 0, y: 48, duration: 0.75, stagger: 0.12 }, '-=0.35')
      .from('.pres-hero-sub', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
      .from('.pres-hero-meta-item', { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 }, '-=0.2')
      .from('.pres-hero-scroll', { opacity: 0, y: -10, duration: 0.6 }, '-=0.1')
      .from(['.pres-hero-orb--purple', '.pres-hero-orb--green', '.pres-hero-orb--cyan'], {
        opacity: 0, scale: 0.4, duration: 1.4, stagger: 0.15, ease: 'power2.out',
      }, 0.2)
      .from('.pres-hero-grid', { opacity: 0, duration: 1.4 }, 0.4)
      .from('.pres-hero-ring', { opacity: 0, scale: 0.6, duration: 1.6, ease: 'power2.out' }, 0.3);
  }
}
