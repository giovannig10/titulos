import React from "react";
import styles from "./titulos.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/cards";

export default function Titulos() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.featured}>
          <h2>Conquistas Principais</h2>
          <div className={styles.featuredTrophies}>
            <Card ano={2012}
             capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"Corinthians 1 x 0 Chelsea"} textoAlt={"Troféu do Mundial de Clubes da FIFA 2012"}
               titulo={"Mundial de Clubes da FIFA"} />
            <Card ano={2012}
            capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"Corinthians 2 x 0 Boca Juniors"}
            textoAlt={"Troféu da Libertadores 2012"}
            titulo={"Libertadores da America"} />
            <Card ano={2000}
            capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"Corinthians 0 x 0 Vasco (4 x 3 nos pênaltis)"}
            textoAlt={"Troféu do Mundial de Clubes da FIFA 2000"}
            titulo={"Mundial de Clubes da FIFA"} />
          </div>
        </section>

        <section className={styles.newTrophies}>
          <h2>Campeonatos Brasileiros</h2>
          <div className={styles.trophiesGrid}>
            <Card
            ano={2017}
            capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"7° titulo brasileiro"}
            textoAlt={"Troféu do Campeonato Brasileiro 2017"}
            titulo={"Campeonato Brasileiro"} />
            <Card
            ano={2015}
            capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"6° titulo brasileiro"}
            textoAlt={"Troféu do Campeonato Brasileiro 2015"}
            titulo={"Campeonato Brasileiro"} />

            <Card
            ano={2011}
            capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"5° titulo brasileiro"}
            textoAlt={"Troféu do Campeonato Brasileiro 2011"}
            titulo={"Campeonato Brasileiro"} />
          </div>
        </section>

        <section className={styles.promo}>
          <h2>Campeonatos Estaduais</h2>
          <div className={styles.trophiesGrid}>
            <Card
            ano={2019}
            capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"29° titulo estadual"}
            textoAlt={"Troféu do Campeonato Paulista 2019"}
            titulo={"Campeonato Paulista"} />
            <Card
            ano={2018}
            capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
            detalhes={"28° titulo estadual"}
            textoAlt={"Troféu do Campeonato Paulista 2018"}
            titulo={"Campeonato Paulista"} />
          
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu do Campeonato Paulista 2018"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Campeonato Paulista</h3>
                <p className={styles.year}>2018</p>
                <p className={styles.details}>
                  <span className={styles.recordTitle}>
                    28º título estadual
                  </span>
                </p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.otherTrophies}>
          <h2>Outras Conquistas</h2>
          <div className={styles.trophiesGrid}>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu da Copa do Brasil 2009"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Copa do Brasil</h3>
                <p className={styles.year}>2009</p>
                <p className={styles.details}>
                  Corinthians 2 x 0 Internacional
                </p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu da Recopa Sul-Americana 2013"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Recopa Sul-Americana</h3>
                <p className={styles.year}>2013</p>
                <p className={styles.details}>Corinthians 3 x 1 São Paulo</p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu da Copa do Brasil 2002"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Copa do Brasil</h3>
                <p className={styles.year}>2002</p>
                <p className={styles.details}>Corinthians 3 x 2 Brasiliense</p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />    
    </div>
  );
};