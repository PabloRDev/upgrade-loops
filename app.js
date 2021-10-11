// Iteración #1

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

const showCamisetas = () => {
  for (let index = 0; index < products.length; index++) {
    return products[index].includes("Camiseta");
  }
};

console.log(showCamisetas(products));

// Iteración #2

// Comprueba en cada uno de los alumnos que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

const showApproved = () => {
  for (let index = 0; index < alumns.length; index++) {
    let approves = 0;
    student = alumns[index];

    if (student.T1) {
      approves++;
    }
    if (student.T2) {
      approves++;
    }
    if (student.T3) {
      approves++;
    }
    student.showApproved = approves >= 2 ? true : false;
    approves = 0;
  }
};
showApproved(alumns);
console.log(alumns);

// Iteración #3
// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

// Puedes usar este array:

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];
for (const places of placesToTravel) {
  console.log([places]);
}

// Iteración #4

// Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};
for (const key in alien) {
  console.log(`${key}: ${alien[key]}`);
}

// Iteración #5

// Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:

const placessToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let index = 0; index < placessToTravel.length; index++) {
  if (placessToTravel[index].id == 11 || placessToTravel[index].id == 14) {
    placessToTravel.splice(index, 1);
  }
}

console.log(placessToTravel);

// Iteración #6

// Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (const toy of toys) {
  if (toy.name.includes("gato")) {
    toys.splice(toys.indexOf(toy));
  }
}

console.log(toys);

// Iteración #7

// Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:

const toyss = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

for (const toyy of toyss) {
  if (toyy.sellCount > 15) {
    toyss.splice(toyss.indexOf(toyy));
  }
}

console.log(toyss);
