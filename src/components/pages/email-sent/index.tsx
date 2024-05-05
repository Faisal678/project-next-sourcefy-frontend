import SourcefyHeader from "@/components/shared/sourcefy-header";
import React from "react";
import "./email-sent-verification.scss";
import Button from "@/components/shared/button";
import NoteSupplier from "@/components/shared/note-supplier";

interface IEmailSent {
  emailVerificationImg: string;
  emailVerificationHeading: string;
  emailVerificationText: string;
}

const EmailSent: React.FC<IEmailSent> = ({
  emailVerificationImg,
  emailVerificationHeading,
  emailVerificationText,
}) => {
  return (
    <div className="login-form">
      <SourcefyHeader />
      <div
        className="login-image"
        style={{ backgroundImage: "url(/images/login-page-img.png)" }}
      >
        <div className="suppliers-note">
          <div className="thumbs-up">
            <div className="thumbs-up-area">
              <img src="images/thumbs-up-icon.svg" alt="thumbs-up-icon" />
              <span>Top Notch Suppliers</span>
            </div>
          </div>
          <NoteSupplier noteText="Today, we have created an innovative solutions to the challenges that suppliers & consumers face in both their everyday lives and events." />
        </div>
      </div>

      <div className="login-form-area">
        <div className="email-verification-area">
          <div className="verification-sent-icon">
            <img src={emailVerificationImg} alt="verification-sent-icon" />
          </div>
          <div className="verification-message">
            <h3>{emailVerificationHeading}</h3>
            <p>{emailVerificationText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
