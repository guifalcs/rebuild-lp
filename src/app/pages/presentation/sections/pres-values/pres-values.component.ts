import { Component } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

interface Value {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-pres-values',
  imports: [NgFor, NgSwitch, NgSwitchCase, ScrollRevealDirective],
  templateUrl: './pres-values.component.html',
  styleUrl: './pres-values.component.scss',
})
export class PresValuesComponent {
  readonly values: Value[] = [
    {
      title: 'Mentalidade de Dono',
      description: 'Tratamos o seu negócio como se fosse o nosso. Cada decisão é tomada com o peso real do impacto.',
      icon: 'owner',
    },
    {
      title: 'Inovação',
      description: 'Criamos soluções novas do zero, desenhadas para a sua regra de negócio — não adaptações de prateleira.',
      icon: 'innovation',
    },
    {
      title: 'Excelência na Execução',
      description: 'Nossas soluções são feitas para serem as melhores. Cada linha de código, cada fluxo, cada detalhe.',
      icon: 'excellence',
    },
    {
      title: 'Proximidade e Transparência',
      description: 'Prezamos pelos relacionamentos próximos e pela clareza total de ideias, prazos e trade-offs.',
      icon: 'transparency',
    },
    {
      title: 'Aprendizado Contínuo',
      description: 'Nosso hoje é sempre melhor do que o ontem. Estudamos, testamos e evoluímos sem parar.',
      icon: 'learning',
    },
  ];
}
