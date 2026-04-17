import { Component } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

@Component({
  selector: 'app-pres-process',
  imports: [NgFor, NgSwitch, NgSwitchCase, ScrollRevealDirective],
  templateUrl: './pres-process.component.html',
  styleUrl: './pres-process.component.scss',
})
export class PresProcessComponent {
  readonly steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Diagnóstico',
      subtitle: 'Imersão guiada no seu negócio.',
      description:
        'Mapeamos processos, gargalos, stack atual e cultura de dados. Priorizamos as frentes com maior ROI e risco controlado.',
      deliverables: ['Mapa de processos', 'Priorização por ROI', 'Hipóteses validadas'],
      icon: 'search',
    },
    {
      number: '02',
      title: 'Proposta',
      subtitle: 'Roadmap claro, sem letras miúdas.',
      description:
        'Desenhamos escopo, arquitetura, investimento e cronograma. Você decide com transparência — e sabe exatamente o que vai receber, quando e por quanto.',
      deliverables: ['Escopo detalhado', 'Arquitetura alvo', 'Plano e investimento'],
      icon: 'document',
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      subtitle: 'Entregas incrementais e testáveis.',
      description:
        'Sprints curtas, com demos frequentes e visibilidade total. Você vê o produto crescer e pode redirecionar cedo se necessário.',
      deliverables: ['Sprints com demos', 'Code review contínuo', 'Ambiente de homologação'],
      icon: 'build',
    },
    {
      number: '04',
      title: 'Homologação',
      subtitle: 'Validação com dados do mundo real.',
      description:
        'Testes integrados, UAT com key users e ajuste fino de performance. Liberamos para produção só quando tudo atende aos critérios.',
      deliverables: ['UAT com stakeholders', 'Testes de carga', 'Documentação técnica'],
      icon: 'check',
    },
    {
      number: '05',
      title: 'Go Live',
      subtitle: 'Lançamento com acompanhamento de perto.',
      description:
        'Cutover planejado, rollback garantido e war room ativo. Nas primeiras semanas, estamos junto para garantir estabilidade e adoção.',
      deliverables: ['Plano de cutover', 'Monitoramento ativo', 'Treinamento de usuários'],
      icon: 'rocket',
    },
    {
      number: '06',
      title: 'Sustentação',
      subtitle: 'Evolução contínua e parceria de longo prazo.',
      description:
        'SLAs claros, evolução por backlog priorizado e revisões recorrentes de valor. Tecnologia que acompanha o crescimento do seu negócio.',
      deliverables: ['SLA de atendimento', 'Roadmap evolutivo', 'Revisões de valor'],
      icon: 'infinity',
    },
  ];
}
