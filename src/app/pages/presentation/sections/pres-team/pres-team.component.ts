import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

interface Member {
  name: string;
  role: string;
  bio: string;
  photo: string;
  photoScale?: number;
  photoPosition?: string;
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
      role: 'Especialista em gestão',
      bio: 'Mais de 10 anos de experiência em gestão de negócios.',
      photo: 'team-renato.jpg',
      photoScale: 1.8,
      photoPosition: '50% 5%',
      tags: ['Estratégia', 'Negócio', 'Relacionamento'],
      accent: 'purple',
    },
    {
      name: 'Guilherme Falcão',
      role: 'Especialista em tecnologia',
      bio: 'Engenheiro de Software especialista em soluções de alta performance.',
      photo: 'team-guilherme.jpg',
      tags: ['Arquitetura', 'IA', 'Full-stack'],
      accent: 'green',
    },
    {
      name: 'Daniel Augusto',
      role: 'Especialista em tecnologia',
      bio: 'Experiência em soluções tecnológicas e IA para empresas como Meta, IBM e BTG Pactual.',
      photo: 'team-daniel.jpg',
      tags: ['Projetos', 'Delivery', 'Qualidade'],
      accent: 'cyan',
    },
  ];
}
