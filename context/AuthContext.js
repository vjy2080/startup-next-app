
'use client';
// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem("login");
        setIsAuthenticated(!!auth);
    }, []);

    const login = () => {
        localStorage.setItem("login", true);
        setIsAuthenticated(true);
    }
    const logout = () => {
        localStorage.removeItem("login");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
