import { Card, Image, Text, Group, Badge, createStyles, Center, Button, Title, MantineProvider } from '@mantine/core';
import { IconDeviceDesktopAnalytics, IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';
import { useState } from 'react';
import { Head } from './components/Head';
import { Bill } from './Interface';

const initialTransactions: Bill[] = [
  {
    id: 1,
    reason: "Cash",
    amount: 100,
  },
  {
    id: 2,
    reason: "Book",
    amount: -20,
  },
  {
    id: 3,
    reason: "Fruits",
    amount: -40,
  },
];

export default function App() {


  const [transactions, setTransactions] =
    useState<Bill[]>(initialTransactions);

  function addTransaction(transaction: Bill) {
    setTransactions([...transactions, transaction]);
  }

  function deleteTransaction(id: number) {
    const filtered = transactions.filter((t) => t.id !== id);
    setTransactions(filtered);
  }

  return (
    <Center style={{ width: 500 }}>
      <Head addTransaction={addTransaction} transactions={transactions} deleteTransaction={deleteTransaction} />
    </Center>
  );
}