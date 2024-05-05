'use client';

import { useState } from "react";
import { useSelector } from "react-redux";

export const useOnboard = () => {
    const [selectedCountry, setselectedCountry] = useState("");
    const roleData = useSelector((state: any) => state.auth);
    console.log("🚀 ~ useOnboard ~ roleData:", roleData)

    const handleCountryChange = (value: any) => {
        if (Array.isArray(value) && value.length > 0) {
            setselectedCountry(value[0].label);
        }
    };

    return {
        selectedCountry,
        handleCountryChange
    };
}
