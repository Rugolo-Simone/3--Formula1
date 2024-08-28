var pilotiTeam = [" ", "Red Bull", "Ferrari", "McLaren", "Mercedes", "Aston Martin", "Alpine", "Haas", "Williams", "Alfa Romeo", "Alpha Tauri"]

var vettore = [
    {
        "Nome": "Red Bull Racing",
        "imgTeam": "img/redbullpng.png",
        "imgP1": "img/verstappen.png",
        "imgP2": "img/perez.png",
        "desc": "Red Bull Racing è un brand famosissimo, ma anche team di F1, team austriaco in forte crescita negli ultimi anni e attuale campione del mondo. Alla guida delle 2 vetture l'olandese Max Verstappen, campione del mondo in carica e il messicano Checo Perez",
        "camp": "In campionato si trova al primo posto con 434 punti e 7 vittorie",
        "backColor": "#0D228E",
        "color": "white"
    },
    {
        "Nome": "Scuderia Ferrari",
        "imgTeam": "img/ferrari.png",
        "imgP1": "img/leclerc.png",
        "imgP2": "img/sainz.png",
        "desc": "Scuderia Ferrari è il Team di F1 più famoso e vittorioso della storia, negli ultimi anni in discesa ma comunque è sempre presente quando si parla di vittorie e poi, alla guida delle vetture il monegasco Charles Leclerc e lo spagnolo Carlos Sainz",
        "camp": "In campionato si trova al terzo posto con 370 e 2 vittorie",
        "backColor": "red",
        "color": "white"
    },
    {
        "Nome": "McLaren",
        "imgTeam": "img/mclaren.png",
        "imgP1": "img/norris.png",
        "imgP2": "img/piastri.png",
        "desc": "McLaren F1 TEAM, separatasi da Mercedes, qualche anno fa è in forte crescita negli ultimi anni grazie ai suoi piloti molto giovani, Team storico con alla guida delle vetture l'inglese Lando Norris e l'australiano Oscar Piastri",
        "camp": "In campionato si trova al secondo posto con 404 punti e 3 vittorie",
        "backColor": "orange",
        "color": "black"
    },
    {
        "Nome": "Mercedes",
        "imgTeam": "img/mercedes.png",
        "imgP1": "img/hamilton.png",
        "imgP2": "img/russel.png",
        "desc": "Mercedes AMG Petronas F1 TEAM, negli ultimi anni ha vinto decine di campionati grazie al pilota inglese Lewis Hamilton campione del mondo ben 7 volte, pari con Schumacher, e il secondo pilota, il giovane inglese George Russel",
        "camp": "In campionato si trova al quarto posto con 276 punti e 3 vittorie",
        "backColor": "aqua",
        "color": "black"
    },
    {
        "Nome": "Aston Martin",
        "imgTeam": "img/aston.png",
        "imgP1": "img/stroll.png",
        "imgP2": "img/alonso.png",
        "desc": "Aston Martin è una scuderia nuova in F1, inglese con alla guida delle due vetture il canadese Lance Stroll e lo spagnolo Fernando Alonso",
        "camp": "In campionato si trova al quinto posto con 74 punti e 0 vittorie",
        "backColor": "darkgreen",
        "color": "white"
    },
    {
        "Nome": "Alpine",
        "imgTeam": "img/alpine.png",
        "imgP1": "img/ocon.png",
        "imgP2": "img/gasly.png",
        "desc": "Alpine è una scuderia nuova in F1, francese, ex Renault con alla guida due piloti entrambi francesi, Esteban Ocon e pier Gasly",
        "camp": "In Campionato si trova al ottavo posto con 13 punti e 0 vittorie",
        "backColor": "deepskyblue",
        "color": "black"
    },
    {
        "Nome": "Haas",
        "imgTeam": "img/haas.png",
        "imgP1": "img/hulkenberg.png",
        "imgP2": "img/magnussen.png",
        "desc": "Haas è una scuderia Americana, dipendente dalla Ferrari, lotta per le basse posizioni con alla guida il danese Kevin Magnussen e il tedesco Nico Hulkenberg",
        "camp": "In campionato si trova settima con 27 punti e 0 vittorie",
        "backColor": "white",
        "color": "black"
    },
    {
        "Nome": "Williams",
        "imgTeam": "img/williams.png",
        "imgP1": "img/albon.png",
        "imgP2": "img/sargeant.png",
        "desc": "Williams è una scuderia storica, inglese che lotta per le basse posizioni, con alla guida il thailandese Alex Albon e l'americano Logan Sargeant",
        "camp": "In Campionato si trova nona con 4 punti e 0 vittorie",
        "backColor": "darkblue",
        "color": "white"
    },
    {
        "Nome": "Alfa Romeo",
        "imgTeam": "img/alfa.png",
        "imgP1": "img/zhou.png",
        "imgP2": "img/bottas.png",
        "desc": "Alfa Romeo è la seconda scuderia italiana, dipendente da Ferrari, lotta per le basse posizione, con alla guida il Cinese Guanyu Zhou e il finlandese Valtteri Bottas",
        "camp": "In Campionato si trova decima con 0 punti e 0 vittorie",
        "backColor": "chartreuse",
        "color": "black"
    },
    {
        "Nome": "Alpha Tauri",
        "imgTeam": "img/alpha.png",
        "imgP1": "img/tsunoda.png",
        "imgP2": "img/ricciardo.png",
        "desc": "Alpha Tauri è la terza scuderia italiana, dipendente da Red Bull, lotta per le medie posizioni con alla guida il giapponese Yuki Tsunoda e l'australiano Daniel Ricciardo",
        "camp": "In Campionato si trova in sesta posizione con 34 punti e 0 vittorie",
        "backColor": "darkslateblue",
        "color": "white"
    },
]

window.onload = init

function init(){
    let select = document.getElementById("select")
    for(let i=0; i<pilotiTeam.length; i++){
        let opt = document.createElement("option")
        opt.innerHTML = pilotiTeam[i]
        select.append(opt)
    }
}

function conferma(){
    let index = document.getElementById("select").selectedIndex
    let title = document.getElementById("titleI")
    let img1 = document.getElementById("imgTeam")
    let img2 = document.getElementById("imgP1")
    let img3 = document.getElementById("imgP2")
    let desc = document.getElementById("txtDesc")
    let camp = document.getElementById("txtCamp")
    let div = document.getElementById("cardInfo")

    title.innerHTML = vettore[index-1].Nome
    img1.src = vettore[index-1].imgTeam
    img2.src = vettore[index-1].imgP1
    img3.src = vettore[index-1].imgP2
    desc.innerHTML = vettore[index-1].desc
    camp.innerHTML = vettore[index-1].camp
    div.style.backgroundColor = vettore[index-1].backColor
    div.style.color = vettore[index-1].color
}