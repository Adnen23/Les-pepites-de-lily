export function socialMediaShow() {
    var socialTable = [
        {
            href: "https://www.instagram.com/les_pepitesdelily/?hl=fr",
            iClass: "bi bi-instagram mx-1",
            iStyle: "font-size: 1.5rem; color: #FD1D1D;",
        },
        {
            href: "https://www.facebook.com/Les-p%C3%A9pites-de-lily-103187058352165/",
            iClass: "bi bi-facebook mx-1",
            iStyle: "font-size: 1.5em; color: #4267B2;",
        },
        {
            href: "tel:+213540513513",
            iClass: "bi bi-telephone-fill mX-1",
            iStyle: "font-size: 1.5rem; color: #42b25a;",
        },
        {
            href: "mailto:pepitesdelily@gmail.com",
            iClass: "bi bi-envelope-fill mx-1",
            iStyle: "font-size: 1.5rem; color: #b27442;",
        },
    ]
    for (let index = 0; index < socialTable.length; index++) {
        var socialMediaDOM = document.querySelectorAll(".socialMedia")
        socialMediaDOM.forEach(item => item.innerHTML += `<a href="${socialTable[index].href}" target="_blank" class=" mx-1">
        <i class="${socialTable[index].iClass}" style="${socialTable[index].iStyle}"></i>
    </a>`)
    }
}