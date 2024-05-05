"use client";

import React from "react";
import { useRegister } from "./use-register.hook";
import CustomInput from "@/components/shared/input";
import Button from "@/components/shared/button";
import Link from "next/link";
import SourcefyHeader from "@/components/shared/sourcefy-header";
import "./register.scss";
import { CircleGoodMark } from "../../../../public/svg/svgFiles/register";

const Register: React.FC = () => {
  const {
    onSubmit,
    loading,
    register,
    handleSubmit,
    errors,
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword
  } = useRegister();

  return (
    <div className="login-form">
      <SourcefyHeader />
      <div
        className="login-image"
        style={{ backgroundImage: "url(/images/login-page-img.png)" }}
      ></div>

      <div className="login-form-area">
        <div className="login-area">
          <div className="sign-uo-area">
            <div className="login-heading">
              <h4>Sign up</h4>
              <strong className="login-text">Welcome to Sourcefy</strong>
            </div>
            <div className="login-account">
              <span>Have already an account?</span>
              <Link href="/login" className="login-account-area">
                Log in now
              </Link>
            </div>
          </div>

          <Button disabled={loading} className="google-login">
            <div className="google-icon">
              <img src="images/google-icon.svg" alt="google-icon" />
            </div>
            {loading ? "Processing..." : "Sign up with Google"}
          </Button>

          <div className="more-detail more-detail-area">
            <span className="or-text">Or</span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-area">
              <CustomInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                className={errors.email ? "error-border" : ""}
                {...register("email")}
              />
              <div className="input-icon">
                <img src="images/envelope-icon.svg" alt="envelope-icon.svg" />
              </div>
            </div>
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}

            <div className="password-field">
              <div className="password-field-area">
                <div className="input-area">
                  <CustomInput
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    className={errors.password ? "error-border" : ""}
                    {...register("password")}
                  />
                  <div className="input-icon">
                    <img src="images/Lock-icon.svg" alt="Lock-icon.svg" />
                  </div>
                </div>
                <div className="eye-icon">
                  <img
                    src={
                      showPassword
                        ? "images/eye-icon.svg"
                        : "images/eye-icon.svg"
                    }
                    onClick={toggleShowPassword}
                    alt="eye-icon"
                  />
                </div>
              </div>
              {errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )}
            </div>

            <div className="required-password">
              <div className="required-num">
                <CircleGoodMark />
                <span className="required-text">Contain number</span>
              </div>
              <div className="required-num">
                <CircleGoodMark />
                <span className="required-text">Contain uppercase</span>
              </div>
              <div className="required-num">
                <CircleGoodMark />
                <span className="required-text">Minimum 8 characters </span>
              </div>
            </div>

            <div className="password-field">
              <div className="password-field-area">
                <div className="input-area">
                  <CustomInput
                    label="Re-enter Password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    className={errors.password ? "error-border" : ""}
                    {...register("confirmPassword")}
                  />
                  <div className="input-icon">
                    <img src="images/Lock-icon.svg" alt="Lock-icon.svg" />
                  </div>
                </div>
                <div className="eye-icon">
                  <img
                    src={
                      showConfirmPassword
                        ? "images/eye-icon.svg"
                        : "images/eye-icon.svg"
                    }
                    onClick={toggleShowConfirmPassword}
                    alt="eye-icon"
                  />
                </div>
              </div>
              {errors.confirmPassword && (
                <span className="error-message">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <Button type="submit" disabled={loading} className="login-button">
              {loading ? "Processing ..." : "Continue"}
            </Button>

            <div className="imp-note">
              <span>
                By clicking “Sign up”, you are creating a Sourcefy account, and
                you agree to Sourcefy’s
                <Link href="#" className="terms-conditions">
                  {" "}
                  Terms & Conditions.
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
