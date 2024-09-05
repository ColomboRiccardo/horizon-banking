import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const loggedIn = { firstName: "Adrian" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Manage your transactions efficiently"
          ></HeaderBox>
        </header>
      </div>
      <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1000.2}
      ></TotalBalanceBox>
    </section>
  );
};

export default Home;
