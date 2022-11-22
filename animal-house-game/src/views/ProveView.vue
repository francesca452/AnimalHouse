<template>
  <b-container>
    <section>
    <br><br><br><br><br><br><br>
      <div v-for="pet in pets" :key="pet">
        <p>animal name: {{ pet.name }}</p>
        <p>animal id: {{ pet._id }}</p>
      </div>
    </section>
    <b-button href="#" @click="mounted" variant="primary">Contact</b-button>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return  {
            pets: []
        }
    },
    methods: {
        mounted () {
            axios
            .get("https://site212225.tw.cs.unibo.it/pets")
            .then(response => (this.pets = response.data))
        }
    }
}
</script>

<style>

</style>


<!--
  - Prova1--FEED GAME
    https://vuejs.org/guide/essentials/forms.html
-->

<!--
<template>
    <div>   
        <section class="page-section bg-light" id="portfolio">
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <b-container style="width: 100%;">
                <div class="text-center">
                    <h2 class="section-heading" style="text-transform: uppercase;"><strong>Portfolio</strong></h2>
                    <h5 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h5>
                </div>
                <br>
                <div v-for="item in items" :key="item">
                    <b-col>
                        <div class="portfolio-item">
                            <a class="portfolio-link" v-b-modal.{{item.id}}>
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><b-icon-plus-lg scale="3"></b-icon-plus-lg></div>
                                </div>
                                <b-img v-bind:src="item.image_url" alt="..." fluid />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">{{item.client}}</div>
                                <div class="portfolio-caption-subheading text-muted">{{item.category}}</div>
                            </div>
                        </div>
                    </b-col>
                    <b-modal v-if="item.id" class="portfolio-modal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" header-border-variant="light" footer-border-variant="light" hide-footer>
                        <div class="modal-dialog" role="document">
                            <div class="modal-body">
                                <div class="container h-100">
                                    <b-row class="row align-items-center h-100">
                                        <b-col class="col-6 mx-auto text-center">
                                            <h2 class="text-uppercase">item.name_project</h2>
                                            <p class="item-intro text-muted">item.breve_descrizione</p>
                                            <b-img fluid class="d-block mx-auto" v-bind:src="item.image_url" alt="..." /><br>
                                            <p>item.descrizione</p>
                                            <ul class="list-inline">
                                                <li>
                                                    <strong>Client:</strong>
                                                    item.client
                                                </li>
                                                <li>
                                                    <strong>Category:</strong>
                                                    item.category
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
                </div>
            </b-container>
        </section>
    </div>
</template>

<script>
export default {
    name: "ProductView",
    data () {
        return {
            items: [
                {id: '1', client: 'threads', category: 'illustration', image_url: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg', name_project: 'Project1', descrizione: 'Descrizione 1', breve_descrizione: 'Breve Descrizione 1'},
                {id: '2', client: 'explore', category: 'graphic design', image_url: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg', name_project: 'Project2', descrizione: 'Descrizione 2', breve_descrizione: 'Breve Descrizione 2'},
                {id: '3', client: 'finish', category: 'identity', image_url: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg', name_project: 'Project3', descrizione: 'Descrizione 3', breve_descrizione: 'Breve Descrizione 3'},
                {id: '4', client: 'threads', category: 'illustration', image_url: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg', name_project: 'Project4', descrizione: 'Descrizione 4', breve_descrizione: 'Breve Descrizione 4'},
                {id: '5', client: 'explore', category: 'graphic design', image_url: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg', name_project: 'Project5', descrizione: 'Descrizione 5', breve_descrizione: 'Breve Descrizione 5'},
                {id: '6', client: 'finish', category: 'identity', image_url: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg', name_project: 'Project6', descrizione: 'Descrizione 6', breve_descrizione: 'Breve Descrizione 6'}
            ]
        }
    }
}
</script>

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
</style>   
-->

<!--
<template>
    <b-container>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <b-aspect style="border: 1px solid black;">
            <div id="score-panel">
                <ul class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                </ul>
                <span class="moves">0</span> Moves
                <div class="restart">
                    <i class="fa fa-repeat" animation="spin-pulse"></i>
                </div>
            </div>
            <ul class="deck"></ul>
        </b-aspect>
        <p>fine blocco gioco memory</p>
    </b-container>
</template>

<script>
export default {
    data () {
        return {
            symbols: ['bicycle', 'bicycle', 'leaf', 'leaf', 'cube', 'cube', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb', 'diamond', 'diamond'],
            opened: [],
            match: 0,
            moves: 0,
            delay: 800,
            deck: document.querySelector('.deck'),
            scorePanel: document.querySelector('#score-panel'),
            moveNum: this.scorePanel.querySelector('.moves'),
            ratingStars: this.scorePanel.querySelector('i'),
            restart: this.scorePanel.querySelector('.restart'),
            gameCardsQTY: this.symbols.length / 2,
            rank3start: this.gameCardsQTY + 2,
            rank2start: this.gameCardsQTY + 6,
            rank1start: this.gameCardsQTY + 10
        }
    },
    methods: {
        shuffle (array) {
            var currentIndex = array.length;
            var temporaryValue;
            var randomIndex;
            while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }
            return array;
        },
        initGame () {
            var cards = this.shuffle(this.symbols);
            this.deck.empty();
            this.match = 0;
            this.moves = 0;
            this.moveNum.html(this.moves);
            this.ratingStars.removeClass("fa-star-o").addClass("fa-star");
            for (var i = 0; i < cards.length; i ++) {
                this.deck.append($('<li class="card"><i class="fa fa-' + cards[i] + '"</li>'))
            }
        },
        setRating (moves) {
            var rating = 3;
            if (moves > this.rank3start && moves < this.rank2start) {
                this.ratingStars.eq(2).removeClass("fa-star").addClass("fa-star-o");
                rating = 2;
            } else if (moves > this.rank2start && moves < this.rank1start) {
                this.ratingStars.eq(1).removeClass("fa-star").addClass("fa-star-o");
                rating = 1;
            } else if (moves > this.rank1start) {
                this.ratingStars.eq(0).removeClass("fa-star").addClass("fa-star-o");
                rating = 0;
            }
            return { score: rating };
        },
        endGame (moves, score) {
            swal({
                allowEscapeKey: false,
                allowOutsideKey: false,
                title: "Congratulations! You Won!",
                text: "With" + moves + " Moves and " + score + " Stars.\nBoom Shaka Lak",
                type: "succes",
                confirmButtonColor: "#9BCB3C",
                confirmButtonText: "Play again!"
            }).then (function (isConfirm) {
                if (isConfirm) {
                    initGame ();
                }
            })
        },
        

        restart.addEventListener("click", function () {
            swal ({
                allowEscapeKey: false,
                allowOutsideKey: false,
                title: 'Are you sure?',
                text: "Your progress will be Lost!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#9BCB3C",
                cancelButtonColor: "#EE0E51",
                confirmButtonText: "Yes, Restart Game!"
            }).then (function (isConfirm) {
                if (isConfirm) {
                    initGame ();
                }
            })
        }),

    }
}
</script>

<style>
b-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FF9090;
    overflow: hidden;
    font-family: 'Coda', cursive;
}
.deck {
    width: 345px;
    margin: 0 auto;
    background: #FFFA62;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 14px 14px 0 0 #000000;
}
.deck .card {
    height: 75px;
    width: 75px;
    background: #FFCF7F;
    display: inline-block;
    margin: 0 15px 15px 0;
    line-height: 140px;
    font-size: 0;
    color: #ffffff;
    text-align: center;
    border-radius: 8px;
    vertical-align: top;
    cursor: pointer;
    transform: rotateY(180deg);
    transform-style: preserve-3d;
    transition: transform .3s ease;
    font-family: FontAwesome;
    line-height: 75px;
}
#score-panel {
    text-align: left;
    width: 345px;
    margin-bottom: 10px;
}
#score-panel .stars {
    margin: 0;
    padding: 0;
    display: inline-block;
    margin: 0 5px 0 0;
}
#score-panel .stars li {
    list-style: none;
    display: inline-block;
}
.restart {
    float: right;
    cursor: pointer;
}
</style>
-->

<!--
<template>
    <div>
        <aside class="instructions">
            <strong>Instructions: </strong>
            Daniel is the pickiest eater you've ever met. Feed him up to five food items to see if you can get him eating.
            Repeat food items is acceptable. To make things more challenging, try to choose an item from each food group.
        </aside>
        <div class="food-choices">
            <div class="control-center">
                <h4>Your chosen items:</h4>
                <ul class="chosen-items">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div><a class="js-feed">Feed me!</a><a class="js-reset">Reset</a></div>
                <div class="avatar">
                    <div class="avatar__hair"></div>
                    <div class="avatar__head">
                        <div class="avatar__eyes left"></div>
                        <div class="avatar__eyes right"></div>
                        <div class="avatar__mouth"></div>
                    </div>
                    <div class="avatar__ears left"></div>
                    <div class="avatar__ears right"></div>
                    <div class="avatar__coat">
                        <div class="avatar__shirt"></div>
                    </div>
                </div>
                <h5 class="response"></h5>
                <p>Daniel says: "<span class="response-dialog">Feed me!</span>"</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeedGameView",
    data () {
        Math.floor(Math.random() * 4);
        ["Wooooow!", "Yaaay, such yummy things.", "Thaaanks.", "Wow, what do you want? A medal?"];
        ["We need to get foodings.", "You just about made it.", "Oh nooooo.",	"Tough."];
        ["Why do you feed me such disgusting things?", "So terrible you are.", "Bad luck.", "Why is life so cruel to the young, handsome Daniel?"];       

        return {
            emojiArr: [
{ icon: "🍚", score: "4", name: "Rice" },
{ icon: "🍕", score: "2", name: "Pizza" },
{ icon: "🍔", score: "3", name: "Burger" },
{ icon: "🍣", score: "-4", name: "Sushi" },
{ icon: "🍟", score: "6", name: "Fries" },
{ icon: "🌭", score: "1", name: "Hotdog" },
{ icon: "🥓", score: "-3", name: "Bacon" },
{ icon: "🥚", score: "4", name: "Eggs" },
{ icon: "🥞", score: "-3", name: "Pancakes" },
{ icon: "🍞", score: "2", name: "Bread" },
{ icon: "🥨", score: "-4", name: "Pretzel" },
{ icon: "🧀", score: "3", name: "Cheese" },
{ icon: "🥗", score: "-5", name: "Salad" },
{ icon: "🥙", score: "-6", name: "Burito" },
{ icon: "🥪", score: "-3", name: "Egg Sandwich" },
{ icon: "🌮", score: "1", name: "Taco" },
{ icon: "🍖", score: "3", name: "Pork" },
{ icon: "🍗", score: "4", name: "Chicken" },
{ icon: "🥩", score: "8", name: "Steak" },
{ icon: "🦐", score: "-5", name: "Shrimp" },
{ icon: "🐟", score: "-5", name: "Fish" },
{ icon: "🦀", score: "-6", name: "Crab" },
{ icon: "🐙", score: "-7", name: "Octopus" },
{ icon: "🦑", score: "-7", name: "Squid" },
{ icon: "🍅", score: "-2", name: "Tomatoes" },
{ icon: "🍄", score: "-10", name: "Mushrooms" },
{ icon: "🌽", score: "1", name: "Corn" },
{ icon: "🥒", score: "-3", name: "Cucumber" },
{ icon: "🍆", score: "-5", name: "Eggplant" },
{ icon: "🥑", score: "-5", name: "Avocado" },
{ icon: "🥔", score: "8", name: "Potatoes" },
{ icon: "🥦", score: "-6", name: "Broccoli" },
{ icon: "🥕", score: "3", name: "Carrots" },
{ icon: "🥡", score: "1", name: "Noodles" },
{ icon: "🍱", score: "1", name: "Bento Box" },
{ icon: "🍙", score: "-2", name: "Riceball" },
{ icon: "🍛", score: "4", name: "Curry with Rice" },
{ icon: "🍜", score: "4", name: "Ramen" },
{ icon: "🥟", score: "1", name: "Dumpling" },
{ icon: "🍲", score: "-6", name: "Mushroom Soup" },
{ icon: "🍝", score: "4", name: "Pasta" },
{ icon: "🥘", score: "-3", name: "Paella" },
{ icon: "🥣", score: "2", name: "Cereal" },
{ icon: "🥜", score: "2", name: "Peanuts" },
{ icon: "🍿", score: "2", name: "Salted Popcorn" },
{ icon: "🥧", score: "-3", name: "Pie" },
{ icon: "🍦", score: "3", name: "Ice-cream" },
{ icon: "🍩", score: "3", name: "Krispy Kreme" },
{ icon: "🍪", score: "-2", name: "Chips Ahoy" },
{ icon: "🎂", score: "5", name: "Chocolate Cake" },
{ icon: "🍰", score: "-5", name: "Strawberry Shortcake" },
{ icon: "🍫", score: "3", name: "Chocolate" },
{ icon: "🍬", score: "4", name: "Sweeties" },
{ icon: "🍮", score: "-1", name: "Pudding" },
{ icon: "🥝", score: "-3", name: "Kiwi" },
{ icon: "🍇", score: "3", name: "Grapes" },
{ icon: "🍉", score: "0", name: "Watermelon" },
{ icon: "🍊", score: "2", name: "Oranges" },
{ icon: "🍌", score: "5", name: "Bananas" },
{ icon: "🍍", score: "1", name: "Pineapples" },
{ icon: "🍎", score: "2", name: "Apples" },
{ icon: "🍓", score: "4", name: "Strawberries" },
{ icon: "🍑", score: "-3", name: "Peaches" },
{ icon: "🍐", score: "3", name: "Pears" },
{ icon: "🍒", score: "-2", name: "Cherries" },
{ icon: "🥛", score: "1", name: "Milk" },
{ icon: "☕", score: "-5", name: "Coffee" },
{ icon: "🍵", score: "-3", name: "Tea" },
{ icon: "🥤", score: "6", name: "Coke" },
{ icon: "🍺", score: "-3", name: "Beer" },
{ icon: "🍷", score: "-4", name: "Wine" },
{ icon: "🍾", score: "4", name: "Apple Cider" }
            ],
        }
    },
    mounted () { 
    }
}
</script>

<style>

</style>

-->
