import { Box, Button, Center, createStyles, Divider, List, Notification, NumberInput, Space, Text, TextInput, Title } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons';

import React, { useState } from 'react'
import { Bill } from '../Interface';

const useStyles = createStyles({
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // maxWidth: '800px',
    backgroundColor: "#fff",
    color: 'black',
    padding: '20px',
    margin: '20px 0'
  },

  moneyBox: {
    padding: '20px',
    textAlign: 'center'
  },

  incomeBox: {
    color: 'lightgreen',
    // borderRight: '2px solid gray',
  },

  expanseBox: {
    color: 'red',
    // borderLeft: '2px solid gray',
  },

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

interface Props {

  addTransaction: (transaction: Bill) => void;
  transactions: Bill[];
  deleteTransaction: (id: number) => void;
}

export function Head({ transactions, deleteTransaction, addTransaction }: Props) {

  const { classes, cx } = useStyles();
  const [reason, setReason] = useState("")
  const [amount, setAmount] = useState(0)
  // const [income, setIncome] = useState(0)
  // const [expanse, setExpanse] = useState(0)
  // const [balance, setBalance] = useState(income - expanse)
  // const [total, setTotal] = useState()
  const [transaction, setTransaction] = useState<Bill[]>([])

  const amounts = transactions.map((transaction) => transaction.amount);

  // const amounts = transactions.map((transaction) => transaction.amount)
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, curr) => (acc += curr), 0);

  const expanse = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, curr) => (acc += curr), 0);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const add = () => {
    const bill = {
      id: Math.random(),
      reason: reason,
      amount: amount
    }
    addTransaction(bill);

    console.log(bill)
    setTransaction([...transaction, bill]);
    setReason("")
    setAmount(0)
  }

  const delTransaction = (id: number) => {
    setTransaction(
      transaction.filter((bill) => {
        return bill.id != id;
      })
    );
  }

  return (
    <Box>
      <h3 style={{ textAlign: 'center' }}>Expanse Tracker</h3>

      <Title order={4}>Your Balance</Title>
      <Title order={3}>${total}</Title>

      <Box className={classes.box}>
        <div className={classes.moneyBox}>
          <Title order={4}>INCOME</Title>
          <Title order={3} className={classes.incomeBox}>${income}</Title>
        </div>
        <Divider orientation="vertical" />
        <div className={classes.moneyBox}>
          <Title order={4}>EXPANSE</Title>
          <Title order={3} className={classes.expanseBox}>${expanse}</Title>
        </div>
      </Box>
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

      <Space h="md" />

      <Box>
        <Title order={3}>Transaction</Title>
        <Divider my="sm" />
        <Text>Text</Text>
        <TextInput value={reason} onChange={(event) => setReason(event.currentTarget.value)} />
        <Space h="md" />
        <Text>Amount</Text>
        <NumberInput value={amount} onChange={(val: number) => setAmount(val)} />
        <Space h="md" />
        <Button fullWidth onClick={add}>Add Transaction</Button>
      </Box>
    </Box>
  )
}
