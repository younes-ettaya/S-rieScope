
// fecht data.
let array_Data = [];


// lappel de la fonction fetchdata.
async function fetchdata() {
    const resp = await fetch("https://api.tvmaze.com/shows?page=0");
    if (!resp.ok) {
        console.error("no data to fetch");
    }

    //   console.log(resp);

    const data = await resp.json();
    for (let i = 0; i < 20; i++) array_Data.push(data[i]);

    return array_Data;
}


array_Data = await fetchdata();

console.log(array_Data);




// declaration des variables.
const liste_serie = document.getElementById("liste-serie");
const inputName = document.getElementById("inputName");
const description = document.getElementById("description");
const categorie = document.getElementById("categorie");
const recherche_par_genre = document.getElementById("Genre");
const Recherche = document.getElementById("Recherche");
const btnAjouter = document.getElementById("btnAJouter");
const affichées = document.getElementById("affichées");
const Réinitialiser = document.getElementById("Réinitialiser");


// les message des erreur pour input vide .
const champnom = document.getElementById("champnom");
const champgenre = document.getElementById("champgenre");
const champdesc = document.getElementById("champdesc");



// tableaux de les option  genre
let tableaux_genre = [];


// compteur represent id et commence à 22 car dernier id il contien 21
let compteur = 22;



if (!localStorage.getItem("data"))
    localStorage.setItem("data", JSON.stringify(array_Data));

 array_Data = JSON.parse(localStorage.getItem("data"));





// la fonction qui afficher les serie .
// function displaySeries(array_Data) {

//     liste_serie.textContent = "";
//     if (array_Data.length > 0) {
//         affichées.textContent = array_Data.length + " affichées ";
//     }
//     else {
//         affichées.textContent = "0  affichées ";
//     }

//     array_Data.forEach(serie => {



//         const Div1 = document.createElement("div");
//         Div1.setAttribute("class", "flex flex-col gap-2 border-2 rounded-[8px] border-slate-300 bg-slate-900 ");
//         liste_serie.appendChild(Div1);


//         const image = document.createElement("img");
//         image.setAttribute("class", "rounded-t-[8px] h-[250] w-full object-cover");
//         image.src = serie.image.original
//         Div1.appendChild(image);

//         const titreSerie = document.createElement("h3");
//         titreSerie.setAttribute("class", "font-bold text-[20px] text-gray-100 p-3 ");
//         titreSerie.innerHTML = serie.name
//         Div1.appendChild(titreSerie);

//         const div2 = document.createElement("div");
//         div2.setAttribute("class", "flex flex-wrap gap-1 mx-3 text-[12px]");
//         Div1.appendChild(div2);

//         serie.genres.forEach((genre) => {
//             const Pgenre1 = document.createElement("p");
//             Pgenre1.setAttribute("class", "bg-slate-600  px-2 rounded-[15px]");
//             Pgenre1.innerHTML = genre
//             div2.appendChild(Pgenre1);
//         });


//         const description = document.createElement("div");

//         description.className = "text-gray-400 m-3 line-clamp-2 text-[12px] leading-5";

//         const temp = document.createElement("div");
//         temp.innerHTML = serie.summary || "";

//         description.textContent = temp.textContent;
//         Div1.appendChild(description);
//     })
//     getgenre()
// }
displaySeries(array_Data);




// fonction d'ajouter une serie
function Ajouter() {
    let obj = {
        id: compteur++,
        name: inputName.value,
        summary: description.value,
        image: { original: "asset/image_par_defaut.webp" },
        genres: categorie.value.split(",")

    };
    // obj.image.original = "asset/image_par_defaut.webp"
    array_Data.push(obj);
    console.log(array_Data);


    inputName.value = "";
    description.value = "";
    categorie.value = "";

}




// fonction de stocker les genre dans tableaux_genre pour afficher comme des options 
function getgenre() {
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





// fonction  de valider les input.
function validation() {
    let chcker = true;
    champnom.hidden = true;
    champgenre.hidden = true;
    champdesc.hidden = true;

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
    return chcker;
}





// le button ajouer pou ajouter une serie ou afficher et valider input .
btnAjouter.addEventListener('click', (e) => {
    e.preventDefault();

    if (!validation()) {
        return
    }

    else if (description.value !== "" || categorie.value !== "" || inputName.value !== "") {

        Ajouter();
        localStorage.setItem("data", JSON.stringify(array_Data));
        champnom.hidden = true;
        champgenre.hidden = true;
        champdesc.hidden = true;
    }
    displaySeries(array_Data);

});




// Effacer le contenu du recherche .
Réinitialiser.addEventListener('click', (e) => {
    e.preventDefault();
    Recherche.value = "";
    recherche_par_genre.selectedIndex = 0
    displaySeries(array_Data);

})



// fonction de recherche par genre et par nom 
function search_sort() {

    const recherche_par_nom = Recherche.value.trim().toLowerCase();

    let resultat = array_Data.filter(serie => serie.name.trim().toLowerCase().includes(recherche_par_nom));
    // console.log(resultat);

    if (recherche_par_genre.value) {
        resultat = resultat.filter(genre => genre.genres.includes(recherche_par_genre.value))
        console.log(resultat);

    }
    // console.log(resultat);

    displaySeries(resultat);
}
Recherche.addEventListener('input', search_sort)
recherche_par_genre.addEventListener('change', search_sort)
