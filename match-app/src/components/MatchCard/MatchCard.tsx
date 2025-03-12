import { FC, memo, useMemo } from 'react';
import { IMatch, MatchStatus, MatchStatusDisplay } from '../../types/types';
import avatar from '../../assets/img/icon.svg';
import styles from './MatchCard.module.css';

interface IMatchCardProps {
    match: IMatch;
}

export const MatchCard:FC<IMatchCardProps> = memo(({ match }) => {

    const statusClassMap = useMemo(() => ({
        [MatchStatus.Scheduled]: styles.statusScheduled,
        [MatchStatus.Ongoing]: styles.statusOngoing,
        [MatchStatus.Finished]: styles.statusFinished,
    }), [styles]);

    const statusClass = statusClassMap[match.status];
    const displayStatus = MatchStatusDisplay[match.status];
   
    return (
        <>
            <li className={styles.card}>
                <div className={styles.card_team}>
                    <img src={avatar} alt={match.title} width={40} height={40}/>
                    <p>{match.awayTeam.name}</p>
                </div>
                <div className={styles.card_score}>
                    <p>{match.awayScore} : {match.homeScore}</p>
                    <p className={`${styles.card_icon} ${styles.status} ${statusClass}`}>{displayStatus}</p>
                </div>
                <div className={styles.card_team}>
                    <p>{match.homeTeam.name}</p>
                    <img src={avatar} alt={match.title} width={40} height={40}/>
                </div>
            </li>
        </>
    )
});