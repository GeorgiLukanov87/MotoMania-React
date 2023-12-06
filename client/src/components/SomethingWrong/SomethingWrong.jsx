import notFound404 from '../SomethingWrong/404.jpg';
import styles from './SomethingWrong.module.css'

export default function SomethingWrong() {
    return (
        <div className={styles.missingWrapper}>
            <h1 className={styles.missing}>
                <div className={styles.notFoundImg}>
                    <img src={notFound404} alt="404" />
                </div>
            </h1>
        </div>
    );
}