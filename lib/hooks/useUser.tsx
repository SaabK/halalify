import { createContext, useEffect, useState } from "react";
import { Subscription, UserDetails } from "../types";
import { User } from "@supabase/auth-helpers-nextjs";
import {
    useSessionContext,
    useUser as useSupaUser,
} from "@supabase/auth-helpers-react";

type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export interface Props {
    [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase,
    } = useSessionContext();
    const user = useSupaUser();

    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    const getUserDetails = () => supabase.from("users").select("*").single();
    const getSubscription = () =>
        supabase
            .from("subscriptions")
            .select("*, prices(*, products(*))")
            .in("status", ["trialing", "active"]); // Filters status and gives only trialing or active

    useEffect(() => {
        if (user && !isLoadingData && !userDetails && !subscription) {
            setIsLoadingData(true);

            Promise.allSettled([getUserDetails(), getSubscription()]).then(
                (results) => {}
            );
        }
    }, []);
};
