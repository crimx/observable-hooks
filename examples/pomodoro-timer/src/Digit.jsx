import * as React from "react";
import PropTypes from "prop-types";
import styles from "./Digit.module.css";

/**
 * A timer digit with animation.
 */
export const Digit = React.memo(function Digit({ digit }) {
  return (
    <div className={styles.digit}>
      <div
        className={`${styles.stick} ${styles.one}`}
        style={getRotation(digit, 0)}
      >
        <div
          className={`${styles.stick} ${styles.three}`}
          style={getRotation(digit, 2)}
        >
          <div
            className={`${styles.stick} ${styles.seven}`}
            style={getRotation(digit, 6)}
          />
        </div>
      </div>
      <div
        className={`${styles.stick} ${styles.two}`}
        style={getRotation(digit, 1)}
      >
        <div
          className={`${styles.stick} ${styles.four}`}
          style={getRotation(digit, 3)}
        >
          <div
            className={`${styles.stick} ${styles.five}`}
            style={getRotation(digit, 4)}
          />
        </div>
      </div>
      <div
        className={`${styles.stick} ${styles.six}`}
        style={getRotation(digit, 5)}
      />
    </div>
  );
});

Digit.propTypes = {
  digit: PropTypes.number.isRequired,
};

function getRotation(digit, stick) {
  let digitMap = window[Symbol.for("digit_map")];
  if (!digitMap) {
    // prettier-ignore
    digitMap = [
      [ 90, 270,  90, 270, 270, 90,  90 ],
      [ 90, -90,   0, 360, 360, 90,   0 ],
      [ 90,   0,  90, 450,  90, 90,   0 ],
      [ 90, 270,  90, 270, 360,  0,   0 ],
      [  0, 270, 270, 360, 360, 90,   0 ],
      [  0, 270, 270, 270, 360,  0, 270 ],
      [  0, 270, -90, 270, 270,  0, -90 ],
      [ 90, 270,  90, 360, 360, 90,   0 ],
      [ 90, 270,  90, 270, 270,  0,  90 ],
      [ 90, 270,  90, 360, 360,  0,  90 ],
    ].map(d => d.map(s => ({ transform: `rotate(${s}deg)` })))
    window[Symbol.for("digit_map")] = digitMap;
  }
  return digitMap[digit][stick];
}
