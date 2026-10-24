type InvoiceStatus = 'pending' | 'paid';

interface Invoice {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer: {
    id: number;
    name: string;
    email: string;
  };
}

const invoices: Invoice[] = [
  {
    id: 1,
    amount: 125039,
    status: 'pending',
    issueDate: '2026-10-07',
    dueDate: '2026-11-05',
    customer: {
      id: 1,
      name: 'Construtora Meridiano',
      email: 'contato@meridiano.com.br'
    }
  },
  {
    id: 2,
    amount: 89000,
    status: 'paid',
    issueDate: '2026-10-07',
    dueDate: '2026-11-05',
    customer: {
      id: 2,
      name: 'Cliente Exemplo B',
      email: 'contato@clienteb.com.br'
    }
  },
  {
    id: 3,
    amount: 45050,
    status: 'pending',
    issueDate: '2026-10-07',
    dueDate: '2026-11-05',
    customer: {
      id: 3,
      name: 'Cliente Exemplo C',
      email: 'contato@clientec.com.br'
    }
  }
];

export function findAllInvoices(): Invoice[] {
  return invoices;
}

export function findInvoiceById(id: number): Invoice | undefined {
  return invoices.find((invoice) => invoice.id === id);
}
