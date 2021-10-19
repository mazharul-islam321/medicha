import { useEffect, useState } from "react";
import {
    getAuth,
    signOut,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
} from "firebase/auth";
import initializeAuthentication from "../firebase/Firebase.Init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            console.log(result);
        });
    };
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider).then(() => {});
    };
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth]);

    return {
        user,
        logOut,
        signInUsingGoogle,
        signInUsingGithub,
    };
};

export default useFirebase;
