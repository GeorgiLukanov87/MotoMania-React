import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer1}>
            <div className={styles.footerWrapper}>

                <section className={styles.f1}>
                    <h3>CONTACTS</h3>
                    <p><i className="fa-solid fa-phone-volume"></i> +34/697243424</p>
                    <p><i className="fa-solid fa-envelope"></i> GeorgiStefanovLukanov@gmail.com</p>
                    <p><i className="fa-solid fa-location-dot"></i> c/Torrente-24 cp:47123, Valencia, Spain</p>
                </section>

                <section className={styles.f1}>
                    <h3>Top3 Moto-Brands</h3>
                    <p><a href="https://www.yamaha.com/" target="_blank">Yamaha</a></p>
                    <p><a href="https://global.honda/en/business_and_innovation/motorcycles/" target="_blank">Honda</a></p>
                    <p><a href="https://suzukicycles.com/" target="_blank">Suzuki</a></p>
                </section>

                <section className={styles.f1}>
                    <h3>FOLLOW US</h3>
                    <div className={styles.f1Wrapper}>
                        <a href="https://www.facebook.com/georgi.lukanov.16/" target="_blank">
                            <i className="fa-brands fa-facebook"></i></a>

                        <a href="https://github.com/GeorgiLukanov87" target="_blank">
                            <i className="fa-brands fa-github"></i></a>

                        <a href="https://www.youtube.com/@GLukanov87/videos" target="_blank">
                            <i className="fa-brands fa-youtube"></i></a>

                        <a href="https://www.instagram.com/georgi_lukanov/?hl=bg" target="_blank">
                            <i className="fa-brands fa-instagram"></i></a>
                    </div>
                </section>

            </div>
        </div>
    );
}