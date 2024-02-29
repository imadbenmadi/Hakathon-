import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

const initialState = {
    isAuth: false,
    first_name: "",
    last_name: "",
    home_number: "",
    // adress: "",
    id: null,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuth: true,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                phone_number: action.payload.phone_number,
                email: action.payload.email,
                password: action.payload.password,
                // adress: action.payload.adress,
                id: action.payload.id,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuth: false,
                first_name: "",
                last_name: "",
                home_number: "",
                // adress: "",
                id: null,
            };

        default:
            return state;
    }
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const set_Auth = (isAuth) => {
        dispatch({ type: "SET_AUTH", payload: isAuth });
    };
    const store_login = (
        first_name,
        last_name,
        home_number,
        // adress,
        id
    ) => {
        dispatch({
            type: "LOGIN",
            payload: {
                first_name,
                last_name,
                home_number,
                // adress,                
                id,
            },
        });
    };

    const store_logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    const AppContextValue = {
        ...state,
        store_login,
        store_logout,
        set_Auth,
    };

    return (
        <AppContext.Provider value={AppContextValue}>
            {children}
        </AppContext.Provider>
    );
};
