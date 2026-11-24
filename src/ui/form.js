import { create } from "../services/serieService.js";
import { update } from "../services/serieService.js"

const inputName = document.getElementById("inputName");
const description = document.getElementById("description");
const categorie = document.getElementById("categorie");
const language = document.getElementById("langue");
const formulaire = document.getElementById("formulaire");

const btnAjouter = document.getElementById("btnAJouter");
const btnAnnuler = document.getElementById("btnAnnuler");



export async function Enregistrer() {
    const obj = {
        name: inputName.value.trim(),
        summary: description.value.trim(),
        genres: categorie.value.split(",").map(genre => genre.trim()),
        language: language.value,
    };

    if (idAModifier !== null) {
        await update(idAModifier, obj);
    } else {
        await create(obj);
    }

    annulerModification();
}


export let idAModifier = null;

export function Modifier(serie) {
    idAModifier = serie.id;

    inputName.value = serie.name;
    description.value = serie.summary || "";
    categorie.value = serie.genres.join(", ");
    language.value = serie.language || "";


    btnAjouter.textContent = "Enregistrer";
    btnAnnuler.hidden = false;
}


function annulerModification() {
    idAModifier = null;
    formulaire.reset();

    btnAjouter.textContent = "＋ Ajouter la série";
    btnAnnuler.hidden = true;

    ["champnom", "champgenre", "champdesc", "champlang"].forEach(id => {
        document.getElementById(id).hidden = true;
    });
}

btnAnnuler.addEventListener("click", annulerModification);