'use client';

import { login } from '@/services/auth.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
});

export const useLogin = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            // Perform login logic
            console.log("Logging in...", data);
            await login(data)
            setLoading(false);
            router.push('/dashboard');
        } catch (error) {
            console.error("Login error:", error);
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
        toggleShowPassword
    };
}
