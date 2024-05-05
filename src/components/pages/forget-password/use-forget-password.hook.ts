'use client';

import { forgetPassword } from '@/services/auth.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
});

export const useForgetPassword = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            await forgetPassword(data)
            setLoading(false);
            router.push('/email-sent');
        } catch (error) {
            console.error("Forget password error:", error);
            setLoading(false);
        }
    };

    return {
        onSubmit,
        loading,
        register,
        handleSubmit,
        errors,
    };
}
