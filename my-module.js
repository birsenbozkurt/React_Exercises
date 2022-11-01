const hello = (name) => {
	console.log("hello " + name);
	console.log(`hello ${name}`);
};

//arrow function olaraktopla fokdiyonu yazıldı.

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;

const text = "Text"; //String aktardık.
const user = {
	name: "Birsen",
	surname: "Bozkurt",
};

const users = [
	{
		name: "Merve",
		surname: "Bolugur",
	},
	{
		name: "Mert",
		surname: "Aydın",
	},
];
//Bu fonksiyonu index.js dosyasında kullanacağımız için dışarı aktarmamaız gerkeir. => Export
// export default topla;
export { hello, topla, cikar, text, user, users };
