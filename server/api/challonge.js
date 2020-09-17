import axios from 'axios';
import express from 'express';

const router = express.Router();
const USERNAME = process.env.CHALLONGE_USERNAME || 'PyroticBlaziken';
const API_KEY = process.env.CHALLONGE_API_KEY || 'INVALID_API_KEY';

router.get('/:tournamentId', (req, res) => {
  let { tournamentId } = req.params;
  axios.get(`https://${USERNAME}:${API_KEY}@api.challonge.com/v1/tournaments/${tournamentId}.json`)
    .then(response => {
      tournament = response.data.tournament;
      lastPull = currentTime;
      res.send(tournament);
    }).catch(err => res.status(500).send(err));
});

router.get('/:tournamentId/participants', (req, res) => {
  let { tournamentId } = req.params;
  axios.get(`https://${USERNAME}:${API_KEY}@api.challonge.com/v1/tournaments/${tournamentId}/participants.json`)
    .then(response => {
      tournament = response.data.tournament;
      lastPull = currentTime;
      res.send(tournament);
    }).catch(err => res.status(500).send(err));
});

router.get('/:tournamentId/matches', (req, res) => {
  let { tournamentId } = req.params;
  axios.get(`https://${USERNAME}:${API_KEY}@api.challonge.com/v1/tournaments/${tournamentId}/matches.json`)
    .then(response => {
      tournament = response.data.tournament;
      lastPull = currentTime;
      res.send(tournament);
    }).catch(err => res.status(500).send(err));
});

export default router;
