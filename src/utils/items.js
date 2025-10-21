import PropTypes from "prop-types";

export const SCHEMA_VERSION = 3;

export const foundersItems = ["Excalibur Prime", "Skana Prime", "Lato Prime"];

export function itemIsPrime(name) {
	const primeRegex = /(^|\s)Prime(\s|$)/;
	return (
		primeRegex.test(name) &&
		!foundersItems.includes(name)
	);
}

export function itemIsFaction(name) {
	return (
		itemIsMeridian(name) ||
		itemIsVeil(name) ||
		itemIsPerrin(name) ||
		itemIsLoka(name) ||
		itemIsArbiters(name) ||
		itemIsCephalon(name)
	);
}

export function itemIsMeridian(name){
	const meridianRegex = /(^|\s)Vaykor(\s|$)/;
	return meridianRegex.test(name);
}

export function itemIsVeil(name){
	const veilRegex = /(^|\s)Rakta(\s|$)/;
	return veilRegex.test(name);
}

export function itemIsPerrin(name){
	const perrinRegex = /(^|\s)Secura(\s|$)/;
	return perrinRegex.test(name);
}

export function itemIsLoka(name){
	const lokaRegex = /(^|\s)Sancti(\s|$)/;
	return lokaRegex.test(name);
}

export function itemIsArbiters(name){
	const arbitersRegex = /(^|\s)Telos(\s|$)/;
	return arbitersRegex.test(name);
}

export function itemIsCephalon(name){
	const cephalonRegex = /(^|\s)Synoid(\s|$)/;
	return cephalonRegex.test(name);
}

export function itemIsAdversary(name) {
	return (
		itemIsKuva(name) ||
		itemIsTenet(name) ||
		itemIsCoda(name)
	);
}

export function itemIsKuva(name){
	const kuvaRegex = /(^|\s)Kuva(\s|$)/;
	return kuvaRegex.test(name);
}

export function itemIsTenet(name){
	const tenetRegex = /(^|\s)Tenet(\s|$)/;
	return tenetRegex.test(name);
}

export function itemIsCoda(name){
	const codaRegex = /(^|\s)Coda(\s|$)/;
	return codaRegex.test(name);
}

export function itemIsAnniversary(name){
	const anniversaryRegex = /(^|\s)Dex(\s|$)/;
	return anniversaryRegex.test(name);
}

export function getComponentImageUrl(id) {
	return (
		"https://cdn.jsdelivr.net/gh/Aericio/warframe-exports-data/image/32x32/" +
		id.slice(1).replaceAll("/", ".") +
		".png"
	);
}

export const relicTiers = ["Lith", "Meso", "Neo", "Axi", "Requiem"];
export const relicRarity = ["Common", "Uncommon", "Rare"];

export const itemShape = {
	maxLvl: PropTypes.number,
	mr: PropTypes.number,
	wiki: PropTypes.string,
	vaulted: PropTypes.bool,
	relics: PropTypes.objectOf(
		PropTypes.objectOf(
			PropTypes.shape({
				vaulted: PropTypes.bool,
				rarity: PropTypes.number.isRequired
			})
		)
	),
	baro: PropTypes.arrayOf(PropTypes.number),
	description: PropTypes.string
};

