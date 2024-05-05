import Button from '@/components/shared/button';
import CustomInput from '@/components/shared/input';
import SourcefyHeader from '@/components/shared/sourcefy-header';
import Link from 'next/link';
import React from 'react'
import { useForgetPassword } from './use-forget-password.hook';

const ForgetPassword = () => {
    const {
        onSubmit,
        loading,
        register,
        handleSubmit,
        errors,
    } = useForgetPassword();

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
                        <h4>Forgot password</h4>
                        <strong className="login-text">
                            We will send account recovery details to the email you provided
                        </strong>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-area">
                            <CustomInput
                                label="Email"
                                type="email"
                                placeholder="Email"
                                {...register("email")}
                                className={errors.email ? "error-border" : ""}
                            />
                            <div className="input-icon">
                                <img src="images/envelope-icon.svg" alt="envelope-icon.svg" />
                            </div>
                        </div>
                        {errors.email && (
                            <span className="error-message">{errors.email.message}</span>
                        )}

                        <Button type="submit" disabled={loading} className="login-button">
                            {loading ? "Processing..." : "Continue"}
                        </Button>

                        <Link href="/login" className="sign-up-anchor">
                            Return to Login
                        </Link>

                        <div className="sign-up-area">
                            <span className="account-detail-text">
                                Don’t have an account?
                            </span>
                            <Link href="/register" className="sign-up-anchor">
                                Sign up for free
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword