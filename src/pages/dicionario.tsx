import Head from "next/head";
import React, { useMemo, useState } from "react";
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
    frases: Frase[];

}
type Frase = {
    id: string;
    frase: string;
    videofrase: string;
}

type Palavras = {
    palavras: Palavra[];
}


export default function Dicionario() {
    const db = PalavrasJSON as Palavras;

    const [palavraSelecionada, setPalavraSelecionada] = useState(-1);
    const [indexPalavra, setIndexPalavra] = useState(-1);
    const [tabSelecionado, setTabSelecionado] = useState(0);
    const [fraseSelecionada, setFraseSelecionada] = useState(0);
    const [indexFrase, setIndexFrase] = useState(0);
    const [audioClick, setAudioClick] = useState(false);
    const [buscaPalavra, setBuscaPalavra] = useState('');


    const palavrasFiltradas = useMemo(() => {
        const buscaLower = buscaPalavra.toLowerCase();
        return db.palavras.filter((palavra) => palavra.palavra.toLowerCase().includes(buscaLower));
    }, [buscaPalavra]);



    function selecionarPalavra(id: number, index: number) {
        setIndexPalavra(index);
        setPalavraSelecionada(id);
        setFraseSelecionada(1);
        setAudioClick(false);
    }

    function clicarAudio() {
        setAudioClick(!audioClick);
    }

    function selecionarTab(id: number) {
        setTabSelecionado(id);
    }

    function selecionarFrase(id: number, index: number) {
        setFraseSelecionada(id);
        setIndexFrase(index);
    }

    function buscarPalavra(value: string) {
        setBuscaPalavra(value);
        setIndexPalavra(-1);
        setPalavraSelecionada(-1);
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
                                    <input className={styles.inputBusca} type="text"
                                        placeholder="Pesquisar palavra"
                                        value={buscaPalavra}
                                        onChange={(ev) => buscarPalavra(ev.target.value)}>
                                    </input>
                                    {/*<button>Pesquisar</button>*/}
                                </form>
                            </div>
                            <div className={styles.selectIdioma}>
                                <li>
                                    <span> Portugês brasileiro </span>
                                    <img src="icons/bandeirabr.svg" />
                                </li>
                            </div>
                        </div>
                        <div className={styles.listaeConteudo}>
                            <div className={styles.listaPalavras}>
                                {palavrasFiltradas.length !== 0
                                    ?
                                    <table>
                                        <tbody>
                                            {palavrasFiltradas.map((palavra, index) => {
                                                return (
                                                    <tr key={palavra.id} onClick={() => selecionarPalavra(Number(palavra.id), index)}
                                                        className={palavraSelecionada === Number(palavra.id) ? styles.active : ''}>
                                                        <td>
                                                            {palavra.palavra}
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    :
                                    <div className={styles.buscaNaoEncontrada}>
                                        <span>Nenhuma palavra encontrada!</span>
                                    </div>
                                }


                            </div>
                            <div className={styles.palavraeSignificado}>
                                <div className={styles.tabs}>
                                    <div onClick={() => selecionarTab(0)} className={tabSelecionado === 0 ? `${styles.tabsItem} ${styles.tabsActive}` : styles.tabsItem}>
                                        <span>Palavra</span>
                                    </div>
                                    <div onClick={() => selecionarTab(1)} className={tabSelecionado === 1 ? `${styles.tabsItem} ${styles.tabsActive}` : styles.tabsItem}>
                                        <span>Significado</span>
                                    </div>
                                    <div className={styles.spaceItem} />
                                </div>
                                <div className={styles.conteudoTab}>
                                    {indexPalavra === -1 ? (
                                        <div className={styles.semPalavra}>
                                            <span>Selecione uma Palavra</span>
                                        </div>
                                    )
                                        : (
                                            <>
                                                <div className={styles.cabecalhoTabs}>
                                                    <span>{palavrasFiltradas[indexPalavra].palavra}</span>
                                                    <img src="icons/bandeirabr.svg" />
                                                    <button><img src="icons/soundicon.svg" onClick={clicarAudio} /></button>

                                                </div>

                                                {tabSelecionado === 0 ? (
                                                    <div className={styles.tabsConteudo}>
                                                        <div className={styles.videoPalavra}>
                                                            <video
                                                                autoPlay
                                                                muted
                                                                loop
                                                                src={palavrasFiltradas[indexPalavra].videopalavra} />
                                                        </div>
                                                        <div className={styles.imagemPalavra}>
                                                            <img src={palavrasFiltradas[indexPalavra].imgpalavra} />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div className={styles.tabsConteudo}>
                                                            <div className={styles.videoPalavra}>
                                                                <img src="img/dicionario/imageexemplo.png" />
                                                            </div>
                                                            <div className={styles.textoSignificado}>
                                                                <p>{palavrasFiltradas[indexPalavra].textosignificado}</p>
                                                            </div>
                                                        </div>
                                                        <div className={styles.frasesSignificados}>
                                                            <span>Frases comuns</span>
                                                        </div>
                                                        <div className={styles.tabsConteudo}>
                                                            <div className={styles.listaPalavras}>
                                                                <table>

                                                                    <tbody>
                                                                        {console.log(indexFrase)}
                                                                        {palavrasFiltradas[indexPalavra].frases.map((frases, index) => {
                                                                            return (
                                                                                <tr key={frases.id} onClick={() => selecionarFrase(Number(frases.id), index)}
                                                                                    className={fraseSelecionada === Number(frases.id) ? styles.active : ''}>
                                                                                    <td>
                                                                                        {frases.frase}
                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        })}
                                                                    </tbody>
                                                                </table>

                                                            </div>

                                                            <div className={styles.videoPalavra}>
                                                            <video
                                                                autoPlay
                                                                muted
                                                                loop
                                                                src={palavrasFiltradas[indexPalavra].frases[indexFrase].videofrase} />
                                                            </div>
                                                        </div>
                                                    </>
                                                )}

                                            </>
                                        )}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {(audioClick == true) &&
                    <audio
                        src={db.palavras[indexPalavra].audio}
                        autoPlay
                    />


                }
            </main>
            {/* Seção do Rodape */}
            <section>
                <Rodape />
            </section>
        </div >
    );
}