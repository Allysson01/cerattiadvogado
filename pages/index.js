import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const openMaps = () => {
    window.open(
      "https://www.google.com/maps/place/R.+Tiradentes,+17+-+Centro,+Canoas+-+RS,+92010-260/@-29.919136,-51.1805029,17z/data=!3m1!4b1!4m5!3m4!1s0x95197009c5e642af:0x89045a65ea48dce5!8m2!3d-29.919136!4d-51.1783142"
    );
  };
  return (
    <div className={styles.container}>
      <Head>
      <link
            rel="preload"
            href="/FontsFree-Net-TurismoCF-100.ttf"
            as="font"
            crossOrigin=""
          />
        <title>Rogério Ceratti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.imgInitial}>       
        <Image src="/advogado-mesa.jpg" alt="Plano de fundo" layout="fill" />
        <div className={styles.blackOut}>
          <section className={styles.cicle}></section>
          <div className={styles.Title}>
            <div className={styles.TitleDiv}>
              <h1>Rogério Ceratti</h1>
              <small>ADVOGADO</small>
            </div>
            <div className={styles.divbtn}>
              <div className={styles.btnTitle}>
                <Link
                  rel="stylesheet"
                  href="https://api.whatsapp.com/send?phone=555130599879&text=Olá.%20Gostaria%20informações..."
                >
                  <a target="_blank">
                    Entrar em contato <i className="bi bi-whatsapp"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className={styles.main}>
        <div style={{ textAlign: "center" }}>
          <div className={styles.Geo}>
            <i className="bi bi-geo-alt"></i>
          </div>
          R. Tiradentes, 17 - Centro, Canoas - RS, 92010-260
          <div className={styles.Maps} onClick={openMaps}>
            <Image
              src="/Map.png"
              alt="Endereço maps"
              width={800}
              height={400}
            />
          </div>
        </div>
      </article>

      <section className={styles.occupationArea}>
        <div className={styles.titleGridApps}>
          <span>Áreas de Atuação</span>
        </div>
        <div className={styles.gridOccupationArea}>
          <div className={styles.Card}>
            <div className={styles.innerCardOne}>
              <span>
                <Image
                  src="/trabalhista.jpg"
                  alt="trabalhista"
                  width={250}
                  height={150}
                />
              </span>
            </div>
            <div className={styles.innerCardTwo}>Direito Trabalhista</div>
          </div>
          <div className={styles.Card}>
            <div className={styles.innerCardOne}>
              <span>
                <Image
                  src="/consumidor.jpg"
                  alt="consumidor"
                  width={250}
                  height={150}
                />
              </span>
            </div>
            <div className={styles.innerCardTwo}>Direito do Consumidor</div>
          </div>
          <div className={styles.Card}>
            <div className={styles.innerCardOne}>
              <span>
                <Image
                  src="/familia.jpg"
                  alt="familia"
                  width={250}
                  height={150}
                />
              </span>
            </div>
            <div className={styles.innerCardTwo}>Direito de Família</div>
          </div>
          <div className={styles.Card}>
            <div className={styles.innerCardOne}>
              <span>
                <Image
                  src="/previdenciario.jpg"
                  alt="previdenciario"
                  width={250}
                  height={150}
                />
              </span>
            </div>
            <div className={styles.innerCardTwo}>Direito Previdenciário</div>
          </div>
        </div>
        <div className={styles.divbtn}>
          <div className={styles.btnSection}>
            <Link
              rel="stylesheet"
              href="https://api.whatsapp.com/send?phone=555130599879&text=Olá.%20Gostaria%20informações..."
            >
              <a target="_blank">
                Entrar em contato <i className="bi bi-whatsapp"></i>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.gridFooter}>
          <div className={styles.divOne}>
            <Image
              src="/menu.jpg"
              alt="Logo"
              width={320}
              height={190}
              className={styles.imgLogoFooter}
            />
          </div>
          <div className={styles.divTwo}>
            <div>
              <Link
                rel="stylesheet"
                href="https://www.instagram.com/rogerio.ceratti/?igshid=1wffowod8v1ug"
              >
                <a target="_blank">
                  <i className="bi bi-instagram"></i>
                </a>
              </Link>
            </div>
            <div>
              <Link
                rel="stylesheet"
                href="https://www.facebook.com/100520105359916/posts/121314666613793/?d=n"
              >
                <a target="_blank">
                  <i className="bi bi-facebook"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.divThree}>
            <ul>
              <li>
                <i className="bi bi-telephone"></i> (51) 3059-9879
              </li>
              <li>
                <i className="bi bi-whatsapp"></i> (51) 3059-9879
              </li>
              <li>
                <i className="bi bi-envelope"></i> contato@rogerioceratti.com.br
              </li>
              <li>
                <i className="bi bi-geo-alt"></i> R. Tiradentes, 17 - Canoas/RS
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
