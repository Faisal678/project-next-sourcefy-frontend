import React from "react";
import { useLogin } from "./use-login.hook";
import CustomInput from "@/components/shared/input";
import Button from "@/components/shared/button";
import CheckBox from "@/components/shared/checkbox";
import Link from "next/link";
import "./login.scss";
import SourcefyHeader from "@/components/shared/sourcefy-header";

const Login: React.FC = () => {
  const {
    onSubmit,
    loading,
    register,
    handleSubmit,
    errors,
    showPassword,
    toggleShowPassword,
  } = useLogin();

  return (
    <div className="login-form">
      <SourcefyHeader />
      <div
        className="login-image"
        style={{ backgroundImage: "url(/images/login-page-img.png)" }}
      ></div>
      <div className="login-form-area">
        <div className="login-area">
          <div className="login-heading">
            <h4>Log in</h4>
            <strong className="login-text">
              Welcome back! Please enter your details
            </strong>
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
                    placeholder="Enter your password"
                    className={errors.password ? "error-border" : ""}
                    {...register("password")}
                  />
                  <div className="input-icon">
                    <img
                      src="images/Lock-icon.svg"
                      alt="Lock-icon.svg"
                    />
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

            <div className="forgot-btn">
              <CheckBox label="Remember me" />
              <Link href="/forget-password" className="forget-password">
                Forgot Password?
              </Link>
            </div>

            <Button type="submit" disabled={loading} className="login-button">
              {loading ? "Logging in..." : "Log in"}
            </Button>

            <div className="sign-up-area">
              <span className="account-detail-text">
                Don’t have an account?
              </span>
              <Link href="/register" className="sign-up-anchor">
                Sign up for free
              </Link>
            </div>
            <div className="more-detail">
              <span className="or-text">Or</span>
            </div>
            <Button disabled={loading} className="google-login">
              <div className="google-icon">
                <img src="images/google-icon.svg" alt="google-icon" />
              </div>
              {loading ? "Processing..." : "Log in with Google"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
