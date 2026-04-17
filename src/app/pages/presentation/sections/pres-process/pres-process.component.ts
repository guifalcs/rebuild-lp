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
      subtitle: 'Entendemos os gargalos da sua empresa.',
      description:
        'Entendemos os gargalos da sua empresa de forma detalhada, mapeando a dor e arquitetando como curá-la.',
      deliverables: ['Mapeamento de gargalos', 'Diagnóstico detalhado', 'Arquitetura da solução'],
      icon: 'search',
    },
    {
      number: '02',
      title: 'Proposta',
      subtitle: 'Apresentamos a solução.',
      description:
        'Apresentamos a solução que vai transformar seus processos.',
      deliverables: ['Proposta personalizada', 'Escopo definido', 'Plano de execução'],
      icon: 'document',
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      subtitle: 'Construímos a solução.',
      description:
        'Construímos uma solução robusta, cercada de testes e de uma infraestrutura segura.',
      deliverables: ['Solução robusta', 'Testes completos', 'Infraestrutura segura'],
      icon: 'build',
    },
    {
      number: '04',
      title: 'Homologação',
      subtitle: 'Implantação e monitoramento intenso.',
      description:
        'Realizamos a implantação na empresa, seguindo com o monitoramento de forma mais intensa, cercando qualquer falha.',
      deliverables: ['Implantação na empresa', 'Monitoramento intensivo', 'Cobertura de falhas'],
      icon: 'check',
    },
    {
      number: '05',
      title: 'Go Live',
      subtitle: 'Entrega final validada.',
      description:
        'Fazemos a entrega final da solução validada e gerando resultados.',
      deliverables: ['Entrega validada', 'Solução em produção', 'Resultados mensuráveis'],
      icon: 'rocket',
    },
    {
      number: '06',
      title: 'Sustentação',
      subtitle: 'Manutenção e evolução contínua.',
      description:
        'Prezamos pela manutenção e evolução do projeto para continuar multiplicando os resultados.',
      deliverables: ['Manutenção contínua', 'Evolução do projeto', 'Multiplicação de resultados'],
      icon: 'infinity',
    },
  ];
}
