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

  return (
    <Center style={{ width: 500 }}>
      <Head transactions={transactions} />
    </Center>
  );
}