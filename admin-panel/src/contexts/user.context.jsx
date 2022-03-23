import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
});

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        return onAuthStateChangedListener((user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });
    }, [currentUser]);

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>;
};