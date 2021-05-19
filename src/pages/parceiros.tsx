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
                                <div className={styles.nomeParceiro}>
                                    <span>Thiago Reis</span>
                                </div>
                                <div className={styles.midiaSocial}>
                                    <span>Canal no Youtube</span>
                                </div>
                                <div className={styles.descricaoParceiro}>
                                    <p>
                                        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”
                                    </p>
                                </div>
                                <div className={styles.iconesSociais}>
                                    <a href="https://facebook.com" target="_blank"><img src="icons/facebookicon.svg" /></a>
                                    <a href="https://linkedin.com" target="_blank"><img src="icons/youtubeicon.svg" /></a>
                                    <a href="https://instagram.com" target="_blank"><img src="icons/instagramicon.svg" /></a>

                                </div>
                            </div>
                        </div>
                        <div className={styles.boxParceiros}>
                            <div className={styles.fotoParceiro}>
                                <img src="img/content/contributors/fperfilquadrada.png" />
                            </div>
                            <div className={styles.conteudoParceiro}>
                                <div className={styles.nomeParceiro}>
                                    <span>Thiago Reis</span>
                                </div>
                                <div className={styles.midiaSocial}>
                                    <span>Canal no Youtube</span>
                                </div>
                                <div className={styles.descricaoParceiro}>
                                    <p>
                                        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”
                                    </p>
                                </div>
                                <div className={styles.iconesSociais}>
                                    <a href="https://facebook.com" target="_blank"><img src="icons/facebookicon.svg" /></a>
                                    <a href="https://linkedin.com" target="_blank"><img src="icons/youtubeicon.svg" /></a>
                                    <a href="https://instagram.com" target="_blank"><img src="icons/instagramicon.svg" /></a>

                                </div>
                            </div>
                        </div>
                        <div className={styles.boxParceiros}>
                            <div className={styles.fotoParceiro}>
                                <img src="img/content/contributors/fperfilquadrada.png" />
                            </div>
                            <div className={styles.conteudoParceiro}>
                                <div className={styles.nomeParceiro}>
                                    <span>Thiago Reis</span>
                                </div>
                                <div className={styles.midiaSocial}>
                                    <span>Canal no Youtube</span>
                                </div>
                                <div className={styles.descricaoParceiro}>
                                    <p>
                                        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”
                                    </p>
                                </div>
                                <div className={styles.iconesSociais}>
                                    <a href="https://facebook.com" target="_blank"><img src="icons/facebookicon.svg" /></a>
                                    <a href="https://linkedin.com" target="_blank"><img src="icons/youtubeicon.svg" /></a>
                                    <a href="https://instagram.com" target="_blank"><img src="icons/instagramicon.svg" /></a>

                                </div>
                            </div>
                        </div>
                        <div className={styles.boxParceiros}>
                            <div className={styles.fotoParceiro}>
                                <img src="img/content/contributors/fperfilquadrada.png" />
                            </div>
                            <div className={styles.conteudoParceiro}>
                                <div className={styles.nomeParceiro}>
                                    <span>Thiago Reis</span>
                                </div>
                                <div className={styles.midiaSocial}>
                                    <span>Canal no Youtube</span>
                                </div>
                                <div className={styles.descricaoParceiro}>
                                    <p>
                                        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”
                                    </p>
                                </div>
                                <div className={styles.iconesSociais}>
                                    <a href="https://facebook.com" target="_blank"><img src="icons/facebookicon.svg" /></a>
                                    <a href="https://linkedin.com" target="_blank"><img src="icons/youtubeicon.svg" /></a>
                                    <a href="https://instagram.com" target="_blank"><img src="icons/instagramicon.svg" /></a>

                                </div>
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