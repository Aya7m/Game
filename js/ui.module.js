
export class UI {
    constructor() {



    }

    display(data) {
        let cartona = ''
        for (let i = 0; i < data.length; i++) {
            cartona += `   <div class="col-md-3">
            <div class="inner" >
                <div class="card bg-transparent" data-id="${data[i].id}" >
                  
                        <div class="card-body">
                        <figure class="position-relative">
                          <img src="${data[i].thumbnail}" class="w-100" alt="...">
                        </figure>
                        <figcaption class="p-2" >
                       
                        <div class=" d-flex justify-content-between ">
                        
                          <h5 class="card-title">${data[i].title}</h5>
                           <span class="btn btn-dark ">free</span>
                          
                           
                        </div>
                         <p class="card-text">${data[i].short_description.split(" ", 8)}</p>
                        </figcaption>
                          
                           
                        </div>
                        <footer class="card-footer small d-flex justify-content-between">
                        <span class="badge badge-color border shadow">${data[i].genre}</span>
                        <span class="badge badge-color border shadow">${data[i].platform}</span>
    
                    </footer>
                </div>
            </div>
        </div>`

        }
        document.getElementById('game').innerHTML = cartona;





    }

    displayDetails(data) {
       
       
           const blackbox = `
        
        <div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="">
    </div>
    <div class="col-md-8">
        <h3>${data.title}</h3>
        <p>catagory : <span class="badge text-bg-info">${data.developer}</span></p>
        <p>platform : <span class="badge text-bg-info">${data.platform}</span></p>
        <p>status : <span class="badge text-bg-info">${data.status}</span></p>
        <p class="w-75 mx-4">${data.description}</p>
        <div class="row">
        <div class="col-md-4">
            <img src="${data.screenshots[0].image}" class="w-100" alt="">
            <p>storage :${data.minimum_system_requirements.storage}</p>
        </div>
        <div class="col-md-4">
            <img src="${data.screenshots[1].image}" class="w-100" alt="">
            <p>memory: ${data.minimum_system_requirements.memory}</p>
        </div>
        <div class="col-md-4">
            <img src="${data.screenshots[2].image}" class="w-100" alt="">
            <p>processor :${data.minimum_system_requirements.processor}</p>
        </div>
    </div>
       
        
    <a  href="${data.game_url}" class="btn btn-outline-warning" target="_blank">show Game</a>

    </div>
        
        
        `
        

        document.getElementById("detail").innerHTML = blackbox;
        
    }

 

   


}