import { foundersItems, itemIsPrime, itemIsFaction, itemIsAdversary } from "./items";

export function isItemFiltered(
	itemName,
	item,
	{ itemsMastered, hideMastered, hideFounders, hidePrime, hideFaction, hideAdversary }
) {
	if (itemsMastered.has(itemName)) {
		return hideMastered;
	}

	return (
		(hideFounders && foundersItems.includes(itemName)) ||
		(hidePrime && itemIsPrime(itemName)) ||
		(hideFaction && itemIsFaction(itemName)) ||
		(hideAdversary && itemIsAdversary(itemName))
	);
}

