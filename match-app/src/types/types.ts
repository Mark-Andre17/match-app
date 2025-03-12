export enum MatchStatus {
    Finished = 'Finished',
    Ongoing = 'Ongoing',
    Scheduled = 'Scheduled'
};

export const MatchStatusDisplay: Record<MatchStatus, string> = {
    [MatchStatus.Finished]: 'Finished',
    [MatchStatus.Ongoing]: 'Live',
    [MatchStatus.Scheduled]: 'Match Preparing'
} as const;

interface IPlayer{
    kills: number;
    username: string;
};

interface ITeam{
    name: string;
    place: number;
    players: IPlayer[];
    points: number;
    total_kills: number;
};

interface IMatch{
    id: string;
    awayScore: number;
    awayTeam: ITeam;
    homeScore: number;
    homeTeam: ITeam;
    status: MatchStatus;
    time: string;
    title: string;
};

export type { IPlayer, ITeam, IMatch };