import styles from '../styles/components/Rodape.module.css'

export function Rodape(){
    return(
        <div className={styles.containerFluidRodape}>
            <div className={styles.containerRodape}>
                <div className={styles.imgTexto}>
                    <img src="img/layout/logo.svg" />
                    <span>Projeto desenvolvido com o intuito de trazer ... para comunidade surda...</span>
                </div>
                <div className={styles.secoesRodape}>
                    <span>Seções</span>
                    <ul>
                        <li><a href="">Início</a></li>
                        <li><a href="">Quem Somos</a></li>
                        <li><a href="">Contribuidores</a></li>
                        <li><a href="">Dicionário</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">Parceiros</a></li>
                    </ul>
                </div>
                <div className={styles.enderecoRodape}>
                    <span>Informações de Contato</span>
                    
                </div>
            </div>
        </div>
    );
}