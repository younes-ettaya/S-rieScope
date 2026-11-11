let arr = [];

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

const liste_serie = document.getElementById("liste-serie");

function displaySeries(arr) {

    liste_serie.textContent = "";

    arr.forEach(serie => {
        const Div1 = document.createElement("div");
        Div1.setAttribute("class", "flex flex-col gap-2 border-2 rounded-[8px] borde r-slate-300 bg-slate-900 ");
        liste_serie.appendChild(Div1);


        const image = document.createElement("img");
        image.setAttribute("class", "rounded-t-[8px] h-[55%] ");
        image.src = serie.image.original
        Div1.appendChild(image);

        const titreSerie = document.createElement("h3");
        titreSerie.setAttribute("class", "font-bold text-[20px] text-gray-100 p-2");
        titreSerie.innerHTML =serie.name
        Div1.appendChild(titreSerie);

        const div2 = document.createElement("div");
        div2.setAttribute("class", "flex gap-2 px-2");
        Div1.appendChild(div2);

        serie.genres.forEach((genre)=>{
            const Pgenre1 = document.createElement("p");
            Pgenre1.setAttribute("class", "bg-slate-600 font-medium px-2 rounded-[15px]");
             Pgenre1.innerHTML = genre
             div2.appendChild(Pgenre1);
            });

            
        const Pgenre2 = document.createElement("p");
        Pgenre2.setAttribute("class", "bg-slate-600 font-medium px-2 rounded-[15px]");
        div2.appendChild(Pgenre2);

        
        const description = document.createElement("div");
        description.setAttribute("class", "text-gray-400 p-2 line-clamp-2 text-[12px]");
        description.innerHTML = serie.summary
        Div1.appendChild(description);

    })


}