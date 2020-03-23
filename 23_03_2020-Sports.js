// dans un premier temps je fais un jeu de 3 données
db.sports.insertOne({
  bestTeam: "France",
  bestPlayer: "Nicolas",
  title: "Handball",
  requireTeams: "yes"
});
db.sports.insertOne({
  bestTeam: "France",
  bestPlayer: "Mbappe",
  title: "Foot",
  requireTeams: "yes"
});
db.sports.insertOne({
  bestTeam: "France",
  bestPlayer: "John",
  title: "Tennis",
  requireTeams: "no"
});

// ici j'update tous les documents qui ont besoins d'une equipe et je créer un champ minPlayer avec une valeure de 10
db.sports.updateMany({ requireTeams: "yes" }, { $set: { minPlayer: 10 } });

// ici j'ajoute 10 à la valeure dans minPlayer
db.sports.updateMany({ requireTeams: "yes" }, { $inc: { minPlayer: +10 } });

// ici je créer un tableau team qui vas contenir tous les joueurs
db.sports.updateMany({ requireTeams: "yes" }, { $set: { team: [] } });

// et j'ajoute les joueurs ici
db.sports.updateOne(
  { requireTeams: "yes" },
  { $push: { team: { joueur: "moi" } } }
);
db.sports.updateOne(
  { requireTeams: "yes" },
  { $push: { team: { joueur: "toi" } } }
);
db.sports.updateOne(
  { requireTeams: "yes" },
  { $push: { team: { joueur: "vous" } } }
);

// fin

db.sports.updateMany(
  { requireTeams: "yes" },
  { $set: { "team.$[].isCaptain": true } }
);
