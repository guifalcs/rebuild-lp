import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';
import { WHATSAPP_URL } from '../../../../shared/constants';

@Component({
  selector: 'app-pres-cta',
  imports: [NgFor, ScrollRevealDirective],
  templateUrl: './pres-cta.component.html',
  styleUrl: './pres-cta.component.scss',
})
export class PresCtaComponent {
  readonly whatsappUrl = WHATSAPP_URL;

  readonly highlights: string[] = [
    'Diagnóstico 100% gratuito e sem compromisso',
    'Priorização por ROI e risco de implementação',
    'Retorno em até 48 horas úteis',
  ];

  readonly year = new Date().getFullYear();
}
