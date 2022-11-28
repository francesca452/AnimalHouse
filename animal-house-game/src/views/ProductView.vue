<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-heading" style="margin-top: 90px;">
				<strong> All Resources</strong>
			</div>
			<div class="row">
				<div class="search-wrapper panel-heading col-sm-12">
					<input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
				</div>                        
			</div>
			<div class="table-responsive">
				<table v-if="resources.length" class="table">
					<thead>
						<tr>
							<th>Resource</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in resultQuery" :key="item">
							<td><a v-bind:href="item.uri" target="_blank">{{item.title}}</a></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			searchQuery: null,
			resources: [
				{title: 'Croccantini', category: 'cane'},
				{title: 'osso da masticare', category: 'cane'},
				{title: 'gomitolo', category: 'gatto'},
				{title: 'boccia di vetro', category: 'pesce'}
			]
		}
	},
	computed: {
		resultQuery () {
			if (this.searchQuery) {
				return this.resources.filter((item) => {
					return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
				})
			} else {
				return this.resources
			}
		}
	}
}
</script>

<style>
</style>

<!--
	- resources: https://stackoverflow.com/questions/52558770/vuejs-search-filter
-->


<!--
<template>
	<b-container style="margin-top: 80px;">
		<b-row class="d-flex justify-content-center" v-for="product in products" :key="product">
			<b-col>
				<div class="row p-2 bg-white border rounded" style="margin-bottom: 5px;">
					<div class="col-md-3 mt-1">
						<img class="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/QpjAiHq.jpg">
					</div>
					<div class="col-md-6 mt-1">
						<h5>{{ product.title }}</h5>
						<p>{{ product.description }}</p>
					</div>
					<div class="align-items-center align-content-center col-md-3 border-left mt-1">
						<div class="d-flex flex-row align-items-center">
							<h4>{{ product.price }}</h4>
						</div>
						<div class="d-flex flex-column mt-4">
							<button class="btn btn-primary btn-sm" type="button">Details</button>
							<button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button>
						</div>
					</div>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import axios from 'axios'

export default {
	name: 'ProductView',
	data () {
		return {
			products: []
		}
	},
	methods: {
		requestProduct () {
			axios
			.get("https://site212225.tw.cs.unibo.it/products")
            .then(response => (this.products = response.data))
		}
	},
	created: function () {
        this.requestProduct();
    }
}
</script>

<style>
body {
	background: #eee;
}
.product-image {
	width: 100%;
}
.spec-1 {
	color: #938787;
	font-size: 15px;
}
h5 {
	font-weight: 400;
}
.para {
	font-size: 16px;
}
</style>


<template>
	<section class="section-products">
		<div class="container">
			<b-row>
				<b-col>

				</b-col>
			</b-row>
			<b-row class="row-cols-1 row-cols-md-4" v-for="product in products" :key="product">
				<b-col>
					<div id="product-2" class="single-product">
						<div class="part-1">
							<span class="discount">15% off</span>
							<ul>
								<li><a href="#"><b-icon-heart v-b-popover.hover.top="'Aggiungi alla lista desideri'"></b-icon-heart></a></li>
								<li><a href="#"><b-icon-arrows-angle-expand v-b-popover.hover.top="'Visualizza carattistiche prodotto'"></b-icon-arrows-angle-expand></a></li>
							</ul>
						</div>
						<div class="part-2">
							<h3 class="product-title">{{ product.title }}</h3>
							<h4>{{ product.description }}</h4>
							<h5 class="product-price">{{ product.price }} &euro;</h5>
						</div>
					</div>
				</b-col>
			</b-row>
		</div>
	</section>
</template>

<script>
import axios from 'axios'

export default {
	name: 'ProductView',
	data () {
		return {
			products: []
		}
	},
	methods: {
		requestProduct () {
			axios
			.get("https://site212225.tw.cs.unibo.it/products")
            .then(response => (this.products = response.data))
		}
	},
	created: function () {
        this.requestProduct();
    }
}
</script>

<style>
.part-2 {
	border: 1px solid black;
}

a, a:hover {
	text-decoration: none;
    color: inherit;
}
.section-products {
    padding: 80px 0 54px;
}
.section-products .header {
    margin-bottom: 50px;
}
.section-products .header h3 {
    font-size: 1rem;
    color: #fe302f;
    font-weight: 500;
}
.section-products .header h2 {
    font-size: 2.2rem;
    font-weight: 400;
    color: #444444; 
}
.section-products .single-product {
    margin-bottom: 26px;
}
.section-products .single-product .part-1 {
    position: relative;
    height: 290px;
    max-height: 290px;
    margin-bottom: 20px;
    overflow: hidden;
}
.section-products .single-product .part-1::before {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		transition: all 0.3s;
}
.section-products .single-product:hover .part-1::before {
		transform: scale(1.2,1.2) rotate(5deg);
}
.section-products #product-1 .part-1::before {
    background-size: cover;
	transition: all 0.3s;
}
.section-products #product-2 .part-1::before {
    background: url("https://i.ibb.co/cLnZjnS/2.jpg") no-repeat center;
    background-size: cover;
}
.section-products #product-3 .part-1::before {
    background: url("https://i.ibb.co/L8Nrb7p/1.jpg") no-repeat center;
    background-size: cover;
}
.section-products #product-4 .part-1::before {
    background: url("https://i.ibb.co/cLnZjnS/2.jpg") no-repeat center;
    background-size: cover;
}
.section-products .single-product .part-1 .discount, .section-products .single-product .part-1 .new {
    position: absolute;
    top: 15px;
    left: 20px;
    color: #ffffff;
    background-color: #fe302f;
    padding: 2px 8px;
    text-transform: uppercase;
    font-size: 0.85rem;
}
.section-products .single-product .part-1 .new {
    left: 0;
    background-color: #444444;
}
.section-products .single-product .part-1 ul {
    position: absolute;
    bottom: -41px;
    left: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
    opacity: 0;
    transition: bottom 0.5s, opacity 0.5s;
}
.section-products .single-product:hover .part-1 ul {
    bottom: 30px;
    opacity: 1;
}
.section-products .single-product .part-1 ul li {
    display: inline-block;
    margin-right: 4px;
}
.section-products .single-product .part-1 ul li a {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    color: #444444;
    text-align: center;
    box-shadow: 0 2px 20px rgb(50 50 50 / 10%);
    transition: color 0.2s;
}
.section-products .single-product .part-1 ul li a:hover {
    color: #fe302f;
}
</style>
-->