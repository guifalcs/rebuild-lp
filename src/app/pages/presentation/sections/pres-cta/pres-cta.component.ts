import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';
import { WHATSAPP_URL } from '../../../../shared/constants';

interface CtaHighlight {
  title: string;
  description: string;
}

@Component({
  selector: 'app-pres-cta',
  imports: [NgFor, ScrollRevealDirective],
  templateUrl: './pres-cta.component.html',
  styleUrl: './pres-cta.component.scss',
})
export class PresCtaComponent {
  readonly whatsappUrl = WHATSAPP_URL;

  readonly highlights: CtaHighlight[] = [
    {
      title: 'Diagnóstico sem custo',
      description: 'Mapeamos gargalos, oportunidades e prioridades para o seu cenário atual.',
    },
    {
      title: 'Prioridade por impacto',
      description: 'Definimos as iniciativas com melhor equilíbrio entre ROI, velocidade e risco.',
    },
    {
      title: 'Plano em até 48h úteis',
      description: 'Você recebe próximos passos claros para decisão e execução com seu time.',
    },
  ];

  readonly year = new Date().getFullYear();
}
