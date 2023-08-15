import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const TimerBtnGroup = ({ state, onChange }) => (
  <div>
    <button
      className="button is-dark is-large"
      aria-label="Start count down"
      style={{ margin: 5 }}
      disabled={state === "started"}
      onClick={() => onChange("started")}
    >
      <FontAwesomeIcon icon={faPlayCircle} />
    </button>
    <button
      className="button is-dark is-large"
      aria-label="Pause count down"
      style={{ margin: 5 }}
      disabled={state !== "started"}
      onClick={() => onChange("paused")}
    >
      <FontAwesomeIcon icon={faPauseCircle} />
    </button>
    <button
      className="button is-dark is-large"
      aria-label="Reset count down"
      style={{ margin: 5 }}
      onClick={() => onChange("reset")}
    >
      <FontAwesomeIcon icon={faUndo} />
    </button>
  </div>
);

TimerBtnGroup.propTypes = {
  state: PropTypes.oneOf(["started", "paused", "reset"]),
  onChange: PropTypes.func.isRequired,
};
