const plantsList = [
  {
    id: 1,
    name: "Euphorbia eritrea",
    sun: "high",
    water: "rarely",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/euphorbia-eritrea.png",
    price: 25,
    toxicity: false,
  },
  {
    id: 2,
    name: "Succulent Bowl",
    sun: "high",
    water: "rarely",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/succulent-bowl.png",
    price: 30,
    toxicity: false,
  },
  {
    id: 3,
    name: "Bunny ears cacti",
    sun: "high",
    water: "rarely",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/bunny-ears-cacti.png",
    price: 20,
    toxicity: false,
  },
  {
    id: 4,
    name: "Ficus lyrata",
    sun: "high",
    water: "regularly",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ficus-lyrata.png",
    price: 30,
    toxicity: false,
  },
  {
    id: 5,
    name: "Bamboo",
    sun: "low",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/lucky-bamboo.png",
    water: "regularly",
    price: 15,
    toxicity: false,
  },
  {
    id: 6,
    name: "Ponytail Palm",
    sun: "low",
    water: "regularly",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ponytail-palm.png",
    price: 50,
    toxicity: false,
  },
  {
    id: 7,
    name: "Pilea peperomioides",
    sun: "no",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/pilea-peperomioides.png",
    water: "regularly",
    price: 50,
    toxicity: true,
  },
  {
    id: 8,
    name: "Calathea triostar",
    sun: "no",
    water: "daily",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/calathea-triostar.png",
    price: 50,
    toxicity: true,
  },
  {
    id: 9,
    name: "Monstera deliciosa",
    sun: "no",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/monstera-deliciosa.png",
    water: "daily",
    price: 50,
    toxicity: true,
  },
];

// Seleção do usuário
let userSelectionObject = {
  sun: "",
  water: "",
  pets: false,
};

function showResults(object) {
  if (object.length !== 0) {
    document.querySelector(".no-results").style.display = "none";
    document.querySelector(".results").style.display = "block";

    let htmlPlants = "";

    object.forEach((plant) => {
      let url = plant.url;
      let name = plant.name;
      let price = plant.price;

      htmlPlants += `
      <div class="plant">
        <div id="plant-image"> <img src="${url}" alt="result"> </div>
        <h3>${name}</h3>
        <h3>$${price}</h3>
      </div>
      `;
    });

    const results = document.querySelector(".results-content");
    results.innerHTML = htmlPlants;
  } else {
    document.querySelector(".no-results").style.display = "block";
    document.querySelector(".results").style.display = "none";
  }
}

function getResults() {
  let rightPlants = [];

  plantsList.forEach((plant) => {
    // Verifica se a opção pets está ativa
    if (userSelectionObject.pets) {
      if (
        plant.sun === userSelectionObject.sun &&
        plant.water === userSelectionObject.water &&
        plant.toxicity !== userSelectionObject.pets
      ) {
        rightPlants.push(plant);
      }
    } else {
      // Se a opção de pets não estiver ativa, verifica apenas sun e water
      if (
        plant.sun === userSelectionObject.sun &&
        plant.water === userSelectionObject.water
      ) {
        rightPlants.push(plant);
      }
    }
  });
  showResults(rightPlants);
}

function dynamicSelect(select, objectProperty) {
  let value = select.value;
  if (objectProperty === "pets") {
    userSelectionObject[objectProperty] = value === "true"; // Converte a string para um valor booleano
  } else {
    userSelectionObject[objectProperty] = value;
  }

  console.log(userSelectionObject);
  getResults();
}
