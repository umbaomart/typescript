import { CSVWriter } from './index'

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])

paymentWriter.addRows([
    {
        id: 1,
        amount: 50,
        to: 'mario',
        notes: 'web dev work'
    },
    {
        id: 2,
        amount: 100,
        to: 'peach',
        notes: 'birthday present'
    },
    {
        id: 3,
        amount: 50,
        to: 'yoshi',
        notes: 'web dev work'
    }
])

paymentWriter.save('./data/payments.csv')