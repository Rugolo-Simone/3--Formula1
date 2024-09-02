var piloti = [
    {
        "Pilota": ""
    },
    {
        "Posizione": "11°",
        "Pilota": "Nico Hulkenberg",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "22"
    },
    {
        "Posizione": "7°",
        "Pilota": "Sergio Perez",
        "Podi": "3",
        "Vittorie": "1",
        "Punti": "139"
    },
    {
        "Posizione": "19°",
        "Pilota": "Logan Sargeant",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "0"
    },
    {
        "Posizione": "5°",
        "Pilota": "Carlos Sainz",
        "Podi": "6",
        "Vittorie": "1",
        "Punti": "172"
    },
    {
        "Posizione": "2°",
        "Pilota": "Lando Norris",
        "Podi": "10",
        "Vittorie": "4",
        "Punti": "225"
    },
    {
        "Posizione": "9°",
        "Pilota": "Fernando Alonso",
        "Podi": "1",
        "Vittorie": "0",
        "Punti": "50"
    },
    {
        "Posizione": "12°",
        "Pilota": "Yuki Tsunoda",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "22"
    },
    {
        "Posizione": "13°",
        "Pilota": "Daniel Ricciardo",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "12"
    },
    {
        "Posizione": "6°",
        "Pilota": "Lewis Hamilton",
        "Podi": "5",
        "Vittorie": "1",
        "Punti": "154"
    },
    {
        "Posizione": "18°",
        "Pilota": "Alexander Albon",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "4"
    },
    {
        "Posizione": "10°",
        "Pilota": "Lance Stroll",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "24"
    },
    {
        "Posizione": "15°",
        "Pilota": "Oliver Bearman",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "6"
    },
    {
        "Posizione": "4°",
        "Pilota": "Oscar Piastri",
        "Podi": "7",
        "Vittorie": "1",
        "Punti": "179"
    },
    {
        "Posizione": "1°",
        "Pilota": "Max Verstappen",
        "Podi": "12",
        "Vittorie": "8",
        "Punti": "295"
    },
    {
        "Posizione": "14°",
        "Pilota": "Pierre Gasly",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "8"
    },
    {
        "Posizione": "3°",
        "Pilota": "Charles Leclerc",
        "Podi": "8",
        "Vittorie": "2",
        "Punti": "192"
    },
    {
        "Posizione": "16°",
        "Pilota": "Kevin Magnussen",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "5"
    },
    {
        "Posizione": "8°",
        "Pilota": "George Russell",
        "Podi": "2",
        "Vittorie": "0",
        "Punti": "122"
    },
    {
        "Posizione": "20°",
        "Pilota": "Zhou Guanyu",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "0"
    },
    {
        "Posizione": "17°",
        "Pilota": "Esteban Ocon",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "5"
    }
];

var previsione = [
    {
        "Vincitore": "",
        "Ritirato": "",
        "PolePosition": ""
    }
]

window.onload = init

function init(){
    let select1 = document.getElementById("select1")

    for(let i=0; i<piloti.length; i++){
        let opt = document.createElement("option")
        opt.innerHTML = piloti[i].Pilota
        select1.appendChild(opt)
    }

    let select2 = document.getElementById("select2")

    for(let i=0; i<piloti.length; i++){
        let opt = document.createElement("option")
        opt.innerHTML = piloti[i].Pilota
        select2.appendChild(opt)
    }

    let select3 = document.getElementById("select3")

    for(let i=0; i<piloti.length; i++){
        let opt = document.createElement("option")
        opt.innerHTML = piloti[i].Pilota
        select3.appendChild(opt)
    }
}

function conferma(){
    let pole = document.getElementById("select1")
    let ritiro = document.getElementById("select2")
    let vincitore = document.getElementById("select3")

    if(pole.selectedIndex == 0 || ritiro.selectedIndex == 0 || vincitore.selectedIndex == 0)
        alert("Inserisci tutti i campi")
    else{
        previsione[0].PolePosition = pole.value
        previsione[0].Ritirato = ritiro.value
        previsione[0].Vincitore = vincitore.value

        let div = document.getElementById("previsioni")
        let ul = document.createElement("ul")
        
        let li1 = document.createElement("li")
        li1.innerHTML = "Pole Position: " + previsione[0].PolePosition
        ul.appendChild(li1)
        let li2 = document.createElement("li")
        li2.innerHTML = "Ritiro: " + previsione[0].Ritirato
        ul.appendChild(li2)
        let li3 = document.createElement("li")
        li3.innerHTML = "Vincitore: " + previsione[0].Vincitore
        ul.appendChild(li3)

        div.appendChild(ul)
    }
}