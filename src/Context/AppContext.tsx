import { useState, useCallback, useEffect, useContext, createContext } from "react";

interface IContextProp {
    children: any
}

type Calculator = {
    answer: number | string,
    first_input: number,
    second_input: number,
    operator: string
}

type CalculatorList = Array<Calculator> | []

const AppContext = createContext<any>(null);

const AppProvider = ( ({ children } : IContextProp) => {
    
    const [calculatorList, setCalculatorList] = useState<CalculatorList>([]);

    const value = {
        setCalculatorList
    }

    return <AppContext.Provider value = { value }>
        {children}
    </AppContext.Provider>
})

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("Error context undefined");
    }
    return context
}

export { AppContext, AppProvider, useAppContext }