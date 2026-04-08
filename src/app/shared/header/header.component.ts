import { Component, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { WHATSAPP_URL } from '../constants';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  whatsappUrl = WHATSAPP_URL;
  isMenuOpen = false;
  isScrolled = false;
  isHidden = false;

  private lastScrollY = 0;
  private scrollThreshold = 80;
  private onScrollBound = this.onScroll.bind(this);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScrollBound, { passive: true });
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScrollBound);
    }
  }

  private onScroll(): void {
    const currentScrollY = window.scrollY;
    this.isScrolled = currentScrollY > this.scrollThreshold;
    this.isHidden = currentScrollY > this.lastScrollY && currentScrollY > 300;
    this.lastScrollY = currentScrollY;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMenu();
  }
}
