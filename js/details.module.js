import { UI } from "./ui.module.js";

export class Details{
    constructor(id){
        document.getElementById("btnclose").addEventListener("click",()=>{
            document.getElementById('details').classList.add("d-none");
            document.getElementById('games').classList.remove("d-none");
        })
        this.loader = document.querySelector(".lds-spinner")
        this.getDetials(id)
        


    }
    async getDetials(id){
        this.loader.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '57ea03ee73msh61817f862e03f97p1ca4e8jsn9e076b296f32',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
        const res=await api.json()
       this.loader.classList.add("d-none")
        console.log(res);
        new UI().displayDetails(res)
        
    } 
}