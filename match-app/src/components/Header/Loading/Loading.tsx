import load from "../../../assets/img/Union.svg";
import load2 from "../../../assets/img/Union2.svg";
import styles from "./Loading.module.css";

export const PreLoading = () => {
    return (
        <div className={styles.loading}>
            <img className={styles.arrow_top} src={load} alt="arrow" />
            <img className={styles.arrow_bottom} src={load2} alt="arrow" />
        </div>
    )
}