import style from "../About/About.module.css";

export default function About() {
    return (
        <>
            <div className={style.aboutHeader}>"Welcome to [Seller Name], your premier destination for quality motorcycles.
                With a passion for two-wheelers, we offer a diverse selection of new and used motorcycles,
                catering to riders of all preferences and skill levels. Our knowledgeable team ensures you find the perfect ride,
                whether you seek adrenaline-pumping sports bikes or cruising classics. Committed to exceptional service,
                we prioritize your satisfaction and offer reliable guidance throughout your purchase journey.
                Explore our inventory today and embark on your next thrilling adventure with confidence."
            </div>

            <div className={style.mainAbout}>
                <div>
                    <h2>Easy Purchase:</h2>
                    <p>
                        "At [Seller Name], we redefine convenience in motorcycle buying.
                        Our streamlined process simplifies your purchase,
                        offering a hassle-free experience from browsing to ownership.
                        With user-friendly online tools and dedicated support,
                        acquiring your dream bike becomes effortless.
                        Trust us to make your buying journey smooth and straightforward,
                        ensuring satisfaction at every step. Discover the ease of purchasing your ideal motorcycle today."
                    </p>

                </div>

                <div>
                    <h2>Safety Focus:</h2>
                    <p>
                        "Safety is paramount at [Seller Name].
                        Beyond offering exceptional motorcycles,
                        we prioritize your well-being on the road.
                        Our commitment extends to providing safety-conscious riders with expert advice,
                        gear, and maintenance tips. We advocate for responsible riding and equip you with
                        the knowledge to make informed safety choices. Your security matters to us; let us
                        guide you towards a safe and enjoyable riding experience with our emphasis on rider
                        protection and awareness."
                    </p>

                </div>

            </div>
        </>
    );
}