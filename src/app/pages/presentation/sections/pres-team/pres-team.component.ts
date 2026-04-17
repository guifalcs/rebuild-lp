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
      name: 'Renato Andrade',
      role: 'Sócio fundador · Estratégia',
      bio: 'Mais de 10 anos de experiência em gestão de negócios.',
      initials: 'RA',
      tags: ['Estratégia', 'Negócio', 'Relacionamento'],
      accent: 'purple',
    },
    {
      name: 'Guilherme Falcão',
      role: 'Sócio fundador · Tecnologia',
      bio: 'Engenheiro de Software especialista em soluções de alta performance.',
      initials: 'GF',
      tags: ['Arquitetura', 'IA', 'Full-stack'],
      accent: 'green',
    },
    {
      name: 'Daniel Augusto',
      role: 'Sócio fundador · Operação',
      bio: 'Experiência em soluções tecnológicas e IA para empresas como Meta, IBM e BTG Pactual.',
      initials: 'DA',
      tags: ['Projetos', 'Delivery', 'Qualidade'],
      accent: 'cyan',
    },
  ];
}
