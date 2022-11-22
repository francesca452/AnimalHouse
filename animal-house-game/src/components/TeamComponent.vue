<template>
    <section class="page-section" id="team">
        <b-container>
            <div class="text-center">
                <h2 class="section-heading" style="text-transform: uppercase;"><strong>Our Amazing Team</strong></h2>
                <h5 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h5>
            </div>
            <br>
            <b-row>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/koala.jpg" alt="..." />
                        <h4>Parveen Anand</h4>
                        <p class="text-muted">Lead Designer</p>
                        <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Parveen Anand Twitter Profile" onclick='window.open("https://www.twitter.com/"); return false;'><b-icon-twitter></b-icon-twitter></b-button>
                        <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Parveen Anand Facebook Profile" onclick='window.open("https://www.facebook.com/"); return false;'><b-icon-facebook></b-icon-facebook></b-button>
                        <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Parveen Anand LinkedIn Profile" onclick='window.open("https://www.linkedin.com/"); return false;'><b-icon-linkedin></b-icon-linkedin></b-button>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/struzzo.jpg" alt="..." />
                        <h4>Diana Petersen</h4>
                        <p class="text-muted">Lead Marketer</p>
                        <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Diana Petersen Twitter Profile" onclick='window.open("https://www.twitter.com/"); return false;'><b-icon-twitter></b-icon-twitter></b-button>
                        <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Diana Petersen Facebook Profile" onclick='window.open("https://www.facebook.com/"); return false;'><b-icon-facebook></b-icon-facebook></b-button>
                        <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Diana Petersen LinkedIn Profile" onclick='window.open("https://www.linkedin.com/"); return false;'><b-icon-linkedin></b-icon-linkedin></b-button>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/rana.jpg" alt="..." />
                        <h4>Larry Parker</h4>
                        <p class="text-muted">Lead Developer</p>
                        <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Larry Parker Twitter Profile" onclick='window.open("https://www.twitter.com/"); return false;'><b-icon-twitter></b-icon-twitter></b-button>
                        <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Larry Parker Facebook Profile" onclick='window.open("https://www.facebook.com/"); return false;'><b-icon-facebook></b-icon-facebook></b-button>
                        <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Larry Parker LinkedIn Profile" onclick='window.open("https://www.linkedin.com/"); return false;'><b-icon-linkedin></b-icon-linkedin></b-button>
                    </div>
                </div>
            </b-row>
            <b-row>
                <div class="col-lg-8 mx-auto text-center">
                    <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: "TeamComponent"
}
</script>


<style>
.team-member {
  margin-bottom: 50px;
  text-align: center
}
.team-member img {
  width: 225px;
  height: 225px;
  border: 7px solid #fff;
}
.team-member h4 {
  margin-top: 25px;
  margin-bottom: 0;
  text-transform: none;
}
.team-member p {
  margin-top: 0;
}
</style>

<!--
  - sezione team, come le altre: creare collegamento "segnalibro" a partire dal
    indice menu nella navbar per questa sezione della pagina
  - contorno immagine dei team di grigio spesso? reference: https://startbootstrap.com/previews/agency
-->