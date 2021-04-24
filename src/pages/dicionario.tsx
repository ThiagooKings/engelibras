import Head from "next/head";
import React, { useState } from "react";
import { Menu } from '../components/Menu';
import { Rodape } from "../components/Rodape";
import styles from '../styles/pages/Dicionario.module.css'
import PalavrasJSON from '../../palavras.json'


    type Palavra = {
        id: string;
        palavra: string;
        idioma: string;
        bandeira: string;
        audio: string;
        videopalavra: string;
        imgpalavra: string;
        videosignificado: string;
        textosignificado: string;
        
    }
    type Frase = {
        id: string;
        frase: string;
        videofrase: string;
    }

    type Palavras = {
        palavras: Palavra [];
    }


export default function Dicionario( ) {
    const palavras : Palavras = PalavrasJSON ;
    const [palavraSelecionada, setPalavraSelecionada] = useState(-1); 

    function selecionarPalavra(id: number){
        setPalavraSelecionada(id);
    }


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
                {/* Seção conteudo dicionario */}
                <section className={`${styles.containerFluid} ${styles.sectionBox}`}>
                    <h1>
                        <span className={styles.redText}>Dicio</span>
                        <span className={styles.blueText}>Nário</span>
                    </h1>
                    <div className={styles.container}>
                        <div className={styles.buscaeIdioma}>
                            <div className={styles.buscaPalavra}>
                                <form action="" method="post">
                                    <input className={styles.inputBusca} type="text" placeholder="Pesquisar palavra"></input>
                                    <button>Pesquisar</button>
                                </form>
                            </div>
                            <div className={styles.selectIdioma}>
                                <li>
                                    <span> Portugês brasileiro </span> <img src="icons/bandeirabr.svg" />
                                </li>
                            </div>
                        </div>
                        <div className={styles.listaeConteudo}>
                            <div className={styles.listaPalavras}>
                                <table>
                                  
                                    <tbody>
                                    {palavras.palavras.map((palavra) => {
                                           return(
                                                <tr key={palavra.id} onClick={() => selecionarPalavra(Number(palavra.id))}
                                                className={palavraSelecionada === Number(palavra.id) ? styles.active : ''}>
                                                    <td>
                                                        {palavra.palavra}
                                                    </td>
                                                </tr>
                                           )
                                       })}
                                    </tbody>
                                </table>

                            </div>
                            <div className={styles.palavraeSignificado}>


                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Seção do Rodape */}
            <section>
                <Rodape />
            </section>
        </div >
    );
}