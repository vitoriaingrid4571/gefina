import express from 'express'

const app = express()

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

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: { status: 200, message: 'Server is running' }
  })
})

app.get('/api/invoices', (req, res) => {
  res.status(200).json(invoices)
})

app.get('/api/invoices/:id', (req, res) => {
  const id = Number(req.params.id)
  const invoice = invoices.find(invoice => invoice.id === id)

  if (!invoice) {
    return res.status(404).json({
      error: { status: 404, message: 'Invoice not found' }
    })
  }

  res.status(200).json(invoice)
})

app.use((req, res) => {
  res.status(404).json({
    error: { status: 404, message: 'Resource not found' }
  })
})

app.listen(3000)