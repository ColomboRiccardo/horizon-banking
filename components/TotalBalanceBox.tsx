import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* doughnutchart. we're going to use chart.js */}
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>
          <p className="total-balance-amount flex-center gap-2">
            {/* since countup uses client-side functionality like useRef, and all component in next.js are server-side, we need to implement a new component which is client-side for it*/}

            <AnimatedCounter
              amount={totalCurrentBalance}
            ></AnimatedCounter>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
