<template>
  <b-container id="app">
    <HeaderComponent></HeaderComponent>
    <b-container style="padding-top: 75px;">
      <b-aspect id="ciao" :aspect="aspect">
        <img src="../assets/zampamano.webp" style="width: 100%; height: 100%; opacity: 0.6;">
        <div class="centered">
          ANIMAL HOUSE
        </div>
        <p class="mezzo">
          qui per te e per loro
        </p>
        <b-button class="bottom" size="lg" variant="dark" href="#testo" style="color: #fed136; box-shadow: 0px 0px 2px 2px rgb(0,0,0);">
          TELL ME MORE
        </b-button>
      </b-aspect>
      <p id="testo">
          l'attenzione che nasce da dentro<br>primo centro completo per l'esigenze dei tuoi animali
      </p>
    </b-container>
    <!--Servizi-->
    <ServicesComponent></ServicesComponent>
    
    <!--Porfolio-->
    <PortfolioComponent></PortfolioComponent>

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
import PortfolioComponent from "../components/PortfolioComponent.vue"

export default {
  name: 'HomeView',
  components: {
    AboutComponent,
    TeamComponent,
    ServicesComponent,
    PortfolioComponent
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
  color: #fed136;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.mezzo {
  font-size: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bottom {
  position: absolute;
  font-size: 70%;
  bottom: 10%;
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