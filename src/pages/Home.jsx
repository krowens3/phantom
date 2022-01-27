import React from "react";
import Counter from "../components/Counter";
import Mint from "../components/Mint";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
       <div className="homeTitle">Mint your very own Phantom NFT!</div>
      <div className="homeImage"><img src="images/ptm.png" alt="" /></div>
      {true && <div className="clock">
        <Counter />
        </div>}
      <div className="mintCard">{false && <Mint />}</div>


            <form className="email"> 
                <input type='text' placeholder='ex: myname@example.com'></input>
                <button classname='submitButton'value='Submit'>Submit</button>
            </form>


    </div>
  );
};

export default Home;
