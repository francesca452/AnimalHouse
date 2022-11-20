<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<base href="http://site212225.tw.cs.unibo.it/">
		<title>Servizi in negozio</title>
		<link rel="stylesheet" href="bootstrap-5.2.0-dist/css/bootstrap.min.css">
		<script type="application/javascript" src="/bootstrap-5.2.0-dist/js/bootstrap.min.js"></script>
		<script src="jquery-3.6.0.js"></script>
		<script>
			function show_pet_services_select()
			{
				const pet = $('#pet-select > option:checked').attr('value');
				$.getJSON(`http://site212225.tw.cs.unibo.it/services?pet=${pet}`, 
					function (services)
					{
						const sel = $('#service-select');
						let innerHTML = '<option value="" selected disasble hidden>-- Scegli il servizio --</option>';

						for (let i = 0; i < services.length; i++) {
							innerHTML += `<option value="${services[i]._id}">${services[i].name}</option>`;
						}

						sel.html(innerHTML);
					});
			}

			function updateService()
			{
				const f = $('#modify-form');
				const pet = $('#pet-select > option:selected').val();
				const service = $('#service-select > option:selected').val();
				const location = $('#location-select > option:selected').val();
				const price = $('#modify-price').val();
				const reservation_left = $('#modify-reservation-left').val();
				const pet_size = $('#pet-size-select > option:selected').val();

				const date = $('#modify-date').val(); /* parsed by the browser in UTC format */
				const time = $('#modify-time').val(); /* 24-hour format hh:mm */
				const utcDate = new Date(date + 'T' + time).toISOString();
			
				const serviceData = {
					'pet': pet,
					'service': service,
					'location': location,
					'price': price,
					'reservation_left': reservation_left,
					'pet_size': pet_size,
					'day': utcDate
				};

				$.post(`http://site212225.tw.cs.unibo.it/${f.attr('action')}`, serviceData)
				.then((res) => {
					alert('Servizio creato con successo');
				})
				.catch((err) => {
					alert('Creazione servizio fallita');
				});

			}

			$(document).ready(() => {
				$('#pet-select').change(show_pet_services_select);
				$('#modify-form').submit((event) => {
					updateService();
					return false;
				});
			});
				
			
		</script>
	</head>

	<body>
		<header>
			<div class="container-fluid">
				<div class="row d-flex flex-nowrap my-3 px-0 px-sm-5">
					<div class="col-2 col-lg-1">
						<span><img class="img-fluid" src="backoffice/img/company.png" alt="Company logo"></span>
					</div>
					<div class="col-auto d-flex align-items-center">
						<h1>BACK OFFICE APPS</h1>
					</div>
				</div>
			</div>

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
									<a class="nav-link" href="backoffice/users/">Gestione utenti</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="backoffice/ecommerce/">Ecommerce</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="backoffice/services/">Serivizi in negozio</a>
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

		</header>

		<main class="my-5">
			<div class="container">

				<h2>{{currentBookableService.title}}</h2>
				<form id="modify-form" autocomplete="off" method="POST" action="bookable_services/new">
					<div class="row g-2 g-md-3">

						<div class="col-md-6">
							<label for="pet-select" class="col-form-label">Animale:</label>
							<select class="form-select" name="pet" id="pet-select" required>
								<option value="" selected disabled hidden>-- Scegli l' animale --</option>
								{{#each pets}}
									<option value="{{this._id}}">{{this.name}}</option>
								{{/each}}
							</select>
						</div>

						<div class="col-md-6">
							<label for="service-select" class="col-form-label">Servizio:</label>
							<select class="form-select" name="service" id="service-select" required>
								<option value="" selected disabled hidden>-- Scegli il servizio --</option>
							</select>
						</div>

						<div class="col-12">
							<label for="location-select" class="col-form-label">Sede:</label>
							<select class="form-select" name="location" id="location-select" required>
								<option value="" selected disabled hidden>-- Scegli la sede --</option>
								{{#each locations}}
									<option value="{{this._id}}">{{this.city}} - {{this.address}}</option>
								{{/each}}
							</select>
						</div>

						<div class="col-md-4">
							<label class="form-label" for="modify-price">Prezzo:</label>
							<input step="0.01" min="0" type="number" value="0" 
								name="price" id="modify-price" class="form-control" required>
						</div>

						<div class="col-md-4">
							<label class="form-label" for="modify-reservation-left">
								Prenotazioni disponibili:
							</label>
							<input step="1" min="0" type="number" id="modify-reservation-left"
								name="reservation_left" value="0" class="form-control" required>
						</div>

						<div class="col-md-4">
							<label class="form-label" for="pet-size-select">
								Taglia massima dell'animale:
							</label>
							<select class="form-select" name="pet_size" id="pet-size-select" required>
								<option value="" selected disabled hidden>-- Scegli la taglia --</option>
								{{#each sizes}}
									<option value="{{this.size}}">{{this.size}}</option>
								{{/each}}
							</select>
						</div>

						<div class="col-md-6">
							<label class="active form-label" for="modify-day">Data:</label>
							<input type="date" id="modify-date" class="form-control" required>
						</div>

						<div class="col-md-6">
							<label class="active form-label" for="modify-time">Ora:</label>
							<input type="time" id="modify-time" class="form-control" required>
						</div>
					</div>

					<div class="col-md-12 mt-3 d-flex justify-content-end">
						<button type="submit" class="btn btn-success">Aggiungi</button>
					</div>
				</form>
			</div>
		</main>
		<footer class="border-top bg-secondary" style="--bs-bg-opacity: .1">
			<div class="container-fluid py-5">
				<p class="text-center">Questa è una frase finale per riempire lo spazio del footer</p>
			</div>
		</footer>
	</body>
</html>
