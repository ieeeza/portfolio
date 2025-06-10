import styles from "./page.module.css"

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.container1}>
                <div>
                    <div className={styles.containerName}>
                        <p>César Pereira dos Santos Filho</p>
                    </div>
                    <div className={styles.containerRole}>
                        <p>FullStack and Software Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
