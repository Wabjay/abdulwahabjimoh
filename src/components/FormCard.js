import "./Forms/Forms.css";
import Image from "../images/back_icon.png"
import React from "react";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";

export default function FormCard({progressBar, children, currentStep, prevFormStep }) {
  let navigate = useNavigate();
  return (
    <div className="formCard">
      <Progress percent={progressBar} showInfo={false} />
      {currentStep < 5 && (
        <>
          {currentStep >= 0 ? (
            <button
              className="back"
              onClick={prevFormStep}
              type="button"
            >
              <img src={Image} 
         alt=""  />
         
              <p>Back</p>
            </button>
          ) :
            ( <button
              className="back"
              onClick={navigate("/")}
              type="button"
            >
              <img src={Image} 
         alt=""  />
         
              <p>Back</p>
            </button>
          )}

        </>
      )}
      {children}
    </div>
  );
}
