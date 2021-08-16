export function getTotalValueAndDiscount(products) {
	let totalValue = 0;
	let totalDiscount = 0;

	products.map((item) => {
		const { totalPrice, discountPricePerUnit } = item;
		totalValue += totalPrice;
		totalDiscount += totalPrice * discountPricePerUnit;
		return 0;
	});

	return [totalValue, totalDiscount];
}
