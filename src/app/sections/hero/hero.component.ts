import { Component, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { gsap } from 'gsap';
import { WHATSAPP_URL } from '../../shared/constants';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  whatsappUrl = WHATSAPP_URL;
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-badge', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.2,
    })
    .from('.hero-title-line', {
      opacity: 0,
      y: 40,
      duration: 0.5,
      stagger: 0.12,
    }, '-=0.3')
    .from('.hero-description', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.2')
    .from('.hero-buttons .btn', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
    }, '-=0.3')
    .from('.hero-gradient-orb', {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      ease: 'power2.out',
    }, 0.3)
    .from('.hero-grid-pattern', {
      opacity: 0,
      duration: 1.5,
    }, 0.5);
  }
}
