import { Card, Image, Text, Group, Badge, createStyles, Center, Button, Title } from '@mantine/core';
import { IconDeviceDesktopAnalytics, IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  icon: {
    marginRight: 5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },

  sectionContainer: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    padding: "30px",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
  },

  splitedContainer: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  }
}));

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];
export default function App() {

  // const { classes } = useStyles();
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <body>
      <h2>Expense Tracker</h2>

      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">$0.00</h1>

        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+$0.00</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">-$0.00</p>
          </div>
        </div>

        <h3>History</h3>
        <ul id="list" className="list">
          {/* <!-- <li className="minus">
            Cash <span>-$400</span><button className="delete-btn">x</button>
          </li> --> */}
        </ul>

        <h3>Add new transaction</h3>
        <form id="form">
          <div className="form-control">
            {/* <label for="text">Text</label> */}
            <input type="text" id="text" placeholder="Enter text..." />
          </div>
          <div className="form-control">
            {/* <label for="amount"
            >Amount <br />
              (negative - expense, positive - income)</label
            > */}
            <input type="number" id="amount" placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>

      <script src="script.js"></script>
    </body >
  );
}