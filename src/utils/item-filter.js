import { foundersItems, itemIsPrime, itemIsFaction } from "./items";

export function isItemFiltered(
	itemName,
	item,
	{ itemsMastered, hideMastered, hideFounders, hidePrime, hideFaction }
) {
	if (itemsMastered.has(itemName)) {
		return hideMastered;
	}

	return (
		(hideFounders && foundersItems.includes(itemName)) ||
		(hidePrime && itemIsPrime(itemName)) ||
		(hideFaction && itemIsFaction(itemName))
	);
}

