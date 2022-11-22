<template>
    <div>   
    <!-- Portfolio Grid-->
        <section class="page-section bg-light" id="portfolio">
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <b-container style="width: 100%;">
                <div class="text-center">
                    <h2 class="section-heading" style="text-transform: uppercase;"><strong>Portfolio</strong></h2>
                    <h5 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h5>
                </div>
                <br>
                <b-row>
                    <b-col class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 1-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" v-b-modal.modal-1>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><b-icon-plus-lg scale="3"></b-icon-plus-lg></div>
                                </div>
                                <b-img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg" alt="..." fluid />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Threads</div>
                                <div class="portfolio-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 2-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" v-b-modal.modal-2>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><b-icon-plus-lg scale="3"></b-icon-plus-lg></div>
                                </div>
                                <b-img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg" alt="..." fluid />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Explore</div>
                                <div class="portfolio-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 3-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" v-b-modal.modal-3>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><b-icon-plus-lg scale="3"></b-icon-plus-lg></div>
                                </div>
                                <b-img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg" alt="..." fluid />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Finish</div>
                                <div class="portfolio-caption-subheading text-muted">Identity</div>
                            </div>  
                        </div>
                    </b-col>
                    <b-col class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 4-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" v-b-modal.modal-4>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><b-icon-plus-lg scale="3"></b-icon-plus-lg></div>
                                </div>
                                <b-img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg" alt="..." fluid />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Threads</div>
                                <div class="portfolio-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 5-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" v-b-modal.modal-5>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><b-icon-plus-lg scale="3"></b-icon-plus-lg></div>
                                </div>
                                <b-img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg" alt="..." fluid />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Explore</div>
                                <div class="portfolio-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 6-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" v-b-modal.modal-6>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><b-icon-plus-lg scale="3"></b-icon-plus-lg></div>
                                </div>
                                <b-img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg" alt="..." fluid />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Finish</div>
                                <div class="portfolio-caption-subheading text-muted">Identity</div>
                            </div>  
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <!-- Portfolio Modals-->
        <!-- Portfolio item 1 modal popup-->
        <b-modal id="modal-1" class="portfolio-modal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" header-border-variant="light" footer-border-variant="light" hide-footer>
            <div class="modal-dialog" role="document">
                <div class="modal-body">
                    <div class="container h-100">
                        <b-row class="row align-items-center h-100">
                            <b-col class="col-6 mx-auto text-center">
                                <!-- Project details-->
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <b-img fluid class="d-block mx-auto" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg" alt="..." /><br>
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Explore
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Graphic Design
                                    </li>
                                    <li>
                                        <strong>This <router-link :to="{name: 'product'}" v-b-tooltip>Link</router-link> will show a tooltip on hover.</strong>
                                    </li>
                                </ul>
                                <b-button size="lg" variant="warning" style="color: white;" class="text-uppercase" :to="{name: 'home'}">
                                    Close Project
                                </b-button> 
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </div>
        </b-modal>
        <!-- Portfolio item 2 modal popup-->
        <b-modal id="modal-2" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Explore
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Graphic Design
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <!-- Portfolio item 3 modal popup-->
        <b-modal id="modal-3" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Finish
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Identity
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <!-- Portfolio item 4 modal popup-->
        <b-modal id="modal-4" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Lines
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Branding
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <!-- Portfolio item 5 modal popup-->
        <b-modal id="modal-5" class="portfolio-modal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" hide-footer hide-header size="xl">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Southwest
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Website Design
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </b-modal>
        <!-- Portfolio item 6 modal popup-->
        <b-modal id="modal-6" class="portfolio-modal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" hide-footer hide-header size="xl">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><b-icon-x-lg scale="3"></b-icon-x-lg></div>
                    <div class="container">
                        <b-row class="justify-content-center">
                            <b-col class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <b-img fluid class="d-block mx-auto" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Window
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Photography
                                        </li>
                                    </ul>
                                    <b-button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <b-icon-x></b-icon-x>
                                        Close Project
                                    </b-button>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<style>
.portfolio-caption {
    font-size: 18px;
    font-style: italic;
    margin: 0;
}
.portfolio-item .portfolio-caption {
    margin: 0 auto;
    text-transform: none;
    max-width: 400px;
    padding: 25px;
    text-align: center;
    background-color: #fff;
}
.portfolio-item .portfolio-link {
    position: relative;
    display: block;
    max-width: 400px;
    margin: 0 auto;
    cursor: pointer;
}
.portfolio-item .portfolio-link .portfolio-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all ease .5s;
    opacity: 0;
    background: rgba(254,209,54,.9);
}
.portfolio-item .portfolio-link .portfolio-hover:hover {
    opacity: 1;
}
.portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {
    font-size: 20px;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 20px;
    margin-top: -12px;
    text-align: center;
    color: #fff;
}
.portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content b-icon {
    margin-top: -12px;
}
#portfolio * {
    z-index: 2;
}
@media (min-width: 767px) {
    .portfolio-item {
        margin: 0 0 30px;
    }
}
#modal-1 {
    min-width: 100%;
    margin: 0;
    padding: 25px;
}
#modal-1 .modal-content {
    min-height: 100vh;
}
#modal-1 .modal-dialog {
    min-width: 100%;
    margin: 0;
}
/*
.portfolio-modal .modal-dialog {
    margin: 1rem;
    max-width: 100vw;
}
.portfolio-modal .modal-content {
    padding: 100px 0;
    text-align: center;
}
.portfolio-modal .modal-content h2 {
    font-size: 3em;
    margin-bottom: 15px;
}
.portfolio-modal .modal-content p {
    margin-bottom: 30px;
}
.portfolio-modal .modal-content p.item-intro {
    font-size: 16px;
    font-style: italic;
    margin: 20px 0 30px;
}
.portfolio-modal .modal-content ul.list-inline {
    margin-top: 0;
    margin-bottom: 30px;
}
.portfolio-modal .modal-content button {
    cursor: pointer;
}
.portfolio-modal .close-modal {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 75px;
    height: 75px;
    cursor: pointer;
    background-color: transparent;
}
.portfolio-modal .close-modal:hover {
    opacity: .3;
}
.portfolio-modal .close-modal .lr {
    z-index: 1051;
    width: 1px;
    height: 75px;
    margin-left: 35px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: #212529;
}
.portfolio-modal .close-modal .lr .rl {
    z-index: 1052;
    width: 1px;
    height: 75px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    background-color: #212529;
}*/
</style>      

<!--
    - rendere tasto "Close project" funzionante
    - inserire 
-->