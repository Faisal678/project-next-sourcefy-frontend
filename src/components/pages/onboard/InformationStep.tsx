'use client';
import CountrySelect from "@/components/shared/country-select";
import Information from "@/components/shared/information";
import CustomInput from "@/components/shared/input";
import SourcefyOnboard from "@/components/shared/sourcefy-onboard";

import React, { useState } from "react";
import { useOnboard } from "./use-onboard.hook";
import Button from "@/components/shared/button";

const InformationStep = () => {
  const {
    selectedCountry,
    handleCountryChange
  } = useOnboard();

  return (
    <div className="sourcefy-info-block">
      <SourcefyOnboard
        sourcefyLogoGreen="images/sourcefy-logo-light-green.svg"
        sourcefyHeading="Welcome to Sourcefy! Let's get you started."
        sourcefyText="It only takes a few minutes"
      />
      <div className="info-block">
        <Information />
        <div className="info-block-area">
          <h4>You basic information</h4>
          <CustomInput
            label="Your name"
            type="text"
            placeholder="Your full name"
          />
          <CountrySelect
            label="Country"
            selectType="createJob"
            selectedCountry={selectedCountry}
            onChange={handleCountryChange}
          />
          <Button className="info-block-btn">
            Continue
            {/* {loading ? "Processing..." : "Log in with Google"} */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InformationStep;
