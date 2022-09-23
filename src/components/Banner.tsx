import { Box, createStyles, Divider, Title } from '@mantine/core'
import React, { useState } from 'react'
import { Bill } from '../Interface'

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

})

interface Props {

  transactions: Bill[];
}

export default function Banner({ transactions }: Props) {
  const { classes, cx } = useStyles();

  // const [amount, setAmount] = useState(0)
  // const [transaction, setTransaction] = useState<Bill[]>([])

  const amounts = transactions.map((transaction) => transaction.amount);

  // const amounts = transactions.map((transaction) => transaction.amount)
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, curr) => (acc += curr), 0);

  const expanse = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, curr) => (acc += curr), 0);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

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
    </Box>
  )
}