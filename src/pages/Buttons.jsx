import Button from "components/common/Button";
import React from "react";

const buttons = [
  "primary",
  "dark",
  "warning",
  "danger",
  "success",
  "teal",
  "violet",
];

const Buttons = () => {
  return (
    <div className="container">
      <div className="buttons-container">
        <h3>Simple Buttons</h3>
        <div className="buttons">
          {buttons.map((btn) => (
            <Button key={btn} color={btn} ring>
              {btn}
            </Button>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h3>Rounded Buttons</h3>
        <div className="buttons">
          {buttons.map((btn) => (
            <Button key={btn} color={btn} rounded ring>
              {btn}
            </Button>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h3>Shadow Buttons</h3>
        <div className="buttons">
          {buttons.map((btn) => (
            <Button key={btn} color={btn} rounded shadow>
              {btn}
            </Button>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h3>Material Buttons</h3>
        <div className="buttons">
          {buttons.map((btn) => (
            <Button key={btn} color={btn} rounded material>
              {btn}
            </Button>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h3>Outline Buttons</h3>
        <div className="buttons">
          {buttons.map((btn) => (
            <Button key={btn} color={btn} rounded type="outline" ring>
              {btn}
            </Button>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h3>Sweet Buttons</h3>
        <div className="buttons">
          {buttons.map((btn) => (
            <Button key={btn} color={btn} type="sweet">
              {btn}
            </Button>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h3>Light Buttons</h3>
        <div className="buttons">
          {buttons.map((btn) => (
            <Button key={btn} color={btn} type="light" ring rounded>
              {btn}
            </Button>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h3>Gradient Buttons</h3>
        <div className="buttons">
          {buttons.map((btn) => (
            <Button key={btn} color={btn} type="gradient" ring rounded>
              {btn}
            </Button>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h3>Loading Buttons</h3>
        <div className="buttons">
          {buttons.map((btn) => (
            <Button key={btn} color={btn} ring rounded loading>
              <span className="spinner"></span>
            </Button>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <h3>Block Buttons</h3>
        <div className="buttons space-x-0 space-y-2">
          {buttons.map((btn) => (
            <Button key={btn} color={btn} ring rounded block>
              {btn}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
