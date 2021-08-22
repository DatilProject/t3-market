const Product = {
	id: 1,
	main_code: "001",
	auxiliary_code: "051",
	description: "Laptop HP 14 pulgadas",
	name: "Laptop HP 14 pulgadas 16Gb ram",
	on_sale: true,
	price: 500.41,
	discount: 0,
	stock: 5,
	weight: 4.2,
	unit: "lb",
	createdAt: "2021-08-10T05:00:00.000Z",
	updatedAt: "2021-08-10T05:00:00.000Z",
	categoryId: 1,
	ivaId: 2,
	iceId: 1,
	marketId: 1,
	category: {
		name: "Tecnología",
	},
	iva: {
		name: "12%",
		percentage: 12,
	},
	ice: {
		name: "0%",
		percentage: 0,
	},
	images: [
		{
			location: "https://www.tventas.com/7095057-large_default/laptop-14-hp-dk1022wm.jpg",
		},
		{
			location:
				"https://www.compuzone.com.ec/images/thumbs/0007008_laptop-hp-14-dk1022wm-amd-ryzen-3-3250u-4gb-ram-128gb-ssd-m2-14-win10-home-s-plateada_550.jpeg",
		},
	],
	originPrice: 500.41,
	discountPrice: 0,
	isNew: false,
};

export default Product;
