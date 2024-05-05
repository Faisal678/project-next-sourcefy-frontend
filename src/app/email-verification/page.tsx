import EmailSent from "@/components/pages/email-sent";
import React, { Fragment } from "react";

const Page = () => {
  return (
    <Fragment>
      <EmailSent
        emailVerificationImg={"images/verification-verify-icon.png"}
        emailVerificationHeading="You have been Verified"
        emailVerificationText="Redirecting you to the main page"
      />
    </Fragment>
  );
};

export default Page;
