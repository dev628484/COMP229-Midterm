const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// Serve static files (e.g., images, CSS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Array of game objects
let games = [
  { title: 'The Legend of Zelda: Breath of the Wild', genre: 'Adventure', platform: 'Nintendo Switch', year: 2017, developer: 'Nintendo' },
  { title: 'God of War', genre: 'Action', platform: 'PlayStation 4', year: 2018, developer: 'Santa Monica Studio' },
  { title: 'Hollow Knight', genre: 'Metroidvania', platform: 'PC', year: 2017, developer: 'Team Cherry' },
  { title: 'Forza Horizon 5', genre: 'Racing', platform: 'Xbox Series X|S', year: 2021, developer: 'Playground Games' },
  { title: 'Stardew Valley', genre: 'Simulation', platform: 'Nintendo Switch', year: 2016, developer: 'ConcernedApe' },
  { title: 'Batman: Arkham Asylum', genre:'Action', platform: 'Xbox 360', year: '2009', developer: 'Rocksteady Studios' },
  { title: 'Metal Gear Solid 3: Snake Eater', genre:'Stealth', platform: 'Playstation 2', year: '2004', developer: 'Konami' }
];

// Set the port for the server
const PORT = 3000;

// Serve the instructions HTML file (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// API Endpoints

// GET /api/games
app.get('/api/games', (req, res) => {
  res.status(200).json(games);
});

// GET /api/games/filter?genre=[genre name]
app.get('/api/games/filter', (req, res) => {
  const genre = req.query.genre;
  const filteredGames = games.filter(game => game.genre === genre);

  res.status(200).json(filteredGames);
});

// GET /api/games/:id
app.get('/api/games/:id', (req, res) => {
  const id = parseInt(req.params.id);

  res.status(200).json(games[id]);
});

// POST /api/games
app.post('/api/games', (req, res) => {
  const newGame = req.body;
  games.push(newGame);

  res.status(200).json(newGame);
});

// PUT /api/games/:id
app.put('/api/games/:id', (req, res) => {
  const id = parseInt(req.params.id);
  games[id] = req.body;

  res.status(200).json(games[id]);
});

// DELETE /api/games/:id
app.delete('/api/games/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedGame = games.splice(id, 1);

  res.status(200).json(deletedGame);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
