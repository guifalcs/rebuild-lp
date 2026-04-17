import { Component, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

interface ShowcaseMetric {
  value: string;
  label: string;
}

interface ShowcaseApplication {
  id: string;
  label: string;
  headline: string;
  narrative: string;
  bullets: string[];
  metrics: ShowcaseMetric[];
  stack: string[];
}

@Component({
  selector: 'app-pres-showcase',
  imports: [NgFor, NgIf, ScrollRevealDirective],
  templateUrl: './pres-showcase.component.html',
  styleUrl: './pres-showcase.component.scss',
})
export class PresShowcaseComponent {
  readonly applications: ShowcaseApplication[] = [
    {
      id: 'operacao',
      label: 'Operação',
      headline: 'Orquestração de operações do pedido ao pós-venda.',
      narrative:
        'Integração ponta a ponta entre ERP, CRM, logística e atendimento. Regras de negócio centralizadas, status em tempo real e handoff sem fricção entre times.',
      bullets: [
        'Fluxos end-to-end sem planilhas paralelas',
        'Alertas inteligentes de exceção por canal',
        'Trilha de auditoria completa e consultável',
      ],
      metrics: [
        { value: '-70%', label: 'Tempo em tarefa manual' },
        { value: '24/7', label: 'Processos rodando' },
        { value: '3x', label: 'Velocidade de resposta' },
      ],
      stack: ['n8n', 'Make', 'Node.js', 'Postgres', 'Webhooks'],
    },
    {
      id: 'comercial',
      label: 'Comercial',
      headline: 'Funil comercial com IA que qualifica, prioriza e responde.',
      narrative:
        'Enriquecimento automático de leads, scoring contextual e copiloto que redige propostas personalizadas. O time foca em fechar, não em digitar.',
      bullets: [
        'Lead scoring multicritério em tempo real',
        'Sugestão de próxima ação por oportunidade',
        'Propostas geradas com dados atualizados',
      ],
      metrics: [
        { value: '+42%', label: 'Taxa de conversão' },
        { value: '-55%', label: 'Tempo de proposta' },
        { value: '100%', label: 'Leads qualificados' },
      ],
      stack: ['OpenAI', 'HubSpot', 'Pinecone', 'Zapier', 'Slack'],
    },
    {
      id: 'financeiro',
      label: 'Financeiro',
      headline: 'Conciliação, cobrança e previsibilidade sem surpresas.',
      narrative:
        'Conciliação bancária automatizada, régua de cobrança inteligente e dashboards com projeção de caixa. Menos retrabalho, mais previsibilidade para decidir.',
      bullets: [
        'Conciliação automática de extratos e boletos',
        'Cobrança contextualizada por perfil de cliente',
        'Forecast de caixa com cenários dinâmicos',
      ],
      metrics: [
        { value: '-85%', label: 'Horas em conciliação' },
        { value: '+28%', label: 'Recuperação de recebíveis' },
        { value: 'D+1', label: 'Fechamento financeiro' },
      ],
      stack: ['Python', 'Metabase', 'Supabase', 'WhatsApp API', 'Stripe'],
    },
    {
      id: 'dados',
      label: 'Dados',
      headline: 'Uma verdade única que atravessa todas as áreas.',
      narrative:
        'Data warehouse moderno, ETL confiável e camada semântica que fala a língua do negócio. Dashboards executivos, operacionais e táticos sempre em sincronia.',
      bullets: [
        'Pipeline orquestrado com observabilidade',
        'Camada semântica de KPIs padronizados',
        'Self-service BI para as lideranças',
      ],
      metrics: [
        { value: '1', label: 'Fonte da verdade' },
        { value: '15min', label: 'Latência de dados' },
        { value: '∞', label: 'Dashboards possíveis' },
      ],
      stack: ['BigQuery', 'dbt', 'Airbyte', 'Looker', 'Metabase'],
    },
    {
      id: 'atendimento',
      label: 'Atendimento',
      headline: 'Atendimento com IA que entende contexto e histórico.',
      narrative:
        'Agentes inteligentes que resolvem o simples e encaminham o complexo com contexto completo. Seu time trabalha com mais repertório e menos repetição.',
      bullets: [
        'Roteamento por intenção e senioridade',
        'Resumo automático de conversas e tickets',
        'Base de conhecimento viva e indexada',
      ],
      metrics: [
        { value: '-60%', label: 'Tempo médio de resposta' },
        { value: '+35%', label: 'CSAT' },
        { value: '80%', label: 'Self-service resolvido' },
      ],
      stack: ['OpenAI', 'LangChain', 'Twilio', 'Notion', 'Intercom'],
    },
  ];

  readonly active = signal<string>(this.applications[0].id);

  select(id: string): void {
    this.active.set(id);
  }

  currentApplication(): ShowcaseApplication {
    return this.applications.find((a) => a.id === this.active()) ?? this.applications[0];
  }
}
