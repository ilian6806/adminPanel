import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
});

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [initialized, setInitialized] = useState(false);

    let value = { currentUser, setCurrentUser, initialized, setInitialized };

    useEffect(() => {
        return onAuthStateChangedListener((user) => {
                setInitialized(true);
                if (user) {
                    setCurrentUser(user);
                } else {
                    setCurrentUser(null);
                }
        });
    }, [currentUser]);

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>;
};