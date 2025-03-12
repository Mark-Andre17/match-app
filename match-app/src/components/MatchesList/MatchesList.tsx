import { MatchCard } from "../MatchCard/MatchCard";
import { useMatchContext } from "../../context/context";
import styles from "./MatchesList.module.css";

export const MatchesList = () => {
    const { matches } = useMatchContext();
    const matchesList = matches.map((item) => <MatchCard key={item.title} match={item}/>)
    return (
        <ul className={styles.list}>
            {matchesList}
        </ul>
    )
};