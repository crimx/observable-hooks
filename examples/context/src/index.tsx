import { FC } from "react";
import ReactDOM from "react-dom/client";
import { NormalValueExample, NormalValueDescendant } from "./NormalValue";
import {
  ObservableValueExample,
  ObservableValueDescendant,
} from "./ObservableValue";

import "bulma/css/bulma.min.css";

const App: FC = () => {
  return (
    <div className="columns">
      <div className="column">
        <NormalValueExample>
          <NormalValueDescendant />
        </NormalValueExample>
      </div>
      <div className="column">
        <ObservableValueExample>
          <ObservableValueDescendant />
        </ObservableValueExample>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
