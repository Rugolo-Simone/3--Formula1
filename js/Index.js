window.onload = init

var piloti = [
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

var team = [
    {
        "Team": "Alfa Romeo",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "0"
    },
    {
        "Team": "Williams",
        "Podi": "0",
        "Vittorie": "0",
        "Punti": "4"
    },
    {
        "Team": "Aston Martin",
        "Podi": "3",
        "Vittorie": "0",
        "Punti": "74"
    },
    {
        "Team": "Alpine",
        "Podi": "1",
        "Vittorie": "0",
        "Punti": "13"
    },
    {
        "Team": "McLaren",
        "Podi": "10",
        "Vittorie": "5",
        "Punti": "404"
    },
    {
        "Team": "Red Bull Racing",
        "Podi": "12",
        "Vittorie": "8",
        "Punti": "434"
    },
    {
        "Team": "Haas",
        "Podi": "1",
        "Vittorie": "0",
        "Punti": "27"
    },
    {
        "Team": "Alpha Tauri",
        "Podi": "2",
        "Vittorie": "0",
        "Punti": "34"
    },
    {
        "Team": "Ferrari",
        "Podi": "6",
        "Vittorie": "2",
        "Punti": "370"
    },
    {
        "Team": "Mercedes",
        "Podi": "5",
        "Vittorie": "2",
        "Punti": "276"
    }
];

function init(){
    creaTabella()
}

function creaTabella() {
    let sectTabella = document.getElementById("table1");

    let cancellaTable = sectTabella.querySelector("table");
    if (cancellaTable) {
        sectTabella.removeChild(cancellaTable);
    }

    let tb = document.createElement("table");
    tb.className = "tablePil";

    let tr = document.createElement("tr");
    tr.className = "tr";

    let th1 = document.createElement("th");
    th1.innerHTML = "POSIZIONE";
    tr.appendChild(th1);

    let th2 = document.createElement("th");
    th2.innerHTML = "PILOTA";
    tr.appendChild(th2);

    let th3 = document.createElement("th");
    th3.innerHTML = "PODI";
    tr.appendChild(th3);

    let th4 = document.createElement("th");
    th4.innerHTML = "VITTORIE";
    tr.appendChild(th4);

    let th5 = document.createElement("th");
    th5.innerHTML = "PUNTI";
    tr.appendChild(th5);

    tb.appendChild(tr);

    for (let i = 0; i < piloti.length; i++) {
        let tr0 = document.createElement("tr");
        let td0 = document.createElement("td");
        td0.innerHTML = piloti[i].Posizione;
        tr0.appendChild(td0);
        
        let td1 = document.createElement("td");
        td1.innerHTML = piloti[i].Pilota;
        tr0.appendChild(td1);
        
        let td2 = document.createElement("td");
        td2.innerHTML = piloti[i].Podi;
        tr0.appendChild(td2);
        
        let td3 = document.createElement("td");
        td3.innerHTML = piloti[i].Vittorie;
        tr0.appendChild(td3);
        
        let td4 = document.createElement("td");
        td4.innerHTML = piloti[i].Punti;
        tr0.appendChild(td4);
        
        tb.appendChild(tr0);
    }

    sectTabella.appendChild(tb);

    let sectTabella2 = document.getElementById("table2");

    let cancellaTable2 = sectTabella2.querySelector("table");
    if (cancellaTable2) {
        sectTabella2.removeChild(cancellaTable2);
    }

    let tb2 = document.createElement("table");
    tb2.className = "tableTea";

    let tr2 = document.createElement("tr");
    tr2.className = "tr";

    let th6 = document.createElement("th");
    th6.innerHTML = "TEAM";
    tr2.appendChild(th6);

    let th7 = document.createElement("th");
    th7.innerHTML = "PODI";
    tr2.appendChild(th7);

    let th8 = document.createElement("th");
    th8.innerHTML = "VITTORIE";
    tr2.appendChild(th8);

    let th9 = document.createElement("th");
    th9.innerHTML = "PUNTI";
    tr2.appendChild(th9);

    tb2.appendChild(tr2);

    for (let i = 0; i < team.length; i++) {
        let tr1 = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = team[i].Team;
        tr1.appendChild(td1);
        
        let td2 = document.createElement("td");
        td2.innerHTML = team[i].Podi;
        tr1.appendChild(td2);
        
        let td3 = document.createElement("td");
        td3.innerHTML = team[i].Vittorie;
        tr1.appendChild(td3);
        
        let td4 = document.createElement("td");
        td4.innerHTML = team[i].Punti;
        tr1.appendChild(td4);
        
        tb2.appendChild(tr1);
    }
    sectTabella2.appendChild(tb2);
}

function ordinaPunti(){
    
    for (let i = 0; i < piloti.length - 1; i++) {
        for (let j = 0; j < piloti.length - 1 - i; j++) {
            if (parseInt(piloti[j].Punti) < parseInt(piloti[j + 1].Punti)) {
                let temp = piloti[j];
                piloti[j] = piloti[j + 1];
                piloti[j + 1] = temp;
            }
        }
    }

    for (let i = 0; i < team.length - 1; i++) {
        for (let j = 0; j < team.length - 1 - i; j++) {
            if (parseInt(team[j].Punti) < parseInt(team[j + 1].Punti)) {
                let temp = team[j];
                team[j] = team[j + 1];
                team[j + 1] = temp;
            }
        }
    }

    creaTabella()
}