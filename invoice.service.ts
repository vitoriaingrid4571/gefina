const invoices = [
  {
    id: 1,
    amount: 125039,
    status: 'pending',
    issueDate: '2026-10-07',
    dueDate: '2026-11-05',
    customer: {
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
      name: 'Cliente Exemplo C',
      email: 'contato@clientec.com.br'
    }
  }
]

export function findAllInvoices() {
  return invoices
}

export function findInvoiceById(id: number) {
  return invoices.find(invoice => invoice.id === id)
}