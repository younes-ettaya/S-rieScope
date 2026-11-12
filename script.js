
// fecht data.
let arr = [];


// lappel de la fonction fetchdata.
fetchdata();

async function fetchdata() {
    const resp = await fetch("https://api.tvmaze.com/shows?page=0");
    if (!resp.ok) {
        console.error("no data to fetch");
    }

    //   console.log(resp);

    const data = await resp.json();
    for (let i = 0; i < 20; i++) arr.push(data[i]);
    console.log(arr);

    displaySeries(arr)
}

// declaration des variables .
const liste_serie = document.getElementById("liste-serie");
const inputName = document.getElementById("inputName");
const Genre = document.getElementById("Genre");
const Recherche = document.getElementById("Recherche");

// la fonction qui afficher les serie .
function displaySeries(arr) {

    liste_serie.textContent = "";

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


}

function Ajouter(){
let obj={}

}

Recherche.addEventListener('input', function(){
    const namesrch = Recherche.value.trim().toLowerCase();

    const resultat = arr.filter(serie=>{
        return serie.name.trim().toLowerCase().includes(namesrch)
    });
        displaySeries(resultat);

});

Genre.addEventListener('change',function(){
const genresrch = Genre.value.trim().toLowerCase();

const resultat = arr.filter(serie=>{
    return serie.genre.toLowerCase().includes(genresrch)
});
displaySeries(resultat);
});