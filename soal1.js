const prompt = require("prompt-sync")({ sigint: true });

const num = prompt("Masukkan angka: ");

if (num < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else if (num % 2 != 0) {
  console.log("Tidak bisa input bilangan ganjil");
} else {
  console.log("Akar pangkat 2 dari " + num + " adalah ");
  console.log(Math.sqrt(num));
}
