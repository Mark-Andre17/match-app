import { FC } from "react";
import alert from "../../../assets/img/alert-triangle.svg";
import styles from "./Error.module.css";

interface IErrorProps{
    error: string | null;
}
export const Error:FC<IErrorProps> = ({ error }) => {
    return (
        <div className={styles.error}>
            <img src={alert} alt="error" />
            {error && <p>{error}</p>}
        </div>
    )
}