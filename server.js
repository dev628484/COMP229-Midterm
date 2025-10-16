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
// Description: Get all games
// Task: Implement logic to return the full list of games
app.get('/api/games', (req, res) => {
  res.status(200).json(games);
});

// GET /api/games/filter?genre=[genre name]
// Description: Filter games by genre
// Task: Implement logic to return games matching the specified genre
app.get('/api/games/filter', (req, res) => {
  const genre = req.query.genre;
  
  const filteredGames = games.filter(game => game.genre === genre);

  res.status(200).json(filteredGames);
});

// GET /api/games/:id
// Description: Get a specific game by ID
// Task: Implement logic to return a game by its index (ID)
app.get('/api/games/:id', (req, res) => {
  // TODO: Add logic to return a game by its index (ID)
  


  // Don't forget to remove the line below:
  res.status(501).send('Not Implemented');
});

// POST /api/games
// Description: Add a new game
// Task: Implement logic to add a new game to the array
app.post('/api/games', (req, res) => {
  // TODO: Add logic to add a new game to the array
  


  // Don't forget to remove the line below:
  res.status(501).send('Not Implemented');
});

// PUT /api/games/:id
// Description: Update a game by ID
// Task: Implement logic to update a game by its index (ID)
app.put('/api/games/:id', (req, res) => {
  // TODO: Add logic to update a game by its index
  


  // Don't forget to remove the line below:
  res.status(501).send('Not Implemented');
});

// DELETE /api/games/:id
// Description: Remove a game by ID
// Task: Implement logic to remove a game by its index (ID)
app.delete('/api/games/:id', (req, res) => {
  // TODO: Add logic to remove a game by its index
  


  // Don't forget to remove the line below:
  res.status(501).send('Not Implemented');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
