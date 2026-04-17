import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

interface Member {
  name: string;
  role: string;
  bio: string;
  initials: string;
  tags: string[];
  accent: 'purple' | 'green' | 'cyan';
}

@Component({
  selector: 'app-pres-team',
  imports: [NgFor, ScrollRevealDirective],
  templateUrl: './pres-team.component.html',
  styleUrl: './pres-team.component.scss',
})
export class PresTeamComponent {
  readonly members: Member[] = [
    {
      name: 'Renato',
      role: 'Sócio fundador · Estratégia',
      bio: 'Traduz a complexidade do negócio em roadmap tecnológico. Lidera o diagnóstico, a relação com clientes e a direção estratégica da operação.',
      initials: 'RE',
      tags: ['Estratégia', 'Negócio', 'Relacionamento'],
      accent: 'purple',
    },
    {
      name: 'Guilherme Falcão',
      role: 'Sócio fundador · Tecnologia',
      bio: 'Arquiteta as soluções e garante a excelência técnica das entregas. Conduz time de engenharia, IA e dados com foco em performance e escala.',
      initials: 'GF',
      tags: ['Arquitetura', 'IA', 'Full-stack'],
      accent: 'green',
    },
    {
      name: 'Daniel Augusto',
      role: 'Sócio fundador · Operação',
      bio: 'Transforma plano em execução. Lidera projetos, orquestra rituais e garante que cada entrega chegue no prazo, no escopo e com qualidade.',
      initials: 'DA',
      tags: ['Projetos', 'Delivery', 'Qualidade'],
      accent: 'cyan',
    },
  ];
}
