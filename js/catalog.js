var product_section = document.getElementsByClassName("product-section")[0];
var product_rating = document.getElementsByClassName("product-rating");

const catalog = [
	{
		id: 0,
		name: "Lulanão",
		price: 13,
		image: "res/anoes/lula.png",
		rating: 0.5,
	},
	{
		id: 1,
		name: "Bolsominion",
		price: 22,
		image: "res/anoes/bolsonaro.jpg",
		rating: 0.5,
	},
	{
		id: 2,
		name: "Bit",
		price: 23.90,
		image: "res/anoes/cellbit.jpg",
		rating: 0.5,
	},
	{
		id: 3,
		name: "Vin Comum",
		price: 4.9,
		image: "res/anoes/vin_diesel.jpg",
		rating: 3.5,
	},
	{
		id: 4,
		name: "Mini Mario Brothers",
		price: 99,
		image: "res/anoes/mario_luigi.jpg",
		rating: 5,
	},
	{
		id: 5,
		name: "The Dirt",
		price: 6.9,
		image: "res/anoes/dwayne.jpg",
		rating: 4.0,
	},
	{
		id: 6,
		name: "Zé Miudo",
		price: 888,
		image: "res/anoes/anao_vereador.png",
		rating: 2.5,
	},
	{
		id: 7,
		name: "Anão Ney",
		price: 22.0,
		image: "res/anoes/neymar.jpg",
		rating: 5,
	},
	{
		id: 8,
		name: "Keanu Lake",
		price: 7.0,
		image: "res/anoes/keanu.jpg",
		rating: 4.5,
	},
	{
		id: 9,
		name: "Felpopinho",
		price: 7.90,
		image: "res/anoes/felps.jpg",
		rating: 1.5,
	},
	{
		id: 10,
		name: "Teddy",
		price: 7.0,
		image: "res/anoes/teddy.jpg",
		rating: 4.5,
	},
	{
		id: 11,
		name: "Messinho",
		price: 72,
		image: "res/anoes/messi.jpg",
		rating: 5,
	},
	{
		id: 12,
		name: "Mandrake",
		price: 420.00,
		image: "res/anoes/drake.jpg",
		rating: 4.5,
	},
	{
		id: 13,
		name: "Ana",
		price: 69.69,
		image: "res/anoes/dafne.webp",
		rating: 4.5,
	},
];

for(let i = 0; i < catalog.length; i++){
	product_section.innerHTML += createProductContainer(catalog[i].id, catalog[i].name, catalog[i].rating, catalog[i].price, catalog[i].image);

	createProductRating(i, catalog[i].rating);
}

function createProductContainer(id, name, rating, price, image){
	return `
		<a href="#" class="product-container">
			<div class="product-image">
			<img src="` + image + `">
		</div>
		<span class="product-information">
			<header class="product-name">` + name + `</header>
			<div class="product-rating">
				<img class="product-rating-star" src="res/empty_star_icon.svg">
				<img class="product-rating-star" src="res/empty_star_icon.svg">
				<img class="product-rating-star" src="res/empty_star_icon.svg">
				<img class="product-rating-star" src="res/empty_star_icon.svg">
				<img class="product-rating-star" src="res/empty_star_icon.svg">
			</div>
			<span class="product-price">
				<p>R$ </p>
				<p>` + price.toFixed(2) + `</p>
			</span>
		</span>
		</a>
		`;
}

function createProductRating(id, rating){
	let rating_tmp = rating;

	for(let i = 0; i < rating; i++){
		if(i % 5 < rating){
			product_rating[id].getElementsByClassName("product-rating-star")[i].src = "res/star_icon.svg";
		}

		if(rating_tmp < 1){
			product_rating[id].getElementsByClassName("product-rating-star")[i].src = "res/half_star_icon.svg";
			break;
		}

		rating_tmp--;
	}
}
