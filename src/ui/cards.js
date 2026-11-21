import { remove } from "../services/serieService.js";
import { getAll } from "../services/serieService.js";
import { update } from "../services/serieService.js";
import { getgenre } from "./filters.js"

const liste_serie = document.getElementById("liste-serie");
const affichées = document.getElementById("affichées");



export function displaySeries(array_Data) {

    liste_serie.textContent = "";
    if (array_Data.length > 0) {
        affichées.textContent = array_Data.length + " affichées ";
    }
    else {
        affichées.textContent = "0  affichées ";
    }

    array_Data.forEach(serie => {

        const div0 = document.createElement("div");
        div0.setAttribute("class", " flex flex-col h-full border-2 bg-slate-900 rounded-[8px] border-slate-300");
        liste_serie.appendChild(div0);

        const Div1 = document.createElement("div");
        Div1.setAttribute("class", "flex flex-col gap-2 flex-1");
        div0.appendChild(Div1);


        const image = document.createElement("img");
        image.setAttribute("class", "rounded-t-[8px] h-[250px] w-full object-cover");
        image.src = serie.image?.original || "asset/image_par_defaut.webp";
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

        const div3 = document.createElement("div");
        div3.className = "flex flex-wrap mt-auto justify-end items-center gap-2 p-2"
        div0.appendChild(div3);


        const button_Suprimer = document.createElement("button");
        button_Suprimer.textContent = "Suprimer"
        button_Suprimer.className = "bg-lime-300  rounded-[12px]  text-black font-bold p-2"
        button_Suprimer.addEventListener("click", async () => {
            try {
                const validation = confirm("valider la suppresion");
                if (validation) {
                    await remove(serie.id)
                    console.log("serie supprimer");
                    getAll()
                        .then(res => displaySeries(res))
                }


            } catch (error) {
                console.error("Erreur suppression :", error);

            }
        });

        div3.appendChild(button_Suprimer);



        const button_Modifer = document.createElement("button");
        button_Modifer.textContent = "Modifier"
        button_Modifer.className = "bg-lime-300  rounded-[12px] font-bold text-black p-2"
        button_Modifer.addEventListener("click", async () => {
            try {
            await update(serie.id)
            console.log("été Modifier");
            getAll()
                .then(res => displaySeries(res))
             } catch (error) {
                console.error("Erreur suppression :", error);

            }

        })
        div3.appendChild(button_Modifer);


    })
    getgenre()
}

