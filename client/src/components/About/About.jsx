import aboutPicPath from "../About/sellamotorcycle.jpg.webp";
import style from "../About/About.module.css";

import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <div className={style.aboutWrapper}>

                <div className={style.aboutHeader}>
                    <h2>About us:</h2>
                    <p>
                        Welcome to <span className={style.titleSpan}>Moto-Mania</span>, your premier destination for quality motorcycles.
                        With a passion for two-wheelers, we offer a diverse selection of new and used motorcycles,
                        catering to riders of all preferences and skill levels. Our knowledgeable team ensures you find the perfect ride,
                        whether you seek adrenaline-pumping sports bikes or cruising classics. Committed to exceptional service,
                        we prioritize your satisfaction and offer reliable guidance throughout your purchase journey.
                        Explore our inventory today and embark on your next thrilling adventure with confidence.
                    </p>
                </div>

                <div className={style.aboutImgWrapper}>
                    <img src={aboutPicPath} alt="noimg" />
                </div>

                <div className={style.mainAbout}>
                    <div className={style.aboutSections}>
                        <h2>Easy Purchase:</h2>
                        <p>
                            At <span className={style.titleSpan}>Moto-Mania</span>, we redefine convenience in motorcycle buying.
                            Our streamlined process simplifies your purchase,
                            offering a hassle-free experience from browsing to ownership.
                            With user-friendly online tools and dedicated support,
                            acquiring your dream bike becomes effortless.
                            Trust us to make your buying journey smooth and straightforward,
                            ensuring satisfaction at every step. Discover the ease of purchasing your ideal motorcycle today.
                        </p>
                    </div>

                    <div className={style.aboutSections}>
                        <h2>Safety Focus:</h2>
                        <p>
                            Safety is paramount at <span className={style.titleSpan}>Moto-Mania</span>.
                            Beyond offering exceptional motorcycles,
                            we prioritize your well-being on the road.
                            Our commitment extends to providing safety-conscious riders with expert advice,
                            gear, and maintenance tips. We advocate for responsible riding and equip you with
                            the knowledge to make informed safety choices. Your security matters to us; let us
                            guide you towards a safe and enjoyable riding experience with our emphasis on rider
                            protection and awareness.
                        </p>
                    </div>

                    <div className={style.aboutSections}>
                        <h2>Short story about the best sport motorcycles from Japan</h2>
                        <p>
                            Once upon a time in the Land of the Rising Sun, there existed a realm where engineering prowess and a passion for speed converged into a phenomenon known as Japanese sport motorcycles.

                            At the heart of this tale were the meticulous craftsmen and engineers of Japan's revered motorcycle manufacturers. Their workshops were temples of innovation, where precision engineering met an unwavering dedication to performance.

                            The story began with the birth of iconic brands like Honda, Yamaha, Suzuki, and Kawasaki. These names became synonymous with cutting-edge technology and the pursuit of perfection in the realm of two-wheeled marvels.

                            The year was 1969 when Honda unleashed the world-changing CB750 Four. It was a revelation—a machine that combined reliability, power, and affordability in a way never seen before. This milestone marked the dawn of the superbike era, forever altering the landscape of motorcycle design.

                            Yamaha, not to be outdone, introduced the legendary Yamaha RD350, a two-stroke marvel that danced on the edge of exhilaration and danger, captivating riders with its ferocious power band.

                            Suzuki, with its revolutionary GSX-R series, redefined sportbikes in the 1980s. These machines were a symphony of lightweight frames and powerful engines, setting the benchmark for agility and speed.

                            Meanwhile, Kawasaki's Ninja lineage carved its path with a blend of raw power and futuristic design, earning a place in the hearts of adrenaline-seeking riders worldwide.

                            As the years passed, these manufacturers engaged in an exhilarating race of innovation. They pushed boundaries, introducing advanced electronics, aerodynamics, and cutting-edge materials into their motorcycles.

                            Each model released was not just a motorcycle; it was a statement—an embodiment of technological prowess and a tribute to the artistry of engineering.

                            From the thunderous roar of the engines to the sleek lines cutting through the air, Japanese sport motorcycles became an embodiment of speed, precision, and the relentless pursuit of perfection.

                            Their legacy continues to echo through time, inspiring generations of riders and enthusiasts, reminding them that within the gleaming frames and revving engines lies the spirit of a nation whose quest for excellence knows no bounds.
                        </p>
                    </div>
                </div>

            </div>
            <div className={style.buttonWrapper}>
                <button className="btn submit"><Link to={'/'}>Back to Home page</Link></button>
            </div>
        </>
    );
}