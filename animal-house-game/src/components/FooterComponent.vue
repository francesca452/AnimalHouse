<template>
    <footer>
        <b-container>
            <b-row>
                <div class="col-lg-4 text-lg-start" id="information">Copyright &copy; 2022 | Designed With Vue by Animal House</div>
                <div class="col-lg-4 my-3 my-lg-0">
                    <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Twitter" onclick='window.open("https://www.twitter.com/"); return false;'><b-icon-twitter></b-icon-twitter></b-button>
                    <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Facebook" onclick='window.open("https://www.facebook.com/"); return false;'><b-icon-facebook></b-icon-facebook></b-button>
                    <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="LinkedIn" onclick='window.open("https://www.linkedin.com/"); return false;'><b-icon-linkedin></b-icon-linkedin></b-button>
                    <b-button class="btn-dark rounded-circle px-2 mx-2" aria-role="Instagram" onclick='window.open("https://www.instagram.com/"); return false;'><b-icon-instagram></b-icon-instagram></b-button>
                </div>
                <div class="col-lg-4 text-lg-end" id="extra">
                    <b-link style="text-decoration: none; color: black;" class="mx-3">Privacy Policy</b-link>
                    <b-link style="text-decoration: none; color: black;" class="mx-3">Terms of Use</b-link>
                </div>
            </b-row>
        </b-container>
    </footer>
</template>

<script>

export default {
    name: "FooterComponent"
}
</script>

<style scoped>
footer {
    padding: 25px 0;
    padding-top: 1rem;
    padding-bottom: 1rem; 
    text-align: center;
}
footer #information {
    font-size: 13px;
    line-height: 40px;
    text-transform: none;
    color: #aaa;
}
b-link {
    color: black;
    text-decoration: none;
}
</style>

<!-- 
    - aggiungere collegamento a privacy-policy e terms of use
    - applicare stile ai b-link degli elementi PP e ToU senza usare attributo style nel tag
    - rendere bordo superiore del footer della stessa lunghezza della pagina,
        nello stesso modo in cui la navbar copre tutta la lunghezza (forse risolvibile
        inserendo una immagine esattamente sopra a quel bordo del footer per nasconderlo)
-->