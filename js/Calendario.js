var gare = [
    {
        "data": "01/09/2024",
        "Luogo": "Italia",
        "Orario": "15:00",
        "img": "img/italia.jpeg"
    },
    {
        "data": "15/09/2024",
        "Luogo": "Azerbaijan",
        "Orario": "13:00",
        "img": "img/azerbaijan.jpeg"
    },
    {
        "data": "22/09/2024",
        "Luogo": "Singapore",
        "Orario": "14:00",
        "img": "img/singapore.jpeg"
    },
    {
        "data": "20/10/2024",
        "Luogo": "USA",
        "Orario": "21:00",
        "img": "img/usa1.jpeg"
    },
    {
        "data": "27/10/2024",
        "Luogo": "Messico",
        "Orario": "21:00",
        "img": "img/messico.jpeg"
    },
    {
        "data": "03/11/2024",
        "Luogo": "Brasile",
        "Orario": "18:00",
        "img": "img/brasile.jpeg"
    },
    {
        "data": "24/11/2024",
        "Luogo": "USA",
        "Orario": "07:00",
        "img": "img/usa2.jpeg"
    },
    {
        "data": "01/12/2024",
        "Luogo": "Qatar",
        "Orario": "18:00",
        "img": "img/qatar.jpeg"
    },
    {
        "data": "08/12/2024",
        "Luogo": "Abu Dhabi",
        "Orario": "14:00",
        "img": "img/abudhabi.jpeg"
    },
]

var i=0

window.onload = init

function init(){
    card()
    
    document.onkeydown = evento;
}

function card(){
    let title = document.getElementById("titleCard")
    let img = document.getElementById("imgGara")
    let descrizione = document.getElementById("descrizioneGara")

    title.innerHTML = gare[i].Luogo
    img.src = gare[i].img
    descrizione.innerHTML = gare[i].data + " - " + gare[i].Orario
}

function evento(){
    switch(event.key){
        case "ArrowUp":
            if(i == 0){
                alert("Non ci sono gare precedenti")
            }
            else{
                i--;
                card()
            }
            break;
        case "ArrowDown":
            if(i == 8){
                alert("Non ci sono gare successive")
            }
            else{
                i++;
                card()
            }
            break;
    }
}