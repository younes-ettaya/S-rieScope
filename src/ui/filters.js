import { getAll } from "../services/serieService.js";
import { displaySeries } from "./cards.js";

const Recherche = document.getElementById("Recherche");
const recherche_par_genre = document.getElementById("Genre");
const recherche_par_langue = document.getElementById("Langues");
const reinitialiser = document.getElementById("Réinitialiser");

function remplirSelect(select, valeurs, texteVide) {
    const ancienneValeur = select.value;

    select.textContent = "";
    select.add(new Option(texteVide, ""));

    valeurs.forEach(valeur => {
        select.add(new Option(valeur, valeur));
    });

    if (valeurs.includes(ancienneValeur)) {
        select.value = ancienneValeur;
    }
}

export function getgenre(array_Data) {
    const genres = [];
    const langues = [];

    array_Data.forEach(serie => {
        serie.genres.forEach(genre => {
            if (!genres.includes(genre)) {
                genres.push(genre);
            }
        });

        if (!langues.includes(serie.language)) {
            langues.push(serie.language);
        }
    });

    remplirSelect(recherche_par_genre, genres, "Tous les genres");
    remplirSelect(recherche_par_langue, langues, "Toutes les langues");
}

let numeroRecherche = 0;

export async function search_sort() {
    const rechercheActuelle = ++numeroRecherche;

    const filtres = {
        name: Recherche.value.trim(),
        genre: recherche_par_genre.value,
        language: recherche_par_langue.value
    };

    try {
        const resultat = await getAll(filtres);

        if (rechercheActuelle === numeroRecherche) {
            displaySeries(resultat);
        }
    } catch (error) {
        console.error("Erreur de recherche :", error);
    }
}

Recherche.addEventListener("input", search_sort);
recherche_par_genre.addEventListener("change", search_sort);
recherche_par_langue.addEventListener("change", search_sort);

Recherche.closest("form").addEventListener("submit", (e) => {
    e.preventDefault();
    search_sort();
});

reinitialiser.addEventListener("click", (e) => {
    e.preventDefault();

    Recherche.value = "";
    recherche_par_genre.value = "";
    recherche_par_langue.value = "";

    search_sort();
});