import React, { useState } from "react";
import classes from "../../utils/css/components/Home.module.css";

const Home = () => {
  const [coins, setCoins] = useState();
  const [currencies, setCurrencies] = useState([
    "0.5 WAX",
    "1 WAX",
    "5 WAX",
    "10 WAX",
    "20 WAX",
    "50 WAX",
  ]);
  const [activeButton, setActiveButton] = useState(null);

  // const coinsHandle = (event) => {
  //   setCoins(() => {
  //     setActiveButton(event.target.getAttribute("data-index"));
  //     console.log(event.target.value);

  //   });
  // };

  const coinsHandle = (event) => {
    const setCoins = setActiveButton(event.target.getAttribute("data-index"));
    const data = event.target.value;
    fetch("https://api.waxsweden.org/v1/chain/get_table_rows", {
      method: "POST",
      data,
      setCoins,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const buttonHandler = (event) => {
    setActiveButton(event.target.getAttribute("data-index"));
    setCoins(event.target.getAttribute("data-coin"));
  };

  const CurrencyComponent = ({ currencies, activeButton }) => {
    return (
      <React.Fragment>
        {currencies.map((currency, index) => {
          const isActive = index == activeButton;
          return (
            <div key={index} className="col-6 mt-2 text-center">
              <button
                onClick={buttonHandler}
                data-index={index}
                data-coin={currency}
                className={classes.mainButton}
                style={{ background: isActive ? "#4f005f" : "#741188" }}
              >
                {currency}
              </button>
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <>
      <div className="container" className={classes.topMargin}>
        <div className="row">
          <div className="col-md-3 col-xl-4"></div>
          <div className="col-md-6 col-xl-4 p-4 text-center">
            <div className="row"></div>
            <div className="row">
              <h2 className="text-center">I LIKE</h2>
              <div className="col text-center">
                <button className={classes.mainButton}>HEADS</button>
              </div>
              <div className="col text-center">
                <button className={classes.mainButton}>TAILS</button>
              </div>
            </div>
            <div className="row mt-2">
              <h2 className="text-center">FOR</h2>
              <CurrencyComponent
                currencies={currencies}
                activeButton={activeButton}
              />
            </div>
            <div className="row mt-4">
              <div className="col text-center">
                <button
                  onClick={coinsHandle}
                  value={coins}
                  className={classes.mainButton}
                >
                  DOUBLE OR NOTHING
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xl-4"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
