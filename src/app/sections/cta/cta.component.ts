import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { WHATSAPP_URL } from '../../shared/constants';

@Component({
  selector: 'app-cta',
  imports: [ScrollRevealDirective],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  whatsappUrl = WHATSAPP_URL;
}
