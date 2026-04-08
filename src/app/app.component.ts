import { Component, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rebuild-lp';
  private lenis: any;
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    import('lenis').then(({ default: Lenis }) => {
      this.lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      });

      this.lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time: number) => {
        this.lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    });
  }

  ngOnDestroy(): void {
    if (this.lenis) {
      this.lenis.destroy();
    }
  }
}
