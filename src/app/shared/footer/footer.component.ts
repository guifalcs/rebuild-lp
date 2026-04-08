import { Component } from '@angular/core';
import { WHATSAPP_URL } from '../constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  whatsappUrl = WHATSAPP_URL;
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
