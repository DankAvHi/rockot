import textStyles from "../../../../styles/text.module.css";
import styles from "./ChampionsSection.module.css";
import ChampionsSectionText from "./ChampionsSection.text";

const ChampionsSection = () => {
    return (
        <section className={styles.ChampionsSection}>
            <div className={styles.text}>
                <h2 className={styles.heading}>{ChampionsSectionText.heading}</h2>
                <p className={styles.paragraph}>
                    {ChampionsSectionText.paragraph1.text1}
                    <span className={`${textStyles.accientText} ${styles.logoText}`}>
                        {ChampionsSectionText.paragraph1.logoText1}
                    </span>
                    {ChampionsSectionText.paragraph1.text2}
                </p>
                <p className={styles.paragraph}>{ChampionsSectionText.paragraph2}</p>
                <p className={styles.paragraph}>{ChampionsSectionText.paragraph3}</p>
                <ul className={styles.list}>
                    {ChampionsSectionText.list1.map((item) => (
                        <li className={styles.listItem} key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.imageWrapper}></div>
        </section>
    );
};

export default ChampionsSection;
