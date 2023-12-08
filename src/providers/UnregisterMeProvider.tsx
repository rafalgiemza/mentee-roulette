import React, {createContext, type PropsWithChildren, useCallback, useContext, useState} from "react";

interface UnregisterMeContextProps {
    connectedWithCronofy: boolean | undefined;
    onDataChange: (connectedWithCronofy: boolean | undefined) => void;
}

const UnregisterMeContext = createContext<UnregisterMeContextProps>({
    connectedWithCronofy: undefined,
    onDataChange: () => null,
});

export const useUnregisterMeContext = (): UnregisterMeContextProps => useContext(UnregisterMeContext);

interface UnregisterMeContextProviderProps extends PropsWithChildren {
    connectedWithCronofy: boolean | undefined;
}

export const UnregisterMeProvider: React.FC<UnregisterMeContextProviderProps> = ({ children, connectedWithCronofy: initData}) => {
    const [data, setData] = useState<boolean | undefined>(initData);

    const onDataChange = useCallback(
        (data: boolean | undefined) => setData(() => data),
        [setData]
    );

    return (
        <UnregisterMeContext.Provider value={{ connectedWithCronofy: data, onDataChange }}>
            {children}
        </UnregisterMeContext.Provider>
    );
};
