<template>
    <b-container style="padding-top: 75px;">
        <b-row no-gutters>
            <div class="border col-sm-12">
                <img src="../assets/zampamano.webp" class="img-fluid" style="width: 100%; height: 100%; opacity: 0.6;"/>
                <p class="centered">ANIMAL<br>HOUSE</p>
            </div>
        </b-row>
        <div class="text-muted">
                <i>I nostri animali sono la nostra famiglia.<br>
                Esiste in noi una parte riservata ad amare un animale, alla possibilità di godere del suo amore incondizionato.
                Non potendo ritornare totalmente tutto l'affetto ricevuto dai nostri animali, ciò che possiamo fare per loro è donargli una carezza e una cura.
                Questa è la missione della nostra azienda.<br></i>
        </div>
        
        <div>
                <strong>Da una vera passione per gli animali nasce ANIMAL HOUSE, la migliore applicazione con servizi specificamente progettati per il mondo pet.</strong><br>
                Vogliamo arricchire la vita dei nostri amici animali e delle persone che li amano.
                
                L'esperienza che offriamo comprende consigli, consulenze mediche, servizio di vendita e molto altro, in un ecosistema digitale che si avvale dell'attività di un team di esperti del mondo del petcare.
                Per sentirti parte di questa impresa e per godere di tutti i servizi da noi offerti, acceda all'area VIP dell'applicazione con un semplice click a questa icona <b-icon-person-fill></b-icon-person-fill>. 
            </div>
        
        <b-row no-gutters>
            <b-col class="border">
                <img class="img-fluid" src="https://dspncdn.com/a1/media/692x/98/bf/49/98bf49ce7d0a7ee8768afc5a8c6e48e8.jpg" alt="">
            </b-col>
            <b-col class="border">
                <img class="img-fluid" src="https://dspncdn.com/a1/media/692x/98/bf/49/98bf49ce7d0a7ee8768afc5a8c6e48e8.jpg" alt="">
            </b-col>
            <b-col class="border">
                <img class="img-fluid" src="https://dspncdn.com/a1/media/692x/98/bf/49/98bf49ce7d0a7ee8768afc5a8c6e48e8.jpg" alt="">
            </b-col>
        </b-row>
        <ServicesComponent/>
        <PortfolioComponent/>
        <AboutComponent/>
        <TeamComponent/>
    </b-container>
</template>

<script>
import ServicesComponent from '../components/ServicesComponent.vue'
import PortfolioComponent from '../components/PortfolioComponent.vue'
import AboutComponent from "../components/AboutComponent.vue"
import TeamComponent from "../components/TeamComponent.vue"

export default {
    components: {
        ServicesComponent,
        PortfolioComponent,
        AboutComponent,
        TeamComponent
    }
}
</script>

<style>
.centered {
    font-size: 400%;
    font-weight: bolder;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fed136;
    text-shadow: 7px 4px 3px rgba(33,37,41,0.92);
}
</style>

<!--
    - style="object-fit: contain;" non funziona sulla immagine
        voglio che sia contenuta perfettamente nel contenitore div-col
        aggiunta di width, height 100% ??
    - Vivere senza queste creature al proprio fianco significa perdere quella meravigliosa ed unica sensazione dell’essere amati in maniera incondizionata.</i><br><br>

-->