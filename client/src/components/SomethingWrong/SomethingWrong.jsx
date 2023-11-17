import styles from './SomethingWrong.module.css'

export default function SomethingWrong() {
    return (
        <div className={styles.missingWrapper}>

            <h1 className={styles.missing}>Something wrong!</h1>
        </div>
    );
}