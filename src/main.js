

const btnAjouter = document.getElementById("btnAJouter");

const inputName = document.getElementById("inputName");
const description = document.getElementById("description");
const categorie = document.getElementById("categorie");
const language = document.getElementById("langue");


const champnom = document.getElementById("champnom");
const champgenre = document.getElementById("champgenre");
const champdesc = document.getElementById("champdesc");
const champlang = document.getElementById("champlang");

import { getAll } from "./services/serieService.js";
import { displaySeries } from "./ui/cards.js";
import { Ajouter } from "./ui/form.js";
let data


 function validation() {
    let chcker = true;
    champnom.hidden = true;
    champgenre.hidden = true;
    champdesc.hidden = true;
    champlang.hidden = true;

    if (inputName.value === "") {
        champnom.hidden = false;
        chcker = false;
    }
    if (categorie.value === "") {
        champgenre.hidden = false;
        chcker = false;

    }

    if (description.value === "") {
        champdesc.hidden = false;
        chcker = false;

    }
    if (language.value === "") {
        champlang.hidden = false;
        chcker = false;

    }
    return chcker;
}


async function init() {
    try {
        data = await getAll();

        console.log("Réponse API :", data);

        if (Array.isArray(data)) {
            displaySeries(data);
        } else {
            console.log("Structure à vérifier :", data);
        }

    } catch (error) {
        console.error("Erreur API :", error);
    }
}
btnAjouter.addEventListener("click", (e) => {
    e.preventDefault()
    if (!validation()) {
        return
    }

    else if (description.value !== "" || categorie.value !== "" || inputName.value !== "") {

        Ajouter(data);
        champnom.hidden = true;
        champgenre.hidden = true;
        champdesc.hidden = true;
    }
    displaySeries(data);
  

})

init();
