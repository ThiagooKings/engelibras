import styles from '../styles/components/Rodape.module.css'

export function Rodape() {
    return (
        <footer>
            {/* 
            <div className={styles.containerFluidRodape}>
                <div className={styles.containerRodape}>
                    <div className={styles.imgTexto}>
                        <img src="img/layout/logo.svg" />
                        <span>Projeto desenvolvido com o intuito de trazer ... para comunidade surda...</span>
                    </div>
                    <div className={styles.secoesRodape}>
                        <span className={styles.infoText}>Seções</span>
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
                        <span className={styles.infoText}>Informações de Contato</span>
                        <div className={styles.itemEndereco}>
                            <img src="icons/enderecoiconvermelho.svg" />
                            <span>
                                Universidade Federal de Itajubá, Câmpus Itabira.
                                Rua Irmã Ivone Drumond, 200 - Distrito Industrial II,
                                Itabira - MG.
                        </span>
                        </div>
                        <div className={styles.itemEmail}>
                            <img src="icons/emailiconvermelho.svg" />
                            <span>
                                engelibras@gmail.com.
                        </span>
                        </div>
                        <div className={styles.itemContato}>
                            <img src="icons/contatoiconvermelho.svg" />
                            <span>
                                (31) 99000-9900
                        </span>
                        </div>
                        <div className={styles.itemSiganos}>
                            <span>Siga-nos</span>
                            <a href=""><img src="icons/instagramicon.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
            */}
            <div className={styles.containerFluidRodapeinferior}>
                <span>Desenvolvido por</span> &nbsp; 
                <a href="https://github.com/ThiagooKings" target="_blank"><span>Thiago Reis</span></a>
            </div>
        </footer>
    );
}