import Github from '../../components/Github';
import Portfolio from '../../components/Portfolio';
import Whatsapp from '../../components/Whatsapp';
import styles from '../../styles/home.module.scss';

export default function Home() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logoSection}>
                    <h1>João Gari</h1>
                </div>

                <div className={styles.top}>
                    <div className={styles.left}>
                        <Portfolio />
                    </div>

                    <div className={styles.right}>
                        <Github />
                        <Whatsapp />
                    </div>
                </div>

                <div className={styles.footer}>
                    <p>© João Gari — Desenvolvedor Full-Stack</p>
                </div>
            </div>
        </section>
    );
}
