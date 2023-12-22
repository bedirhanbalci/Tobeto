import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Variables from "./components/Variables";
import Props from "./components/Props";
import Loops from "./components/Loops";
import UserDetail from "./components/UserDetail";
import UsingState from "./components/UsingState";
import StateArray from "./components/StateArray";
import StateObject from "./components/StateObject";
import StateInput from "./components/StateInput";
import StateInput2 from "./components/StateInput2";
import UsingUseEffect from "./components/UsingUseEffect";
import MountUnmount from "./components/MountUnmount";
import UsingCss from "./components/UsingCss";
import UsingCssModule from "./components/CssModule/UsingCssModule";

const oInfo = {
  title: "This is a title",
  desc: "This is a description",
};

const users = [
  {
    id: 100,
    name: "Leanne Graham",
    username: "Bret",
    company: "Romaguera-Crona",
  },
  {
    id: 101,
    name: "Ervin Howell",
    username: "Antonette",
    company: "Deckow-Crist",
  },
  {
    id: 102,
    name: "Clementine Bauch",
    username: "Samantha",
    company: "Romaguera-Jacobson",
  },
];

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload!!! (Bedirhan Balci)
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <React.Fragment>
    //   <Header></Header>
    //   <p className="App">Hello World!</p>
    //   <label htmlFor="myinput">
    //     Name:
    //     <input id="myinput" />
    //   </label>
    // </React.Fragment>

    <div>
      {/* <Variables></Variables> */}
      {/* <Props name="Bedirhan" surname={"Balci"} age={24} developer={true} info={oInfo}></Props> */}
      {/* <Loops users={users}></Loops> */}
      {/* <UserDetail
        name={"Bedirhan Balci"}
        age={"30"}
        hobbies={["book", "guitar", "coding"]}
        address={{ detail: "address", zipcode: 80090 }}
      ></UserDetail> */}
      {/* <UsingState></UsingState> */}
      {/* <StateArray></StateArray> */}
      {/* <StateObject></StateObject> */}
      {/* <StateInput></StateInput> */}
      {/* <StateInput2></StateInput2> */}
      {/* <UsingUseEffect></UsingUseEffect> */}
      {/* <div>
        {isVisible && <MountUnmount />}
        <button onClick={() => setIsVisible(!isVisible)}>
          Show/Hide MountUnmount Component
        </button>
      </div> */}
      {/* <UsingCss></UsingCss> */}
      <UsingCssModule></UsingCssModule>
    </div>
  );
}

export default App;
