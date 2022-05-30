import {
  Group,
  ShoppingCart,
  MonetizationOn,
  AccountBalanceWallet,
} from "@mui/icons-material";
import CountUp from "react-countup";

export const widgetData = [
  {
    id: 1,
    title: "USERS",
    value: <CountUp duration={1} end={760} />,
    buttonContent: "See all users",
    href: "/users",
    procentageBalance: true,
    procentage: 5,
    icon: <Group style={{ fill: "#652F33" }} />,
    iconBoxColor: "#FFD5D9",
  },
  {
    id: 2,
    title: "ORDERS",
    value: <CountUp duration={1.5} end={260} />,
    buttonContent: "View all orders",
    href: "/orders",
    procentageBalance: true,
    procentage: 2,
    icon: <ShoppingCart style={{ fill: "#C5A352" }} />,
    iconBoxColor: "#FDECCE",
  },
  {
    id: 3,
    title: "EARNINGS",
    value: (
      <CountUp
        duration={1.5}
        end={12.4}
        prefix="$"
        suffix="k"
        decimals={1}
        decimal="."
      />
    ),
    buttonContent: "View net earnings",
    href: "/earnings",
    procentageBalance: true,
    procentage: 12,
    icon: <MonetizationOn style={{ fill: "#3F8341" }} />,
    iconBoxColor: "#CCE7C5",
  },
  {
    id: 4,
    title: "MY BALANCE",
    value: (
      <CountUp
        duration={1.5}
        end={7.6}
        prefix="$"
        suffix="k"
        decimals={1}
        decimal="."
      />
    ),
    buttonContent: "See balance",
    href: "/balance",
    procentageBalance: true,
    procentage: 5,
    icon: <AccountBalanceWallet style={{ fill: "#6E115F" }} />,
    iconBoxColor: "#E9CBE7",
  },
];
