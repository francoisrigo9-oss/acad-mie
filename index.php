```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description"
          content="Application professionnelle de gestion d'académie de football">

    <title>Académie Football | Dashboard</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="app">

    <!-- SIDEBAR -->
    <aside class="sidebar" id="sidebar">

        <div class="brand">
            <div class="brand-logo">⚽</div>

            <div>
                <strong>ACADÉMIE</strong>
                <small>FOOTBALL</small>
            </div>
        </div>

        <nav>

            <a href="index.html" class="active">
                <span>🏠</span> Tableau de bord
            </a>

            <a href="joueurs.html">
                <span>👥</span> Joueurs
            </a>

            <a href="entrainements.html">
                <span>🏃</span> Entraînements
            </a>

            <a href="matchs.html">
                <span>⚽</span> Matchs
            </a>

            <a href="statistiques.html">
                <span>📊</span> Statistiques
            </a>

        </nav>

        <div class="sidebar-bottom">

            <button onclick="toggleTheme()" class="side-button">
                🌙 Mode sombre
            </button>

            <button onclick="logout()" class="side-button danger">
                🚪 Déconnexion
            </button>

        </div>

    </aside>


    <!-- CONTENU -->
    <main class="main">

        <header class="topbar">

            <button class="menu-btn" onclick="toggleSidebar()">
                ☰
            </button>

            <div>
                <h1>Tableau de bord</h1>
                <p>Gestion de votre académie</p>
            </div>

            <div class="user">
                <div class="avatar">A</div>

                <div>
                    <strong>Administrateur</strong>
                    <small>Admin</small>
                </div>
            </div>

        </header>


        <section class="content">

            <!-- BIENVENUE -->
            <div class="welcome">

                <div>
                    <span class="badge">ACADÉMIE</span>

                    <h2>
                        Bienvenue dans votre
                        <span>Académie Football</span>
                    </h2>

                    <p>
                        Gérez vos joueurs, entraînements, matchs et
                        performances depuis une seule plateforme.
                    </p>
                </div>

                <div class="football">
                    ⚽
                </div>

            </div>


            <!-- STATISTIQUES -->
            <div class="cards">

                <div class="card">

                    <div class="card-icon blue">
                        👥
                    </div>

                    <div>
                        <small>Joueurs</small>

                        <strong id="totalJoueurs">
                            0
                        </strong>

                        <span class="positive">
                            Actifs
                        </span>
                    </div>

                </div>


                <div class="card">

                    <div class="card-icon green">
                        🏃
                    </div>

                    <div>
                        <small>Entraînements</small>

                        <strong id="totalEntrainements">
                            0
                        </strong>

                        <span class="positive">
                            programmés
                        </span>
                    </div>

                </div>


                <div class="card">

                    <div class="card-icon orange">
                        ⚽
                    </div>

                    <div>
                        <small>Matchs</small>

                        <strong id="totalMatchs">
                            0
                        </strong>

                        <span class="positive">
                            enregistrés
                        </span>
                    </div>

                </div>


                <div class="card">

                    <div class="card-icon purple">
                        🥅
                    </div>

                    <div>
                        <small>Buts</small>

                        <strong id="totalButs">
                            0
                        </strong>

                        <span class="positive">
                            total
                        </span>
                    </div>

                </div>

            </div>


            <!-- ACTIONS -->
            <div class="section-title">

                <div>
                    <h2>Actions rapides</h2>
                    <p>Accédez rapidement aux fonctions principales.</p>
                </div>

            </div>


            <div class="quick-grid">

                <a href="joueurs.html" class="quick">
                    <div>👤</div>
                    <strong>Ajouter un joueur</strong>
                    <span>Créer une nouvelle fiche joueur</span>
                </a>

                <a href="entrainements.html" class="quick">
                    <div>🏃</div>
                    <strong>Entraînement</strong>
                    <span>Programmer une séance</span>
                </a>

                <a href="matchs.html" class="quick">
                    <div>⚽</div>
                    <strong>Nouveau match</strong>
                    <span>Ajouter une rencontre</span>
                </a>

                <a href="statistiques.html" class="quick">
                    <div>📊</div>
                    <strong>Statistiques</strong>
                    <span>Voir les performances</span>
                </a>

            </div>


            <!-- DERNIERS MATCHS -->
            <div class="section-title">

                <div>
                    <h2>Derniers matchs</h2>
                    <p>Résumé des rencontres enregistrées.</p>
                </div>

                <a href="matchs.html" class="view">
                    Voir tout →
                </a>

            </div>


            <div class="table-box">

                <table>

                    <thead>

                        <tr>
                            <th>Date</th>
                            <th>Adversaire</th>
                            <th>Lieu</th>
                            <th>Score</th>
                            <th>Résultat</th>
                        </tr>

                    </thead>

                    <tbody id="dashboardMatches">

                    </tbody>

                </table>

            </div>

        </section>

    </main>

</div>

<script src="app.js"></script>

<script>

    loadDashboard();

</script>

</body>
</html>
```
