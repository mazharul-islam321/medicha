import { useEffect, useState } from "react";
import {
    getAuth,
    signOut,
    updateProfile,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from "../firebase/Firebase.Init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [regiError, setRegiError] = useState("");
    const [logInError, setLogInError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const signInUsingGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider);
    };
    const registerNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setRegiError("");
                setUserName(name);
            })
            .catch((error) => {
                setRegiError(error.message);
            });
    };
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name }).then(() => {});
    };
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLogInError("");
            })
            .catch((error) => {
                setLogInError(error.message);
            });
    };
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [auth]);

    return {
        user,
        regiError,
        logInError,
        isLoading,
        setIsLoading,
        logOut,
        signInUsingGoogle,
        signInUsingGithub,
        registerNewUser,
        processLogin,
    };
};

export default useFirebase;
