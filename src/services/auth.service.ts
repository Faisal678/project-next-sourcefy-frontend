import { HTTP_CLIENT } from "../utils/axiosClient";

const login = async (params: any) => {
    return await HTTP_CLIENT.post("/auth/login", params);
};

const signup = async (params: any) => {
    return await HTTP_CLIENT.post("/auth/register", params);
};

const activateAccount = async (hash: any) => {
    return await HTTP_CLIENT.post("/auth/activate-account", hash);
};

const forgetPassword = async (email: any) => {
    return await HTTP_CLIENT.post("/auth/forget-password", email);
};

const resetPassword = async (params: any) => {
    return await HTTP_CLIENT.post("/auth/reset-password", params);
};

export {
    login,
    signup,
    forgetPassword,
    resetPassword,
    activateAccount
};
