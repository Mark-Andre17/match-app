import { createContext, useContext, ReactNode, FC, useState, useEffect, useCallback } from "react";
import { IMatch } from "../types/types";

interface IMatchContextType {
    matches: IMatch[];
    loading: boolean;
    error: string | null;
    fetchMatches: () => Promise<void>;
}

const MatchContext = createContext<IMatchContextType | null>(null);

export const MatchProvider:FC<{ children: ReactNode }> = ({ children }) => {

    const [matches, setMatches] = useState<IMatch[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const url = 'https://app.ftoyd.com/fronttemp-service/fronttemp';

    const fetchMatches = useCallback(async() => {

        setLoading(true);

        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            });

            if(!response.ok) throw new Error('Ошибка: не удалось загрузить информацию');
            const data = await response.json();        
            setMatches(data.data.matches);
            setLoading(false);
        }catch(err){
            setError(err instanceof Error ? err.message : 'Ошибка: не удалось загрузить информацию')
        }finally{
            setLoading(false);
        }
    }, [url]);
    
    useEffect(() => {
        fetchMatches();
    }, [])

    return (
        <MatchContext.Provider value={{
            matches,
            loading,
            error,
            fetchMatches
        }}>
            {children}
        </MatchContext.Provider>
    )
    
};


export const useMatchContext = () => {
    const context = useContext(MatchContext);
    if (!context) throw new Error('Context must be used within Provider');
    return context;
  }