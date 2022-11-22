<template>
  <b-container id="app">
    <HeaderComponent></HeaderComponent>
    <b-aspect :aspect="aspect" style="border: 1px solid black;">
      <img src="../assets/logo.png" style="width: 2rem;
    height: 2rem;">
      <b-aspect id="ciao" :aspect="aspect" style="border: 1px solid black;">
        <img src="../assets/zampamano.webp" style="width: 100%; height: 100%; opacity: 0.6;">
        <p class="centered">
          ANIMAL HOUSE
        </p>
        <p class="sopra">
          l'attenzione che nasce da dentro<br>primo centro completo per l'esigenze dei tuoi animali
        </p>
        <p class="mezzo">
          qui per te e per loro
        </p>
        <p class="bottom">
          scopri di piu' sulla nostra azienda alla pagina about
        </p>
      </b-aspect>
      <p>
        sotto mostrate le anteprime di tutti i servizi offerti per regalare un'esperienza completa ai vostri amici, seguito da tanto altro
      </p>
    </b-aspect>
    <hr />

    <!--Servizi-->
    <ServicesComponent></ServicesComponent>
    
    <b-aspect id="griglia" :aspect="dim" style="border: 1px solid black;">
      <p>qui griglia di immagini per servizi</p>
      <b-aspect :aspect="dim" style="border: 1px solid black;">
        <b-row>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/contatti.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/curiosita.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/toilettatura.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
        </b-row>
      </b-aspect>
      <hr>
      <b-aspect :aspect="dim" style="border: 1px solid black;">
        <b-row>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/sedi.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure> 
          </b-col>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/commenti.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/shop.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
        </b-row>
      </b-aspect>
      <hr>
      <b-aspect :aspect="dim" style="border: 1px solid black;">
        <b-row>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/game.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/about.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/cibo.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
        </b-row>
      </b-aspect>
      <hr>
      <b-aspect :aspect="dim" style="border: 1px solid black;">
        <b-row>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/eventi.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/recensioni.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
          <b-col>
            <figure class="nomeClasse" data-effect="fade-in">
              <img src="../assets/collabora.jpg" style="width: 100%; height: 100%;">
              <figcaption>
                <h2>cover fade</h2>
              </figcaption>
            </figure>
          </b-col>
        </b-row>
      </b-aspect>
      <p>fine delle immagini</p>
    </b-aspect>

    <hr>
    <router-view></router-view>
  <!--About Timeline-->
  <AboutComponent></AboutComponent>
  <!--Team-->
  <TeamComponent></TeamComponent>
  </b-container>
</template>

<script>
import AboutComponent from "../components/AboutComponent.vue"
import TeamComponent from "../components/TeamComponent.vue"
import ServicesComponent from "../components/ServicesComponent.vue"

export default {
  name: 'HomeView',
  components: {
    AboutComponent,
    TeamComponent,
    ServicesComponent
  },
  data () {
    return {
      aspect: '1.43:1',
      dim: '16:2'
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#ciao {
  position: relative;
  text-align: center;
  color: black;
  font-weight: 900;
}
.centered {
  font-size: 500%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.sopra {
  font-size: 80%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mezzo {
  font-size: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bottom {
  position: absolute;
  font-size: 75%;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.nomeClasse {
  position: relative;
  overflow: hiiden;
  width: 90%;
  margin: 0 auto;
}
.nomeClasse img {
  width: 100%;
  display: block;
  -moz-transition: 800ms;
  -webkit-transition: 800ms;
  -o-transition: 800ms;
  transition: 800ms;
}
.nomeClasse figcaption {
  background: rgba(161, 128, 128, 0.8);
  color: #fff;
  padding: .5rem;
  position: absolute;
  -webkit-transition: 800ms;
  -o-transition: 800ms;
  transition: 800ms;
  width: 100%;
  cursor: pointer;
}
.nomeClasse[data-effect="fade-in"] figcaption {
  top: 0;
  left: 0;
  height: 100%;
  opacity: 0;
}
.nomeClasse[data-effect="fade-in"]:hover figcaption {
  opacity: 1;
}
</style>

<!--
  - inserire sotto il team una sezione di sponsor/sostenitori??
-->