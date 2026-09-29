```javascript
/* =========================================
   ACADÉMIE FOOTBALL
   APPLICATION GITHUB
========================================= */


/* =========================================
   DONNÉES
========================================= */

let players =
    JSON.parse(localStorage.getItem("players")) || [];

let trainings =
    JSON.parse(localStorage.getItem("trainings")) || [];

let matches =
    JSON.parse(localStorage.getItem("matches")) || [];


/* =========================================
   SAUVEGARDE
========================================= */

function saveData(){

    localStorage.setItem(
        "players",
        JSON.stringify(players)
    );

    localStorage.setItem(
        "trainings",
        JSON.stringify(trainings)
    );

    localStorage.setItem(
        "matches",
        JSON.stringify(matches)
    );
}


/* =========================================
   SIDEBAR
========================================= */

function toggleSidebar(){

    const sidebar =
        document.getElementById("sidebar");

    if(sidebar){

        sidebar.classList.toggle("show");

    }

}


/* =========================================
   MODE SOMBRE
========================================= */

function toggleTheme(){

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );

}


if(localStorage.getItem("darkMode") === "true"){

    document.body.classList.add("dark");

}


/* =========================================
   DÉCONNEXION
========================================= */

function logout(){

    if(confirm("Voulez-vous vous déconnecter ?")){

        alert(
            "Déconnexion effectuée."
        );

    }

}


/* =========================================
   JOUEURS
========================================= */

function openPlayerModal(){

    document
        .getElementById("playerModal")
        .classList.add("show");

}


function closePlayerModal(){

    document
        .getElementById("playerModal")
        .classList.remove("show");

}


const playerForm =
    document.getElementById("playerForm");


if(playerForm){

    playerForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            const player = {

                id:Date.now(),

                nom:
                    document
                    .getElementById("playerNom")
                    .value,

                prenom:
                    document
                    .getElementById("playerPrenom")
                    .value,

                date:
                    document
                    .getElementById("playerDate")
                    .value,

                poste:
                    document
                    .getElementById("playerPoste")
                    .value,

                numero:
                    document
                    .getElementById("playerNumero")
                    .value,

                categorie:
                    document
                    .getElementById("playerCategorie")
                    .value

            };

            players.push(player);

            saveData();

            displayPlayers();

            closePlayerModal();

            playerForm.reset();

        }
    );

}


function displayPlayers(){

    const table =
        document.getElementById("playersTable");

    if(!table) return;

    const searchInput =
        document.getElementById("searchPlayer");

    const search =
        searchInput
        ? searchInput.value.toLowerCase()
        : "";

    table.innerHTML = "";

    const filtered =
        players.filter(player => {

            const fullname =
                `${player.nom} ${player.prenom}`
                .toLowerCase();

            return fullname.includes(search);

        });


    filtered.forEach(player => {

        const row =
            document.createElement("tr");

        row.innerHTML = `

            <td>
                <strong>
                    ${player.prenom}
                    ${player.nom}
                </strong>
            </td>

            <td>
                ${player.poste}
            </td>

            <td>
                ${player.numero || "-"}
            </td>

            <td>
                ${player.categorie}
            </td>

            <td>
                ${player.date || "-"}
            </td>

            <td>
                <span class="status">
                    Actif
                </span>
            </td>

            <td>

                <button
                    class="delete-btn"
                    onclick="deletePlayer(${player.id})">

                    🗑️

                </button>

            </td>

        `;

        table.appendChild(row);

    });

}


function deletePlayer(id){

    if(
        confirm(
            "Supprimer définitivement ce joueur ?"
        )
    ){

        players =
            players.filter(
                player => player.id !== id
            );

        saveData();

        displayPlayers();

    }

}


/* =========================================
   ENTRAÎNEMENTS
========================================= */

function openTrainingModal(){

    document
        .getElementById("trainingModal")
        .classList.add("show");

}


function closeTrainingModal(){

    document
        .getElementById("trainingModal")
        .classList.remove("show");

}


const trainingForm =
    document.getElementById("trainingForm");


if(trainingForm){

    trainingForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            const training = {

                id:Date.now(),

                date:
                    document
                    .getElementById("trainingDate")
                    .value,

                heure:
                    document
                    .getElementById("trainingTime")
                    .value,

                lieu:
                    document
                    .getElementById("trainingLieu")
                    .value,

                type:
                    document
                    .getElementById("trainingType")
                    .value,

                programme:
                    document
                    .getElementById("trainingProgramme")
                    .value

            };

            trainings.push(training);

            saveData();

            displayTrainings();

            closeTrainingModal();

            trainingForm.reset();

        }
    );

}


function displayTrainings(){

    const container =
        document.getElementById("trainingList");

    if(!container) return;

    container.innerHTML = "";

    trainings.forEach(training => {

        const card =
            document.createElement("div");

        card.className =
            "training-card";

        card.innerHTML = `

            <div class="training-date">
                📅 ${training.date}
            </div>

            <h3>
                ${training.type}
            </h3>

            <p>
                ⏰ ${training.heure}
            </p>

            <p>
                📍 ${training.lieu}
            </p>

            <p>
                ${training.programme || "Aucun programme"}
            </p>

            <button
                class="delete-btn"
                onclick="deleteTraining(${training.id})">

                Supprimer

            </button>

        `;

        container.appendChild(card);

    });

}


function deleteTraining(id){

    if(confirm("Supprimer cet entraînement ?")){

        trainings =
            trainings.filter(
                training => training.id !== id
            );

        saveData();

        displayTrainings();

    }

}


/* =========================================
   MATCHS
========================================= */

function openMatchModal(){

    document
        .getElementById("matchModal")
        .classList.add("show");

}


function closeMatchModal(){

    document
        .getElementById("matchModal")
        .classList.remove("show");

}


const matchForm =
    document.getElementById("matchForm");


if(matchForm){

    matchForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            const match = {

                id:Date.now(),

                opponent:
                    document
                    .getElementById("matchOpponent")
                    .value,

                date:
                    document
                    .getElementById("matchDate")
                    .value,

                time:
                    document
                    .getElementById("matchTime")
                    .value,

                competition:
                    document
                    .getElementById("matchCompetition")
                    .value,

                lieu:
                    document
                    .getElementById("matchLieu")
                    .value,

                goals:
                    Number(
                        document
                        .getElementById("matchGoals")
                        .value
                    ),

                opponentGoals:
                    Number(
                        document
                        .getElementById("matchOpponentGoals")
                        .value
                    )

            };

            matches.push(match);

            saveData();

            displayMatches();

            closeMatchModal();

            matchForm.reset();

        }
    );

}


function displayMatches(){

    const container =
        document.getElementById("matchList");

    if(!container) return;

    container.innerHTML = "";

    matches.forEach(match => {

        let result = "N";

        if(match.goals > match.opponentGoals){

            result = "V";

        }else if(
            match.goals < match.opponentGoals
        ){

            result = "D";

        }


        const card =
            document.createElement("div");

        card.className =
            "match-card";

        card.innerHTML = `

            <div class="match-top">

                <span>
                    ${match.date}
                </span>

                <span class="result ${result}">
                    ${result}
                </span>

            </div>

            <h2>
                Académie
                <strong>${match.goals}</strong>
                -
                <strong>${match.opponentGoals}</strong>
                ${match.opponent}
            </h2>

            <p>
                🏆 ${match.competition || "Match amical"}
            </p>

            <p>
                📍 ${match.lieu || "Lieu non défini"}
            </p>

            <button
                class="delete-btn"
                onclick="deleteMatch(${match.id})">

                Supprimer

            </button>

        `;

        container.appendChild(card);

    });

}


function deleteMatch(id){

    if(confirm("Supprimer ce match ?")){

        matches =
            matches.filter(
                match => match.id !== id
            );

        saveData();

        displayMatches();

    }

}


/* =========================================
   DASHBOARD
========================================= */

function loadDashboard(){

    const playersElement =
        document.getElementById("totalJoueurs");

    if(!playersElement) return;

    document.getElementById(
        "totalJoueurs"
    ).textContent = players.length;


    document.getElementById(
        "totalEntrainements"
    ).textContent = trainings.length;


    document.getElementById(
        "totalMatchs"
    ).textContent = matches.length;


    let goals = 0;

    matches.forEach(match => {

        goals += Number(match.goals);

    });


    document.getElementById(
        "totalButs"
    ).textContent = goals;


    const table =
        document.getElementById(
            "dashboardMatches"
        );

    if(!table) return;

    table.innerHTML = "";


    matches
        .slice(-5)
        .reverse()
        .forEach(match => {

            let result = "N";

            if(match.goals > match.opponentGoals)
                result = "V";

            if(match.goals < match.opponentGoals)
                result = "D";


            table.innerHTML += `

                <tr>

                    <td>
                        ${match.date}
                    </td>

                    <td>
                        ${match.opponent}
                    </td>

                    <td>
                        ${match.lieu || "-"}
                    </td>

                    <td>
                        <strong>
                            ${match.goals}
                            -
                            ${match.opponentGoals}
                        </strong>
                    </td>

                    <td>
                        <span class="result ${result}">
                            ${result}
                        </span>
                    </td>

                </tr>

            `;

        });

}


/* =========================================
   STATISTIQUES
========================================= */

function displayStatistics(){

    const table =
        document.getElementById(
            "statsTable"
        );

    if(!table) return;

    table.innerHTML = "";

    players.forEach(player => {

        table.innerHTML += `

            <tr>

                <td>
                    <strong>
                        ${player.prenom}
                        ${player.nom}
                    </strong>
                </td>

                <td>0</td>

                <td>0</td>

                <td>0</td>

                <td>0</td>

                <td>0</td>

            </tr>

        `;

    });

}
```
