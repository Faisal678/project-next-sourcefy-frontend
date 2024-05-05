import Button from '@/components/shared/button';
import CustomInput from '@/components/shared/input';
import SourcefyHeader from '@/components/shared/sourcefy-header';
import React from 'react'
import { useResetPassword } from './use-reset-password.hook';

const ResetPassword = () => {
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
    } = useResetPassword();

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
                        <h4>Reset password</h4>
                        <strong className="login-text">
                            Now you can reset your password for better security
                        </strong>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="password-field">
                            <div className="password-field-area">
                                <CustomInput
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className={errors.password ? "error-border" : ""}
                                    {...register("password")}
                                />
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

                        <div className="password-field">
                            <div className="password-field-area">
                                <CustomInput
                                    label="Confirm Password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className={errors.confirmPassword ? "error-border" : ""}
                                    {...register("confirmPassword")}
                                />
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
                            {loading ? "Processing..." : "Change password"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword