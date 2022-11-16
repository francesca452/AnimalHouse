<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<base href="http://site212225.tw.cs.unibo.it/">
		<title>Ecommerce</title>
		<link rel="stylesheet" href="bootstrap-5.2.0-dist/css/bootstrap.min.css">
		 <script src="bootstrap-5.2.0-dist/js/bootstrap.min.js"></script>
	</head>

	<body>
		<header>
			<div class="container-fluid">

				<!-- LOGO e NOME PAGINA -->
				<div class="row d-flex flex-nowrap my-3 px-0 px-sm-5">
					<div class="col-2 col-lg-1">
						<span><img class="img-fluid" src="backoffice/img/company.png" alt="Company logo"></span>
					</div>
					<div class="col-auto d-flex align-items-center">
						<h1>BACK OFFICE APPS</h1>
					</div>
				</div>
				<!-- END logo e nome pagina -->

				<!-- NAVBAR GLOBAL -->
				<div class="row border-top border-bottom border-secondary bg-secondary mt-3 px-0 px-sm-5" style="--bs-bg-opacity: .15;">
					<nav class="navbar navbar-expand-lg" style="padding-top: 4px;padding-bottom: 4px;">
						<div class="container-fluid">
							<a class="navbar-brand" href="backoffice/">Backoffice</a>
							<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							  <span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse" id="navbarNav">
								<ul class="navbar-nav">
									<li class="nav-item">
										<a class="nav-link" href="#">Gestione utenti</a>
									</li>
									<li class="nav-item">
										<a class="nav-link active" aria-current="page" href="backoffice/ecommerce.html">Ecommerce</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Serivizi in negozio</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Servizi di comunità</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<!-- END navbar global -->

			</div>
		</header>
		<main class="my-5">
			<div class="container">
			<!--
			<div class="card-deck card-break infinite-item" style="margin-bottom:0">
				<div class="card" style="min-height:120px">
					<a href="#">
						<div class="row">
							<div class="col-xl-4 card-col">
								<div class="card-background-image overflow hidden p-0">
									<img class="task-img" src="backoffice/img/company.png">
								</div>
							</div>
							<div class="col-xl-8 card-col card-col-title">
								<h1>Semantic Segmentation</h1>
							</div>
						</div>
						<div class="card-body card-body-taskverse card-body-taskverse-mobile">
							<div class="text-muted" style="min-height:19px; padding-top:2px;">
								177 benchmarks
								<br>
							</div>
							<div class="text-muted" style="padding-top:8px;">
								3328 papets with code
							</div>
						</div>
					</a>
				</div>
			</div>	
			</div>
			-->

			{{#each petWithSections}}
				<div class="row row-cols-1 row-cols-xl-4 g-4">
					<h1>{{this.name}}</h1>
					{{#each this.sections}}
				  		<div class="col">
							<div class="card">
								<div class="row m-3">
									<div class="col-5">
										<img src="{{this.img}}" class="img-fluid">
									</div>
									<div class="col-7 d-flex align-items-center justify-content-center">
									<h4>{{this.name}}</h4>
								</div>
							</div>
					  		<div class="card-body">
								<p class="card-text">{{this.description}}</p>
					  		</div>
						</div>
					{{/each}}
				</div>
			{{/each}}


				

			</div>
		</main>
		<footer class="border-top bg-secondary" style="--bs-bg-opacity: .1">
			<div class="container-fluid py-5">
				<p class="text-center">Questa è una frase finale per riempire lo spazio del footer</p>
			</div>
		</footer>
	</body>
</html>
