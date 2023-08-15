import * as React from "react";
import { render } from "react-dom";
import { Title } from "./Title";
import { Timer } from "./Timer";
import { TimerBtnGroup } from "./TimerBtnGroup";

import "bulma/css/bulma.min.css";

function App() {
  const [timerState, updateState] = React.useState("reset");

  return (
    <div className="hero is-info is-fullheight is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title state={timerState} />
          <Timer state={timerState} />
          <TimerBtnGroup state={timerState} onChange={updateState} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
render(<App />, rootElement);
