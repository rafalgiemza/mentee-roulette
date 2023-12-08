"use client"

import React, { createContext, type PropsWithChildren, useContext } from "react";
import {type UserResponse as IUserResponse} from "~/interfaces/users";
import {endpoints, getData} from "~/api";

interface CurrentUserContextProps {
    user: IUserResponse | undefined;
}

const CurrentUserContext = createContext<CurrentUserContextProps>({
    user: undefined,
});

export const useCurrentUserContext = (): CurrentUserContextProps => useContext(CurrentUserContext);

export const CurrentUserProvider: React.FC<PropsWithChildren> = async ({ children }) => {
    const user = await getData<IUserResponse>(endpoints.usersMe);

    return (
        <CurrentUserContext.Provider value={{ user }}>
            {children}
        </CurrentUserContext.Provider>
    );
};
