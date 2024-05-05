'use client';

import { setRegisterFormData } from '@/redux/reducers/auth.slice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string().required('Password is required').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    )
        .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password')], 'Passwords must match')
});

export const useRegister = () => {
    const router = useRouter();
    const dispatch = useDispatch();

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
    const [selectedCountry, setselectedCountry] = useState("");
    const [role, setRole] = useState<string | null>('null');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedRole = localStorage.getItem('selectedType') || 'null';
            setRole(storedRole);
        }
    }, []);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleCountryChange = (value: any) => {
        if (Array.isArray(value) && value.length > 0) {
            setselectedCountry(value[0].label);
        }
    };

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            const userData = {
                ...data,
                role,
                country: selectedCountry
            };
            dispatch(setRegisterFormData(userData));
            setLoading(false);
            router.push('/onboard');
        } catch (error) {
            console.error("Register error:", error);
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
        toggleShowConfirmPassword,
        handleCountryChange,
        selectedCountry,
    };
}
