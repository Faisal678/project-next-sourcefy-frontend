import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isLoggedIn: boolean;
    user: any;
    registerFormData: any;
    informationData: any;
    roleData: any;
}

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
    registerFormData: null,
    informationData: null,
    roleData: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        signup: (state, action: PayloadAction<any>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            state.registerFormData = null;
            state.informationData = null;
            state.roleData = null;
        },
        setRegisterFormData: (state, action: PayloadAction<any>) => {
            state.registerFormData = action.payload;
        },
        setInformationData: (state, action: PayloadAction<any>) => {
            state.informationData = action.payload;
        },
        setRoleData: (state, action: PayloadAction<any>) => {
            state.roleData = action.payload;
        },
    },
});

// Export actions and reducer
export const { login, logout, signup, setRegisterFormData, setInformationData, setRoleData } = authSlice.actions;
export default authSlice.reducer;
