import { Component, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-process',
  imports: [ScrollRevealDirective],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const cards = document.querySelectorAll('.stacking-card');

    cards.forEach((card, i) => {
      const inner = card.querySelector('.card-inner');
      const image = card.querySelector('.card-image img') as HTMLElement;

      // Scale down animation as card exits
      ScrollTrigger.create({
        trigger: card as HTMLElement,
        start: 'top 5rem',
        end: 'bottom 5rem',
        onUpdate: (self) => {
          if (i < cards.length - 1) {
            const progress = self.progress;
            gsap.set(inner, {
              scale: 1 - (progress * 0.05),
            });
          }
        }
      });

      // Parallax on images
      if (image) {
        gsap.fromTo(image,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          }
        );
      }
    });
  }
}
