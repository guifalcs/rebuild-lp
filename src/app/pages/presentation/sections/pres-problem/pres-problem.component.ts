import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

interface Pressure {
  label: string;
  description: string;
}

@Component({
  selector: 'app-pres-problem',
  imports: [NgFor, ScrollRevealDirective],
  templateUrl: './pres-problem.component.html',
  styleUrl: './pres-problem.component.scss',
})
export class PresProblemComponent {
  readonly pressures: Pressure[] = [
    {
      label: 'Carga tributária',
      description: 'Complexidade fiscal que drena margem e desvia foco do core do negócio.',
    },
    {
      label: 'Mão de obra escassa',
      description: 'Contratar e reter talento qualificado ficou mais caro e mais lento.',
    },
    {
      label: 'Processos sobrecarregados',
      description: 'Equipes gastam horas em tarefas repetitivas que deveriam rodar sozinhas.',
    },
  ];
}
