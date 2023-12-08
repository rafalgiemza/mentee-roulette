import React, {createContext, type PropsWithChildren, useCallback, useContext, useState} from "react";

interface PauseMeContextProps {
    pauseMe: boolean | undefined;
    onDataChange: (pauseMe: boolean | undefined) => void;
}

const PauseMeContext = createContext<PauseMeContextProps>({
    pauseMe: undefined,
    onDataChange: () => null,
});

export const usePauseMeContext = (): PauseMeContextProps => useContext(PauseMeContext);

interface PauseMeContextProviderProps extends PropsWithChildren {
    pauseMe: boolean | undefined;
}

export const PauseMeProvider: React.FC<PauseMeContextProviderProps> = ({ children, pauseMe: initData}) => {
    const [data, setData] = useState<boolean | undefined>(initData);

    const onDataChange = useCallback(
        (data: boolean | undefined) => setData(() => data),
        [setData]
    );

    return (
        <PauseMeContext.Provider value={{ pauseMe: data, onDataChange }}>
            {children}
        </PauseMeContext.Provider>
    );
};
