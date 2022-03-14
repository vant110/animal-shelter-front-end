const animalsGrid = document.getElementById("animals-grid");
const animalTemplate = document.getElementById("animal-template").content;

const vaccination = document.getElementById('vaccination');
const sterilization = document.getElementById('sterilization');
const chip = document.getElementById('chip');
const sorting = document.getElementById('sorting');

async function getAnimals() {
    while (animalsGrid.firstChild) {
        animalsGrid.removeChild(animalsGrid.firstChild);
    }

    let url = "/api/animals";
    url += `?sorting=${sorting.value}`;
    if (vaccination.checked) {
        url += "&vaccination"
    }
    if (sterilization.checked) {
        url += "&sterilization"
    }
    if (chip.checked) {
        url += "&chip"
    }
    console.log(`GET ${url}`);

    let response = await fetch(url, {
        method: "GET",
        headers: { "Accept": "application/json" },
        cache: "no-store"
    });
    if (response.ok === true) {
        let animals = await response.json();
        animals.forEach(animal => {
            let animalHref = `/animals/${animal.animalId}`;
            let animalName = animal.name;
            let animalSrc = `/images/animals/${animal.imageName}`;
            let animalClone = animalTemplate.cloneNode(true);
            animalClone.getElementById("animal_a-1").setAttribute("href", animalHref);
            {
                let animal_img = animalClone.getElementById("animal_img");
                animal_img.setAttribute("src", animalSrc);
                animal_img.setAttribute("alt", animalName);
            }
            {
                let animal_a_2 = animalClone.getElementById("animal_a-2");
                animal_a_2.setAttribute("href", animalHref);
                animal_a_2.textContent = animalName;
            }
            animalsGrid.appendChild(animalClone);
        });
    }
}
getAnimals();

vaccination.addEventListener('change', () => getAnimals());
sterilization.addEventListener('change', () => getAnimals());
chip.addEventListener('change', () => getAnimals());
sorting.addEventListener('change', () => getAnimals());