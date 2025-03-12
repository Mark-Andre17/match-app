import { useCallback } from "react";
import { useMatchContext } from "../../context/context";
import { Error } from "./Error/Error";
import styles from "./Header.module.css";
import { PreLoading } from "./Loading/Loading";

export const Header = () => {
    const { fetchMatches, loading, error } = useMatchContext();

    const handleClick = useCallback(() => {
        fetchMatches();
    }, []);
    
    return (
        <header className={styles.header}>
            <h1>Match Tracker</h1>
            {error && <Error error={error} />}
            <button className={styles.header_button} onClick={handleClick}>
                <p>Обновить</p>
                {loading && <PreLoading />}
            </button>
        </header>
    )
};