

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
import { Enregistrer } from "./ui/form.js";
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

btnAjouter.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!validation()) {
        return;
    }

    btnAjouter.disabled = true;

    try {
        await Enregistrer();

        btnAjouter.textContent = "Ajouter";

        // Njibo les données mises à jour mn serveur
        data = await getAll();
        displaySeries(data);
    } catch (error) {
        console.error("Erreur lors de l'enregistrement :", error);
    } finally {
        btnAjouter.disabled = false;
    }
});

init();
