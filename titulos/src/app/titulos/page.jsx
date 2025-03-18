import React from "react";
import styles from "./titulos.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/cards";
import Section from "../components/section";

export default function Titulos() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>

    <Section titulo="Conquistas Principais">
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
    </Section>

        <Section titulo="Campeonatos Brasileiros">
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
        </Section>

        <Section titulo="Campeonatos Estaduais">
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

            <Card
              ano={2013}
              capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"27° titulo estadual"}
              textoAlt={"Troféu do Campeonato Paulista 2013"}
              titulo={"Campeonato Paulista"} />
        </Section>

        <Section titulo="Outras Conquistas">
        <Card
              ano={2013}
              capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"Corinthians 3 x 1 São Paulo"}
              textoAlt={"Troféu da Recopa Sul-Americana 2013"}
              titulo={"Recopa Sul-Americana"} />

            <Card
              ano={2002}
              capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"Corinthians 3 x 2 Brasiliense"}
              textoAlt={"Troféu da Copa do Brasil 2002"}
              titulo={"Copa do Brasil"} />

            <Card
              ano={1995}
              capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"}
              detalhes={"Corinthians 2 x 1 Grêmio"}
              textoAlt={"Troféu da Copa do Brasil 1995"}
              titulo={"Copa do Brasil"} />
        </Section>

      </main>

      <Footer />
    </div>
  );
};