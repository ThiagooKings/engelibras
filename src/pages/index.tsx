import React from 'react';
import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import { Rodape } from '../components/Rodape';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio | Engelibras</title>
      </Head>
      <main>
        {/* Seção de Quem Somos */}
        <section className={`${styles.containerFluid} ${styles.sectionBox}`}>
          <h1>
            <span className={styles.redText}>Quem</span>
            <span className={styles.blueText}> Somos</span>
          </h1>
          <div className={`${styles.container} ${styles.containerQS}`}>
            <div className={styles.imgBox}>
              <img src="img/layout/logo.svg" />
            </div>
            <div className={styles.textBox}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              </p>
            </div>
          </div>

        </section>
        {/* Seção de Contribuidores */}
        <section className={`${styles.containerFluid} ${styles.sectionContribuidores}`}>
          <h1>
            <span className={styles.redText}>Contri</span>
            <span className={styles.blueText}>Buidores</span>
          </h1>
          <h3>
            <span className={styles.subText}>Essas são as pessoas que contribuíram com o projeto: </span>
          </h3>
          <div className={`${styles.container} ${styles.containerFlex}`}>
            <div className={styles.boxContribuuidores}>
              <div className={styles.imgContribuidores}>
                <img src="img/content/contributors/fperfilquadrada.png" />
              </div>
              <div className={styles.nomeContribuidor}>
                <span>Thiago Reis</span>
              </div>
              <div className={styles.funcaonoProjeto}>
                <span>desenvolvedor</span>
              </div>
              <div className={styles.depoimentoContribuidor}>
                <p>
                  “Foi uma experiência incrível poder participar do projeto. Agregou muito conhecimento e pude conhecer um mundo que não conhecia.”
                  </p>
              </div>
              <div className={styles.iconesSociais}>
                <a href="https://facebook.com" target="_blank"><img src="icons/facebookicon.svg" /></a>
                <a href="https://instagram.com" target="_blank"><img src="icons/instagramicon.svg" /></a>
                <a href="https://linkedin.com" target="_blank"><img src="icons/linkedinicon.svg" /></a>
              </div>
            </div>
            <div className={styles.boxContribuuidores}>
              <div className={styles.imgContribuidores}>
                <img src="img/content/contributors/fperfilquadrada.png" />
              </div>
              <div className={styles.nomeContribuidor}>
                <span>Thiago Reis</span>
              </div>
              <div className={styles.funcaonoProjeto}>
                <span>desenvolvedor</span>
              </div>
              <div className={styles.depoimentoContribuidor}>
                <p>
                  “Foi uma experiência incrível poder participar do projeto. Agregou muito conhecimento e pude conhecer um mundo que não conhecia.”
                  </p>
              </div>
              <div className={styles.iconesSociais}>
                <a href="https://facebook.com" target="_blank"><img src="icons/facebookicon.svg" /></a>
                <a href="https://instagram.com" target="_blank"><img src="icons/instagramicon.svg" /></a>
                <a href="https://linkedin.com" target="_blank"><img src="icons/linkedinicon.svg" /></a>
              </div>
            </div>
            <div className={styles.boxContribuuidores}>
              <div className={styles.imgContribuidores}>
                <img src="img/content/contributors/fperfilquadrada.png" />
              </div>
              <div className={styles.nomeContribuidor}>
                <span>Thiago Reis</span>
              </div>
              <div className={styles.funcaonoProjeto}>
                <span>desenvolvedor</span>
              </div>
              <div className={styles.depoimentoContribuidor}>
                <p>
                  “Foi uma experiência incrível poder participar do projeto. Agregou muito conhecimento e pude conhecer um mundo que não conhecia.”
                  </p>
              </div>
              <div className={styles.iconesSociais}>
                <a href="https://facebook.com" target="_blank"><img src="icons/facebookicon.svg" /></a>
                <a href="https://instagram.com" target="_blank"><img src="icons/instagramicon.svg" /></a>
                <a href="https://linkedin.com" target="_blank"><img src="icons/linkedinicon.svg" /></a>
              </div>
            </div>
            <div className={styles.boxContribuuidores}>
              <div className={styles.imgContribuidores}>
                <img src="img/content/contributors/fperfilquadrada.png" />
              </div>
              <div className={styles.nomeContribuidor}>
                <span>Thiago Reis</span>
              </div>
              <div className={styles.funcaonoProjeto}>
                <span>desenvolvedor</span>
              </div>
              <div className={styles.depoimentoContribuidor}>
                <p>
                  “Foi uma experiência incrível poder participar do projeto. Agregou muito conhecimento e pude conhecer um mundo que não conhecia.”
                  </p>
              </div>
              <div className={styles.iconesSociais}>
                <a href="https://facebook.com" target="_blank"><img src="icons/facebookicon.svg" /></a>
                <a href="https://instagram.com" target="_blank"><img src="icons/instagramicon.svg" /></a>
                <a href="https://linkedin.com" target="_blank"><img src="icons/linkedinicon.svg" /></a>
              </div>
            </div>
            <div className={styles.boxContribuuidores}>
              <div className={styles.imgContribuidores}>
                <img src="img/content/contributors/fperfilquadrada.png" />
              </div>
              <div className={styles.nomeContribuidor}>
                <span>Thiago Reis</span>
              </div>
              <div className={styles.funcaonoProjeto}>
                <span>desenvolvedor</span>
              </div>
              <div className={styles.depoimentoContribuidor}>
                <p>
                  “Foi uma experiência incrível poder participar do projeto. Agregou muito conhecimento e pude conhecer um mundo que não conhecia.”
                  </p>
              </div>
              <div className={styles.iconesSociais}>
                <a href="https://facebook.com" target="_blank"><img src="icons/facebookicon.svg" /></a>
                <a href="https://instagram.com" target="_blank"><img src="icons/instagramicon.svg" /></a>
                <a href="https://linkedin.com" target="_blank"><img src="icons/linkedinicon.svg" /></a>
              </div>
            </div>
            <div className={styles.boxContribuuidores}>
              <div className={styles.imgContribuidores}>
                <img src="img/content/contributors/fperfilquadrada.png" />
              </div>
              <div className={styles.nomeContribuidor}>
                <span>Thiago Reis</span>
              </div>
              <div className={styles.funcaonoProjeto}>
                <span>desenvolvedor</span>
              </div>
              <div className={styles.depoimentoContribuidor}>
                <p>
                  “Foi uma experiência incrível poder participar do projeto. Agregou muito conhecimento e pude conhecer um mundo que não conhecia.”
                  </p>
              </div>
              <div className={styles.iconesSociais}>
                <a href="https://facebook.com" target="_blank"><img src="icons/facebookicon.svg" /></a>
                <a href="https://instagram.com" target="_blank"><img src="icons/instagramicon.svg" /></a>
                <a href="https://linkedin.com" target="_blank"><img src="icons/linkedinicon.svg" /></a>
              </div>
            </div>

          </div>

        </section>
        {/* Seção do Dicionário */}
        <section className={`${styles.containerFluid} ${styles.sectionBox}`}>
          <h1>
            <span className={styles.redText}>Dicio</span>
            <span className={styles.blueText}>nário</span>
          </h1>
          <div className={`${styles.container} ${styles.containerDic}`}>
            <div className={styles.textBox}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              </p>
            </div>
            <div className={styles.imgBox}>
              <img src="img/layout/dicionarioimg.svg" />
            </div>
            <div>
              <a href="">
                <button>Saiba mais</button>
              </a>
            </div>
          </div>
        </section>
        {/* Seção do Contato*/}
        <section className={`${styles.containerFluid} ${styles.contatoBox}`}>
          <h1>
            <span className={styles.redText}>Con</span>
            <span className={styles.blueText}>tato</span>
          </h1>
          <h3>
            <span className={styles.subText}>Entre em contato conosco </span>
          </h3>
          <div className={`${styles.container} ${styles.containerForm}`}>
            <div className={styles.inputsBox}>
              <form action="" method="post">
                <label>Nome*:</label>
                <input className={styles.inputPadrao} type="text" placeholder="Digite seu nome" required />
                <label>E-mail*:</label>
                <input className={styles.inputPadrao} type="email" placeholder="Digite seu e-mail" required />
                <label>Telefone:</label>
                <input className={styles.inputPadrao} type="text" placeholder="Digite seu telefone no formato: (xx) xxxxx-xxxx" />
                <label>Assunto*:</label>
                <input className={styles.inputPadrao} type="text" placeholder="Digite o assunto" required />
                <label>Mensagem*:</label>
                <textarea className={styles.inputPadrao} placeholder="Digite sua mensagem" required />
                <span>*Campos obrigatórios</span>
                <button type="submit">Enviar</button>
              </form>
            </div>
            <div className={styles.enderecoBox}>
              <span className={styles.infoContato}>Informações de Contato</span>
              <div className={styles.itemEndereco}>
                <img src="icons/enderecoiconazul.svg"/>
                <span className={styles.textEndereco}>Universidade Federal de Itajubá, Câmpus Itabira.
                      Rua Irmã Ivone Drumond, 200 - Distrito Industrial II,
                      Itabira - MG.
                </span>
              </div>
              <div className={styles.itemEmail}>
                <img src="icons/emailiconazul.svg"/>
                <span className={styles.textEndereco}>engelibras@gmail.com
                </span>
              </div>
              <div className={styles.itemContato}>
                <img src="icons/contatoiconazul.svg"/>
                <span className={styles.textEndereco}>(31) 99000-9900.
                </span>
              </div>
            </div>

          </div>
        </section>
        {/* Seção do Rodape */}
        <section>
          <Rodape />
        </section>
      </main>
    </div>
  );

}