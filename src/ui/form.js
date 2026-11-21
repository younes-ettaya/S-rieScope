import { create } from "../services/serieService.js";

const inputName = document.getElementById("inputName");
const description = document.getElementById("description");
const categorie = document.getElementById("categorie");
const language = document.getElementById("langue");
const formulaire = document.getElementById("formulaire");

export function Ajouter(array_Data) {
    let obj = {
        name: inputName.value,
        summary: description.value,
        genres: categorie.value.split(","),
        language: language.value,

    };
    create(obj)

    array_Data.push(obj);
    formulaire.reset()



}