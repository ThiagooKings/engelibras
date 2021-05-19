import React from 'react';
import Head from 'next/head'
import styles from '../styles/pages/Parceiros.module.css'
import { Rodape } from '../components/Rodape';
import { Menu } from '../components/Menu';

export default function Parceiros() {
    return (
        <>
            <Head>
                <title>Parceiros | Engelibras</title>
            </Head>
            <main>
                {/* Seção do Banner */}
                <section className={`${styles.containerFluid} ${styles.sectionBanner}`}>
                    <Menu />
                    <div className={styles.conteudoBanner}>
                        <div className={styles.textoBanner}>
                            <h2> Conheça nossos parceiros </h2>
                            <span>
                                Descubra quem são nossos parceiros e aprenda
                                sobre conteudos relacionados à surdez.
                            </span>
                            <a href="" target="_blank"><button>Visualizar</button></a>
                        </div>
                        <div className={styles.imagemBanner}>
                            <img src="img/layout/imgbannerparceiros.svg" />
                        </div>
                    </div>
                </section>
                {/* Seção de Parceiros */}
                <section className={`${styles.containerFluid} ${styles.sectionBox}`}>
                    <h1>
                        <span className={styles.redText}>Parc</span>
                        <span className={styles.blueText}>eiros</span>
                    </h1>

                    <div className={styles.containerParceiros}>
                        <div className={styles.boxParceiros}>
                            <div className={styles.fotoParceiro}>
                                <img src="img/content/contributors/fperfilquadrada.png" />
                            </div>
                            <div className={styles.conteudoParceiro}>

                            </div>

                        </div>

                    </div>

                </section>
            </main>
            {/* Seção do Rodape */}
            <section>
                <Rodape />
            </section>
        </>
    )
}