import axios from 'axios';
import express from 'express';

const router = express.Router();
let lastPull = 0;
let refreshPeriod = process.env.REFRESH_PERIOD || 300000; // 5 minutes or 5 * 60 * 1000;
let teams = new Map();
let teamDonations = new Map();
let teamDonors = new Map();

router.get('/:teamId/donors', (req, res) => {
  let { teamId } = req.params;

  axios.get(`https://www.extra-life.org/api/teams/${teamId}/donors`)
    .then(response => {
      let teamDonors = response.data;
      res.send(teamDonors);
    }).catch(err => res.status(500).send(err));
});

router.get('/:teamId/donations', (req, res) => {
  let { teamId } = req.params;

  axios.get(`https://www.extra-life.org/api/teams/${teamId}/donations`)
    .then(response => {
      let teamDonations = response.data;
      res.send(teamDonations);
    }).catch(err => res.status(500).send(err));
});

router.get('/:teamId', (req, res) => {
  let { teamId } = req.params;

  axios.get(`https://www.extra-life.org/api/teams/${teamId}`)
    .then(response => {
      let team = response.data;
      res.send(team);
    }).catch(err => res.status(500).send(err));
});

export default router;
