<template>
    <div id="page-top">
        <b-navbar toggleable="lg" type="dark" fixed="top" id="mainNav">
            <b-navbar-brand href="#page-top"><img class="resized" src="../assets/navbar-logo.png"></b-navbar-brand>
            <b-navbar-toggle target="nav-toggle-collapse">
                menu <b-icon-list></b-icon-list>
            </b-navbar-toggle>
            <b-collapse id="nav-toggle-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>SERVICES</b-nav-item>
                    <b-nav-item>PORTFOLIO</b-nav-item>
                    <b-nav-item>ABOUT</b-nav-item>
                    <b-nav-item>TEAM</b-nav-item>
                    <b-nav-item :to="{name: 'contatti'}">CONTACT</b-nav-item>
                    <b-nav-item :to="{name: 'home'}">HOME</b-nav-item>
                    <b-nav-item :to="{name: 'newhome'}">NEW HOME</b-nav-item>
                    <b-nav-item :to="{name: 'prove'}">prove</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

export default{
    name: "HeaderComponent",
}
</script>

<style scoped>
img.resized {
    width: auto;
    height: 50px;
}
#mainNav {
    background-color: #212529;
}
#mainNav b-navbar-toggle {
    right: 0;
    color: #fff;
}
#mainNav b-navbar-nav b-nav-item {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: #fff;
}
#mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {
    color: #fed136;
}
</style>

<!--
    - navbar quando espansa meglio che abbia elementi link a destra e non a fianco del logo
    - aggiungere transizione alla barra?
    - quando clicco logo vado in alto nella pagina, ma meglio che mandi sempre all'inizio della pagina home? 
        adesso nella barra di ricerca compare anche #page-top, non bello
    - toggle "menu" più piccolo?
    - quando si apre il men con schermata piccola e poi si espande al massimo la schermata
        viene una visualizzazione di "transizione" dei collegamenti sulla barra che non ci dorvebbe essere
    - creare collegamenti pagine dal menu'
        a tal proposito, mettere collegamenti come segnalibri della pagina home, oppure lasciare quegli elementi
        base nella home e i collegamenti sono un approfondimento dei primi?
-->