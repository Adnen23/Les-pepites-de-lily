export function presentationShow() {
    
    const titrePresentation = "Les pépites de Lily"
    const textPresentation = "Bienvenue dans le site internet des Pépites de Lily, Passionnée de pâtisserie et de cuisine, je partage avec vous mes réalisations et surtout n'hesitez pas à me contacter pour vos commandes."
    let presentationDOM = document.querySelector("#presentation")
    let presentationContainer =
        `<div class="card mb-3 border-light" style="max-width: 100%;">
        <div class="row g-4 p-3 d-flex  flex-sm-row-reverse">
            <div class="col-md-4 align-self-center bg1" "data-aos="fade-left" data-aos-duration="2000"">
                <img src="Logo-removebg-preview.png" class="img-fluid rounded-start w-75 " alt="logo">
            </div>
            <div class="col-md-8" "data-aos="fade-right" data-aos-duration="2000"">
                <div class="card-body bg1 ">
                    <h2 class="card-title text-center fw-bolder mb-4 mt-lg-4 text-decoration-underline"
                        id="acceuil">${titrePresentation} </h2>
                    <p class="card-text text-center fs-5 mt-3">${textPresentation}</p>
                    <div class="d-flex justify-content-center socialMedia">
                    </div>
                </div>
            </div>
        </div>
    </div>`
    presentationDOM.innerHTML = presentationContainer
}

/*
<div class="card mb-3 border-light" style="max-width: 100%;">
            <div class="row g-4 p-3 d-flex  flex-sm-row-reverse">
                <div class="col-md-4  align-self-center bg1" data-aos="fade-left" data-aos-duration="2000">
                    <img src="Logo-removebg-preview.png" class="img-fluid rounded-start w-75 " alt="...">
                </div>
                <div class="col-md-8" data-aos="fade-right" data-aos-duration="2000">
                    <div class="card-body bg1 ">
                        <h2 class="card-title text-center fw-bolder mb-4 mt-lg-4 text-decoration-underline"
                            id="acceuil">Les Pépites
                            de Lily</h2>
                        <p class="card-text text-center fs-5 mt-3">Bienvenue dans le site internet des Pépites de Lily,
                            Passionnée de pâtisserie et de cuisine, je partage avec vous mes réalisations et surtout
                            n'hesitez pas à me contacter pour vos commandes.</p>
                        <div class="d-flex justify-content-center socialMedia">
                            <!--Social Media Icone-->
                        </div>
                    </div>
                </div>
            </div>
        </div>*/