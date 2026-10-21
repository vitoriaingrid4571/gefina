import express from 'express'
import invoiceRouter from './invoice.route.ts'

const app = express()

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: { status: 200, message: 'Server is running' }
  })
})

app.use('/api/invoices', invoiceRouter)

app.use((req, res) => {
  res.status(404).json({
    error: { status: 404, message: 'Resource not found' }
  })
})

app.listen(3000)