import { Component, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-pres-header',
  imports: [CommonModule],
  templateUrl: './pres-header.component.html',
  styleUrl: './pres-header.component.scss',
})
export class PresHeaderComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private onScrollBound = this.onScroll.bind(this);

  scrollProgress = 0;
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'intro';

  readonly navItems: NavItem[] = [
    { id: 'missao', label: 'Missão' },
    { id: 'valores', label: 'Valores' },
    { id: 'solucoes', label: 'Soluções' },
    { id: 'metodologia', label: 'Metodologia' },
    { id: 'equipe', label: 'Equipe' },
  ];

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.addEventListener('scroll', this.onScrollBound, { passive: true });
    this.onScroll();
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.removeEventListener('scroll', this.onScrollBound);
  }

  private onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.isScrolled = scrollTop > 40;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const candidates = ['intro', ...this.navItems.map((n) => n.id), 'contato'];
    const mid = window.innerHeight * 0.35;
    let current = this.activeSection;
    for (const id of candidates) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= mid && rect.bottom > mid) {
        current = id;
        break;
      }
    }
    if (current !== this.activeSection) this.activeSection = current;
  }

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
