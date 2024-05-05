/* eslint-disable react/jsx-key */
"use client";

import RadioButton from "@/components/shared/radiobutton";
import React from "react";
import {
  Office,
  Facebook,
  Instagram,
  LinkedIn,
} from "../../../../public/svg/svgFiles/register-type";
import Button from "@/components/shared/button";
import Link from "next/link";
import "./register-type.scss";
import SourcefyHeader from "@/components/shared/sourcefy-header";
import { useRegistrationType } from "./use-register-type.hook";

const RegistrationType: React.FC = () => {
  const { registerTypeData, handleTypeChange, selectedType, handleContinue } =
    useRegistrationType();

  return (
    <div className="join-sourcefy">
      <div>
        <div className="container-sm">
          <SourcefyHeader sourcefyLogo={false} sourcefyGreenLogo={true} />
        </div>
      </div>
      <div className="join-sourcefy-area">
        <div className="join-sourcefy-heading">
          <h4>Join as a client or Supplier</h4>
        </div>
        <div className="sourcefy-radio">
          <ul className="sourcefy-radio-area">
            {registerTypeData?.map((item, index) => (
              <li className="sourcefy-join" key={index}>
                <div className="sourcefy-join-area select-radio">
                  <Office />
                  <strong className="job-name">{item.name}</strong>
                  <span className="job-title">{item.description}</span>
                  <RadioButton
                    value={item?.role}
                    checked={selectedType === item.role}
                    onChange={() => handleTypeChange(item.role)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="create-account-btn">
          <Button onClick={handleContinue}>Create Account Now</Button>
          <div className="account-login-area">
            <span className="acount-login">Already have an account?</span>
            <Link href="/login" className="login-anchor">
              login
            </Link>
          </div>
        </div>
      </div>

      <div className="social-area">
        <span className="social-text">Find us on:</span>
        <div className="social-networks">
          <div className="social-icon">
            <Facebook />
          </div>
          <div className="social-icon">
            <Instagram />
          </div>
          <div className="social-icon">
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationType;
