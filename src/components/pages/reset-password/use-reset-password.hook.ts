'use client';

import { resetPassword } from '@/services/auth.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is required').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    )
        .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const useResetPassword = () => {
    const router = useRouter();
    const searchParams = useSearchParams()

    const hash = searchParams.get('hash')

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            const payload = {
                ...data,
                hash
            };
            await resetPassword(payload)
            setLoading(false);
            // router.push('/dashboard');
        } catch (error) {
            console.error("Change password error:", error);
            setLoading(false);
        }
    };

    return {
        onSubmit,
        loading,
        register,
        handleSubmit,
        errors,
        showPassword,
        toggleShowPassword,
        showConfirmPassword,
        toggleShowConfirmPassword
    };
}
