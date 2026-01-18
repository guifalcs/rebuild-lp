import { Component } from '@angular/core';

interface Sector {
  id: string;
  name: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-solutions',
  imports: [],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  activeSector = 'saude';

  sectors: Sector[] = [
    {
      id: 'saude',
      name: 'Saúde',
      tag: 'HEALTHTECH',
      title: 'Gestão Hospitalar Inteligente',
      description: 'Desenvolvemos sistemas integrados que conectam prontuários eletrônicos, agendamentos e monitoramento de pacientes em tempo real. Nossa solução de IA auxilia no diagnóstico precoce e otimiza a alocação de recursos, reduzindo filas de espera em até 40% e melhorando a experiência do paciente.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop'
    },
    {
      id: 'engenharia',
      name: 'Engenharia',
      tag: 'CONSTRUTECH',
      title: 'BIM e Gestão de Obras 4.0',
      description: 'Plataforma completa para gerenciamento de projetos de engenharia com modelagem BIM integrada, acompanhamento de cronograma em tempo real e controle de custos automatizado. Sensores IoT monitoram o progresso da obra e alertam sobre desvios, garantindo entregas no prazo e dentro do orçamento.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop'
    },
    {
      id: 'industria',
      name: 'Indústria',
      tag: 'METALMECÂNICA',
      title: 'Manutenção Preditiva 4.0',
      description: 'Sistema de monitoramento industrial com sensores IoT e algoritmos de machine learning que preveem falhas em equipamentos antes que aconteçam. A integração com ERPs existentes permite gestão unificada da produção, resultando em 50% de redução em paradas não planejadas e aumento significativo da vida útil dos ativos.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop'
    },
    {
      id: 'logistica',
      name: 'Logística',
      tag: 'SUPPLY CHAIN',
      title: 'Roteirização e Rastreamento Inteligente',
      description: 'Solução completa de gestão logística com roteirização otimizada por IA, rastreamento em tempo real e previsão de demanda. Integramos toda a cadeia de suprimentos em uma única plataforma, reduzindo custos de transporte em 30% e melhorando o índice de entregas no prazo para 98%.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
    }
  ];

  setActiveSector(sectorId: string): void {
    this.activeSector = sectorId;
  }
}
