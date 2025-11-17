export type LoanStatus = "open" | "late" | "paid";

export type Loan = {
  id: string;
  counterparty: string;
  amount: number;
  dueDate: string;
  status: LoanStatus;
  rate: number;
  notes: string;
};

export type Offer = {
  id: string;
  amount: number;
  rate: number;
  installments: number;
  startDate: string;
  profile: string;
  description: string;
  tags?: string[];
};

export type TimelineItem = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
};

export const credorActiveLoans: Loan[] = [
  {
    id: "ln-joao",
    counterparty: "João Henrique",
    amount: 1000,
    dueDate: "2025-12-01",
    status: "open",
    rate: 4.2,
    notes: "Capital de giro para oficina (contrato #2025-31).",
  },
  {
    id: "ln-silvia",
    counterparty: "Sílvia Andrade",
    amount: 1800,
    dueDate: "2026-02-15",
    status: "open",
    rate: 5.1,
    notes: "Expansão de delivery saudável com garantia de recebíveis.",
  },
];

export const credorHistoricLoans: Loan[] = [
  {
    id: "ln-maria",
    counterparty: "Maria dos Santos",
    amount: 500,
    dueDate: "2025-09-10",
    status: "paid",
    rate: 4.8,
    notes: "Quitado antes do prazo - bônus automático aplicado.",
  },
  {
    id: "ln-paulo",
    counterparty: "Paulo Lima",
    amount: 750,
    dueDate: "2025-05-25",
    status: "paid",
    rate: 3.6,
    notes: "Contrato encerrado - pagamento confirmado em 24h.",
  },
];

export const availableOffers: Offer[] = [
  {
    id: "of-1500",
    amount: 1500,
    rate: 8,
    installments: 3,
    startDate: "2025-11-10",
    profile: "Autônomos com volume recorrente de pedidos",
    description: "Ideal para reorganizar estoque e fluxo de caixa da alta temporada.",
    tags: ["Estoque", "Recorrência comprovada"],
  },
  {
    id: "of-800",
    amount: 800,
    rate: 12,
    installments: 1,
    startDate: "2025-11-15",
    profile: "Profissionais liberais com notas fiscais recentes",
    description: "Linha emergencial para cobrir compromissos imediatos.",
    tags: ["Emergencial", "Pagamento único"],
  },
  {
    id: "of-2000",
    amount: 2000,
    rate: 6.5,
    installments: 6,
    startDate: "2025-12-05",
    profile: "Empreendedores digitais com ticket médio acima de R$ 200",
    description: "Oferece carência opcional de 30 dias para começar a pagar.",
    tags: ["Carência", "Marketplace"],
  },
];

export const devedorActiveLoans: Loan[] = [
  {
    id: "ln-paulo",
    counterparty: "Paulo Azevedo",
    amount: 800,
    dueDate: "2025-11-18",
    status: "late",
    rate: 3.9,
    notes: "Vence em 5 dias - alerta ativado para negociação automática.",
  },
  {
    id: "ln-luciana",
    counterparty: "Luciana Torres",
    amount: 550,
    dueDate: "2025-12-08",
    status: "open",
    rate: 4.4,
    notes: "Parcela ajustada ao faturamento do estúdio de cerâmica.",
  },
];

export const suggestedOffers: Offer[] = [
  {
    id: "of-cred-01",
    amount: 1000,
    rate: 5,
    installments: 4,
    startDate: "2025-11-25",
    profile: "Credores com histórico de recebíveis",
    description: "Parcelado com amortização progressiva alinhada ao fluxo da loja.",
  },
  {
    id: "of-cred-02",
    amount: 500,
    rate: 3,
    installments: 2,
    startDate: "2025-11-05",
    profile: "Investidores que desejam giro rápido",
    description: "Ideal para antecipação de capital com pagamentos semanais.",
  },
];

export const activityTimeline: TimelineItem[] = [
  {
    id: "tl-01",
    title: "Contato confirmado",
    description: "Samuel respondeu à oferta #of-1500 com interesse nas condições.",
    timestamp: "2025-11-03T09:35:00Z",
  },
  {
    id: "tl-02",
    title: "Pagamento recebido",
    description: "Maria quitou a última parcela (contrato #ln-maria).",
    timestamp: "2025-10-17T13:10:00Z",
  },
  {
    id: "tl-03",
    title: "Documentos validados",
    description: "Comprovantes atualizados para Luciana - limite ampliado automaticamente.",
    timestamp: "2025-10-05T18:47:00Z",
  },
];
