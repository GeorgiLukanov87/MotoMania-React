import style from "../Spinner/Spinner.module.css";

export default function Spinner() {
    return (
        <div className={style.loadingShade}>
            Loading...
            <div className={style.spinner}></div>
        </div>
    );
}