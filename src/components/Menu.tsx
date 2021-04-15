import styles from '../styles/components/Menu.module.css'
export function Menu() {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.logoMenu}>
                <a href="localhost:3000/index.tsx">
                    <img src="img/layout/logo.svg" />
                    <span className={styles.redText}>Enge</span>
                    <span className={styles.blueText}>Libras</span>
                </a>
            </div>
            <div className={styles.linksMenu}>
                <ul>
                    <li><a href="http://localhost:3000">Início</a></li>
                    <li><a href="">Quem Somos</a></li>
                    <li><a href="">Contribuidores</a></li>
                    <li><a href="">Dicionário</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Parceiros</a></li>
                </ul>
            </div>
        </div>
    );

}