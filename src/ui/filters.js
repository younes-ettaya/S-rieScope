

const recherche_par_genre = document.getElementById("Genre");
let tableaux_genre = [];



export function getgenre() {
    array_Data.forEach(serie => {
        serie.genres.forEach(catey => {
            if (!tableaux_genre.includes(catey)) {
                tableaux_genre.push(catey);
            }
        });
    })

    const option = document.createElement("option");
    option.textContent = "touts les catygorie";
    option.value = "";
    option.className = "text-black";
    recherche_par_genre.appendChild(option);
    tableaux_genre.forEach(catey => {
        const option = document.createElement("option");
        option.textContent = catey;
        option.value = catey;
        option.className = "text-black";
        recherche_par_genre.appendChild(option);
    });
}


export function search_sort() {

    const recherche_par_nom = Recherche.value.trim().toLowerCase();

    let resultat = array_Data.filter(serie => serie.name.trim().toLowerCase().includes(recherche_par_nom));

    if (recherche_par_genre.value) {
        resultat = resultat.filter(genre => genre.genres.includes(recherche_par_genre.value))
        console.log(resultat);

    }

    displaySeries(resultat);
}
Recherche.addEventListener('input', search_sort)
recherche_par_genre.addEventListener('change', search_sort)