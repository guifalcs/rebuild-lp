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
      tag: 'HEALTH',
      title: 'Agente virtual de agendamentos para clínicas',
      description: 'Desenvolvimento de agentes de agendamento inteligente e independente. Utilizando IA conversacional, o agente interage com pacientes para marcar, remarcar ou cancelar consultas, integrando-se diretamente com sistemas de gestão clínica. O projeto inclui reconhecimento de linguagem natural para entender solicitações complexas e fornecer respostas contextuais.',
      image: '/saude.webp'
    },
    {
      id: 'financeiro',
      name: 'Financeiro',
      tag: 'FINANCE',
      title: 'Régua de cobrança automatizada',
      description: 'Implementação de fluxos financeiros autônomos que monitoram o "contas a receber" em tempo real. O sistema manda diariamente mensagens personalizadas, adaptando o tom e a abordagem conforme o perfil do cliente. A solução integra-se com sistemas ERP para atualização automática do status de pagamento.',
      image: '/financeiro.webp'
    },
    {
      id: 'recursosHumanos',
      name: 'Recursos Humanos',
      tag: 'HUMAN RESOURCES',
      title: 'Triagem de currículos com IA',
      description: 'Criação de um agente especializado em recrutamento que automatiza a triagem inicial de currículos. Utilizando processamento de linguagem natural, o agente avalia candidatos com base em critérios pré-definidos, classificando-os e gerando rankings de melhores candidatos.',
      image: '/rh.webp'
    },
    {
      id: 'comercial',
      name: 'Comercial',
      tag: 'SALES',
      title: 'Agente para funil de vendas',
      description: 'Desenvolvimento de um agente de vendas que interage com leads em múltiplos canais, qualificando-os e nutrindo-os ao longo do funil de vendas. O agente utiliza técnicas de IA para personalizar comunicações, agendar reuniões e fornecer informações relevantes sobre produtos ou serviços, integrando-se com CRM para atualização automática dos dados dos leads.',
      image: '/comercial.webp'
    }
  ];

  setActiveSector(sectorId: string): void {
    this.activeSector = sectorId;
  }
}
