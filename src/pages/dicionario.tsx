import Head from "next/head";
import React from "react";
import { Menu } from '../components/Menu';
import { Rodape } from "../components/Rodape";
import styles from '../styles/pages/Dicionario.module.css'

export default function Dicionario() {
    return (
        <div>
            <Head>
                <title>Dicionario | Engelibras</title>
            </Head>
            <main>
                {/* Seção do Banner */}
                <section className={`${styles.containerFluid} ${styles.sectionBanner}`}>
                    <Menu />
                    <div className={styles.conteudoBanner}>
                        <div className={styles.textoBanner}>
                            <h2> Explore nosso dicionário </h2>
                            <span>
                                Procure a palavra que deseja saber em português
                                e veja como ela é em libras!
                            </span>
                            <a href="" target="_blank"><button>Pesquisar</button></a>
                        </div>
                        <div className={styles.imagemBanner}>
                            <img src="img/layout/imgbannerdicionario.svg" />
                        </div>
                    </div>

                </section>
            </main>
            {/* Seção do Rodape */}
            <section>
                <Rodape />
            </section>
        </div>
    );
}