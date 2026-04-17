import { Component } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

interface Solution {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: string;
  accent: 'purple' | 'green' | 'cyan' | 'pink' | 'amber' | 'blue';
}

@Component({
  selector: 'app-pres-solutions',
  imports: [NgFor, NgSwitch, NgSwitchCase, ScrollRevealDirective],
  templateUrl: './pres-solutions.component.html',
  styleUrl: './pres-solutions.component.scss',
})
export class PresSolutionsComponent {
  readonly solutions: Solution[] = [
    {
      id: 'automacoes',
      number: '01',
      title: 'Automações',
      tagline: 'Processos que rodam sozinhos, 24/7.',
      description:
        'Eliminamos tarefas repetitivas conectando sistemas, fluxos e pessoas. Sua operação ganha consistência, velocidade e escala sem aumentar headcount.',
      tags: ['Workflows', 'Integrações', 'Low-code', 'RPA'],
      icon: 'automation',
      accent: 'purple',
    },
    {
      id: 'ia',
      number: '02',
      title: 'Inteligência Artificial',
      tagline: 'IA aplicada ao seu contexto.',
      description:
        'Agentes, copilotos e modelos sob medida que leem, decidem e executam. Da triagem de atendimentos à análise de documentos, IA que entrega valor mensurável.',
      tags: ['Agentes', 'RAG', 'LLMs', 'Copilotos'],
      icon: 'ai',
      accent: 'green',
    },
    {
      id: 'bi',
      number: '03',
      title: 'Business Intelligence',
      tagline: 'Dados viram decisão.',
      description:
        'Dashboards vivos, KPIs confiáveis e pipelines de dados robustos. Da ingestão ao insight, entregamos a visão única do negócio que você precisa.',
      tags: ['Dashboards', 'ETL', 'KPIs', 'Forecast'],
      icon: 'bi',
      accent: 'cyan',
    },
    {
      id: 'programacao',
      number: '04',
      title: 'Programação Sob Medida',
      tagline: 'Software feito para a sua regra.',
      description:
        'Sistemas web, mobile e APIs desenhados para o seu modelo operacional. Arquitetura moderna, código limpo e performance que escala com você.',
      tags: ['Web', 'Mobile', 'APIs', 'Arquitetura'],
      icon: 'code',
      accent: 'pink',
    },
    {
      id: 'educacao',
      number: '05',
      title: 'Educação Tecnológica',
      tagline: 'Seu time usando tech com maestria.',
      description:
        'Treinamentos e mentorias para elevar o repertório técnico da sua liderança e equipe. De IA generativa a dados: conhecimento que vira vantagem.',
      tags: ['Workshops', 'Mentorias', 'Trilhas', 'Imersões'],
      icon: 'education',
      accent: 'amber',
    },
    {
      id: 'dados',
      number: '06',
      title: 'Banco de Dados',
      tagline: 'A fundação invisível do seu produto.',
      description:
        'Modelagem, migração, tuning e governança. Construímos a camada de dados que sustenta operação crítica com segurança, performance e escalabilidade.',
      tags: ['Modelagem', 'Migração', 'Tuning', 'Governança'],
      icon: 'database',
      accent: 'blue',
    },
  ];
}
