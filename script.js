
// fecht data.
let arr = [];


// lappel de la fonction fetchdata.

async function fetchdata() {
    const resp = await fetch("https://api.tvmaze.com/shows?page=0");
    if (!resp.ok) {
        console.error("no data to fetch");
    }

    //   console.log(resp);

    const data = await resp.json();
    for (let i = 0; i < 20; i++) arr.push(data[i]);

    return arr;
}

arr = await fetchdata();
// declaration des variables .
const liste_serie = document.getElementById("liste-serie");
const inputName = document.getElementById("inputName");
const srchgenre = document.getElementById("Genre");
const Recherche = document.getElementById("Recherche");
const categorie = document.getElementById("categorie");
const description = document.getElementById("description");
const btnAjouter = document.getElementById("btnAJouter");
const affichées = document.getElementById("affichées");
const Réinitialiser = document.getElementById("Réinitialiser");

const champnom = document.getElementById("champnom");
const champgenre = document.getElementById("champgenre");
const champdesc = document.getElementById("champdesc");


let tabl = [];
let compteur = 22;

// la fonction qui afficher les serie .
function displaySeries(arr) {

    liste_serie.textContent = "";
    if (arr.length > 0) {
        affichées.textContent = arr.length + " affichées ";
    }
    else {
        affichées.textContent = "0  affichées ";
    }

    arr.forEach(serie => {



        const Div1 = document.createElement("div");
        Div1.setAttribute("class", "flex flex-col gap-2 border-2 rounded-[8px] border-slate-300 bg-slate-900 ");
        liste_serie.appendChild(Div1);


        const image = document.createElement("img");
        image.setAttribute("class", "rounded-t-[8px] h-[250px] w-full object-cover");
        image.src = serie.image.original
        Div1.appendChild(image);

        const titreSerie = document.createElement("h3");
        titreSerie.setAttribute("class", "font-bold text-[20px] text-gray-100 p-3 ");
        titreSerie.innerHTML = serie.name
        Div1.appendChild(titreSerie);

        const div2 = document.createElement("div");
        div2.setAttribute("class", "flex flex-wrap gap-1 mx-3 text-[12px]");
        Div1.appendChild(div2);

        serie.genres.forEach((genre) => {
            const Pgenre1 = document.createElement("p");
            Pgenre1.setAttribute("class", "bg-slate-600  px-2 rounded-[15px]");
            Pgenre1.innerHTML = genre
            div2.appendChild(Pgenre1);
        });


        const description = document.createElement("div");

        description.className = "text-gray-400 m-3 line-clamp-2 text-[12px] leading-5";

        const temp = document.createElement("div");
        temp.innerHTML = serie.summary || "";

        description.textContent = temp.textContent;
        Div1.appendChild(description);
    })
    getgenre()
}
displaySeries(arr);

function Ajouter() {
    let obj = {
        id: compteur++,
        name: inputName.value,
        summary: description.value,
        image: { original: "assest/image_par_defaut.webp" },
        genres: categorie.value.split(",")

    };
    // obj.image.original = "assest/image_par_defaut.webp"
    arr.push(obj);
    console.log(arr);


    inputName.value = "";
    description.value = "";
    categorie.value = "";
}


function getgenre() {
    arr.forEach(serie => {
        serie.genres.forEach(catey => {
            if (!tabl.includes(catey)) {
                tabl.push(catey);
            }
        });
    })

    const option = document.createElement("option");
    option.textContent = "touts les catygorie";
    option.value = "";
    option.className = "text-black";
    srchgenre.appendChild(option);
    tabl.forEach(catey => {
        const option = document.createElement("option");
        option.textContent = catey;
        option.value = catey;
        option.className = "text-black";
        srchgenre.appendChild(option);
    });
}
// let k = 0, option;


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

btnAjouter.addEventListener('click', (e) => {
    e.preventDefault();

    if (!validation()) {
        return
    }

    else if (description.value !== "" || categorie.value !== "" || inputName.value !== "") {

        Ajouter();
        champnom.hidden = true;
        champgenre.hidden = true;
        champdesc.hidden = true;
    }
    displaySeries(arr);

});

Réinitialiser.addEventListener('click', (e) => {
    e.preventDefault();
    Recherche.value = "";
    srchgenre.selectedIndex = 0
    displaySeries(arr);

})

function search_sort() {

    const namesrch = Recherche.value.trim().toLowerCase();

    let resultat = arr.filter(serie => serie.name.trim().toLowerCase().includes(namesrch));
    // console.log(resultat);

    if (srchgenre.value) {
        resultat = resultat.filter(genre => genre.genres.includes(srchgenre.value))
        console.log(resultat);

    }
    // console.log(resultat);

    displaySeries(resultat);
}


Recherche.addEventListener('input', search_sort)
srchgenre.addEventListener('change', search_sort)
