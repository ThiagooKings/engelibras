import styles from '../styles/components/MenuLogo.module.css'
export function MenuLogo() {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.logoMenu}>
                <a href="localhost:3000/index.tsx">
                    <img src="img/layout/logo.svg" />
                    <span className={styles.redText}>Enge</span>
                    <span className={styles.blueText}>Libras</span>
                </a>
            </div>
        </div>
    );

}