import { Details } from "./details.module.js"
import { UI } from "./ui.module.js"

export class Home {
    constructor() {

        document.querySelectorAll(".nav-link").forEach(link => {


            link.addEventListener('click', () => {
                this.changeLink(link)
                const catagory = link.getAttribute('data-catagory')
                this.getaPi(catagory)




            })
        })
        this.details = document.getElementById("details");
        this.games = document.getElementById("games");
        this.getaPi("MMORPG")
        this.ui = new UI

        
        this.loader = document.querySelector(".lds-spinner")


    }
    async changeLink(link) {

        document.querySelector(".navbar .active").classList.remove("active")
        link.classList.add("active")

        // const catagory = link.getAttribute('data-catagory')
        // let catagoryLink = await this.getaPi(catagory)
        // this.ui.display(catagoryLink)

    }

    async getaPi(cat) {
        this.loader.classList.remove("d-none")


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '57ea03ee73msh61817f862e03f97p1ca4e8jsn9e076b296f32',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options
        )
        const res = await response.json()

        console.log(res);

        this.ui.display(res)

        this.loader.classList.add("d-none")

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener('click', () => {
                this.details.classList.remove("d-none");
                this.games.classList.add("d-none");
                new Details(card.dataset.id);


            })
        })
    }

    
}