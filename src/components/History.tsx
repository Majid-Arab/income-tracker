import { Box, Title, Divider, createStyles } from '@mantine/core'
import React, { useState } from 'react'
import { Bill } from '../Interface'

const useStyles = createStyles({

  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0'
  },

  li: {
    // width: '100%',
    color: '#000',
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: '5px',
    margin: '5px 0',
    borderRadius: '5px',
  },

  income: {
    borderRight: '3px solid green',
  },

  expanse: {
    borderRight: '3px solid red',
  }

})

type Props = {
  // addTransaction: (transaction: Bill) => void;
  deleteTransaction: (id: number) => void;
}

export default function History({ deleteTransaction }: Props) {
  const { classes, cx } = useStyles();
  const [transaction, setTransaction] = useState<Bill[]>([])

  const delTransaction = (id: number) => {
    setTransaction(
      transaction.filter((bill) => {
        return bill.id != id;
      })
    );
  }

  return (
    <Box>
      <Title order={3}>History</Title>
      <Divider my="sm" />
      {transaction.map((money: Bill, key: number) => (
        <ul className={classes.ul} key={key}>
          <li
            className={cx(classes.li, money.amount > 0 ? classes.income : classes.expanse)}
            key={money.id}
            onClick={() => delTransaction(money.id)}
          >
            <span>{money.reason}</span><span>{money.amount}</span>
          </li>
        </ul>
      ))}
    </Box>
  )
}