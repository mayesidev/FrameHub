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
	const meridianRegex = /(^|\s)Vaykor(\s|$)/;
	const veilRegex = /(^|\s)Rakta(\s|$)/;
	const perrinRegex = /(^|\s)Secura(\s|$)/;
	const lokaRegex = /(^|\s)Sancti(\s|$)/;
	const arbitersRegex = /(^|\s)Telos(\s|$)/;
	const cephalonRegex = /(^|\s)Synoid(\s|$)/;

	return (
		meridianRegex.test(name) ||
		veilRegex.test(name) ||
		perrinRegex.test(name) ||
		lokaRegex.test(name) ||
		arbitersRegex.test(name) ||
		cephalonRegex.test(name)
	);
}

export function itemIsAdversary(name) {
	const kuvaRegex = /(^|\s)Kuva(\s|$)/;
	const tenetRegex = /(^|\s)Tenet(\s|$)/;
	const codaRegex = /(^|\s)Coda(\s|$)/;

	return (
		kuvaRegex.test(name) ||
		tenetRegex.test(name) ||
		codaRegex.test(name)
	);
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

