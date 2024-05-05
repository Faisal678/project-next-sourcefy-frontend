import EmailSent from "@/components/pages/email-sent";
import React, { Fragment } from "react";

const Page = () => {
  return (
    <Fragment>
      <EmailSent
        emailVerificationImg={"images/verification-sent-icon.png"}
        emailVerificationHeading="Verification link has been sent to your email"
        emailVerificationText="Please check your email and click on the link to login"
      />
    </Fragment>
  );
};

export default Page;
