//Ajouter automatiquement les photos de gateau d'anniversaire
export function ajouterImageAnnivSale() {
    for (let index = 2; index < 12; index++) {
        var container_img_anniv = document.querySelector("#img_anniversaire")
        var imgAnniversaire = ` <div class="carousel-item">
                                <img src="/G_Anniversaire/PhotoAnniv${index}.jpg"
                                    class="img-thumbnail  border border-4 mt-2 w-75 h-75 shadow-lg"
                                    style="max-height: 80%;" alt="Gateau d'anniversaire${index}">
                                </div>`
        container_img_anniv.innerHTML += imgAnniversaire
    }
    //Ajouter automatiquement les photos de salés
    for (let index = 2; index < 4; index++) {
        var container_img_sale = document.querySelector("#img_sale")
        var imgSales = `<div class="carousel-item">
                        <img src="/G_Salés/PhotoSale${index}.jpg"
                            class="img-thumbnail  border border-4 mt-2 w-75 h-75 shadow-lg" alt="salés${index}">
                        </div>`
        container_img_sale.innerHTML += imgSales
    }
}