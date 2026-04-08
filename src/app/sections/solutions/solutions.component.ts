import { Component, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { gsap } from 'gsap';

interface Sector {
  id: string;
  name: string;
  icon: string;
  tag: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-solutions',
  imports: [ScrollRevealDirective],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements AfterViewInit {
  activeSector = 'saude';
  private platformId = inject(PLATFORM_ID);

  sectors: Sector[] = [
    {
      id: 'saude',
      name: 'Saúde',
      icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
      tag: 'HEALTH',
      title: 'Agente virtual de agendamentos para clínicas',
      description: 'Desenvolvimento de agentes de agendamento inteligente e independente. Utilizando IA conversacional, o agente interage com pacientes para marcar, remarcar ou cancelar consultas, integrando-se diretamente com sistemas de gestão clínica.'
    },
    {
      id: 'financeiro',
      name: 'Financeiro',
      icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
      tag: 'FINANCE',
      title: 'Régua de cobrança automatizada',
      description: "Implementação de fluxos financeiros autônomos que monitoram o contas a receber em tempo real. O sistema encaminha mensagens personalizadas, adaptando o tom e a abordagem conforme o perfil do cliente."
    },
    {
      id: 'recursosHumanos',
      name: 'Recursos Humanos',
      icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
      tag: 'HUMAN RESOURCES',
      title: 'Triagem de currículos com IA',
      description: 'Criação de um agente especializado em recrutamento que automatiza a triagem inicial de currículos. Utilizando processamento de linguagem natural, o agente avalia candidatos com base em critérios pré-definidos.'
    },
    {
      id: 'comercial',
      name: 'Comercial',
      icon: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0',
      tag: 'SALES',
      title: 'Agente para funil de vendas',
      description: 'Desenvolvimento de um agente de vendas que interage com leads em múltiplos canais, qualificando-os e nutrindo-os ao longo do funil de vendas. O agente utiliza técnicas de IA para personalizar comunicações.'
    }
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
  }

  setActiveSector(sectorId: string): void {
    if (this.activeSector === sectorId) return;

    if (!isPlatformBrowser(this.platformId)) {
      this.activeSector = sectorId;
      return;
    }

    const content = document.querySelector('.showcase-content');
    if (content) {
      gsap.to(content, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          this.activeSector = sectorId;
          setTimeout(() => {
            const newContent = document.querySelector('.showcase-content');
            if (newContent) {
              gsap.fromTo(newContent,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
              );
            }
          }, 0);
        }
      });
    } else {
      this.activeSector = sectorId;
    }
  }
}
