//afficher la barre de menu automatiquement
export function menuBareShow() {
    var menuBarreDOM = document.querySelector("#barreDeMenu")

    var menuBarre = `<nav class="navbar navbar-expand-lg" style="background-color: #F7EEF1;" id="navbar_top">
        <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand fs-1" id="logo">
        Les Pépites de Lily
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-lg-flex justify-content-around" id="navbarSupportedContent">
        <div class="d-flex justify-content-lg-around justify-content-sm-center socialMedia">
        <!--Social Media Icones-->
        </div>
        <ul class="navbar-nav h4 d-flex justify-content-around  nav-pills">
        <li class="nav-item ms-lg-5 mx-3">
        <a class="nav-link" href="#acceuil">Acceuil</a>
        </li>
        <li class="nav-item ms-lg-5 mx-3">
        <a class="nav-link" href="#anniversaire">anniversaire</a>
        </li>
        <li class="nav-item ms-lg-5 mx-3">
        <a class="nav-link" href="#salés">Salés</a>
        </li>
        </ul>
        </div>
        </div>
        </nav>`
    menuBarreDOM.innerHTML += menuBarre
}