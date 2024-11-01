import Head from "next/head";
import styles from "../styles/home.module.css";
import Image from 'next/image';
// import localFont from "next/font/local";

// Importando nossa imagem
import imgHero from '../../public/assets/hero.png';



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      {/* Tag do título da página, como ela é chamada lá encima! */}
      <Head>
        <title>Tarefas | Organize suas tarefas</title>
      </Head>
      
      {/* Início da construção da página */}

      <main className={styles.container}>
          
          {/* Image */}
          
          <div className={styles.logoContent}>
            {/* Tag "priority" -> prioriza o carregamento da imagem  */}
            <Image
            src={imgHero}
            className={styles.hero}
            alt="Logo Tarefas+"
            priority
            />
          </div>
          <h1 className={styles.title}>
            Sistema feito para você organizar <br /> 
            seus estudos e tarefas!
          </h1>
        
      </main>
    </>
  );
}
