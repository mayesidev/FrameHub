import { itemIsFounders, itemIsPrime, itemIsFaction, itemIsAdversary, itemIsAnniversary } from "./items";

export function isFilteredFounders(hideFounders, itemName){
	return hideFounders && itemIsFounders(itemName);
}

export function isItemFiltered(
	itemName,
	{ itemsMastered, hideMastered, hideFounders, hidePrime, hideFaction, hideAdversary, hideAnniversary }
) {
	if (itemsMastered.has(itemName)) {
		return hideMastered;
	}

	return (
		isFilteredFounders(hideFounders, itemName) ||
		(hidePrime && itemIsPrime(itemName)) ||
		(hideFaction && itemIsFaction(itemName)) ||
		(hideAdversary && itemIsAdversary(itemName)) ||
		(hideAnniversary && itemIsAnniversary(itemName))
	);
}

