import axios from 'axios';
import express from 'express';

const router = express.Router();
const API_KEY = process.env.CHALLONGE_API_KEY || 'INVALID_API_KEY';

let lastPull = 0;
let refreshPeriod = process.env.REFRESH_PERIOD || 300000;
let tournament;

router.get('/show', (req, res) => {
  let currentTime = new Date().getTime();
  let timeDiff = currentTime - lastPull;
  if (timeDiff >= refreshPeriod || !tournament) {
    axios.get(`https://PyroticBlaziken:${API_KEY}@api.challonge.com/v1/tournaments/3e35s7fo.json`)
      .then(response => {
        tournament = response.data.tournament;
        lastPull = currentTime;
        res.send(tournament);
      }).catch(err => res.status(500).send(err));
  } else {
    res.send(tournament);
  }
});

router.get('/buster', (req, res) => {
  res.send('wolf!')
});

export default router;
