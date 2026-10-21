import { Router } from 'express'
import { findAllInvoices, findInvoiceById } from './invoice.service.ts'

const router = Router()

router.get('/', (req, res) => {
  const invoices = findAllInvoices()
  res.status(200).json(invoices)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const invoice = findInvoiceById(id)

  if (!invoice) {
    return res.status(404).json({
      error: { status: 404, message: 'Invoice not found' }
    })
  }

  res.status(200).json(invoice)
})

export default router