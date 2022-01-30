import express from 'express'
import { completedData } from './tempDb/completedData';
import { experienceData } from './tempDb/experienceData';
import { inProgressData } from './tempDb/inProgressData';
import { interestsData } from './tempDb/interestsData';
import { whatsNextData } from './tempDb/whatsNextData';
import cors from "cors"


// TODO: env handling
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/portfolio/in-progress', (err, res) => {
  console.log("Getting In Progress Data");
	res.status(200);
	res.json(inProgressData);
	res.end();
});

app.get('/portfolio/whats-next', (err, res) => {
  console.log("Getting Whats Next Data");
	res.status(200);
	res.json(whatsNextData);
	res.end();
});

app.get('/portfolio/experience', (err, res) => {
  console.log("Getting Experience Data");
	res.status(200);
	res.json(experienceData);
	res.end();
});

app.get('/portfolio/interests', (err, res) => {
  console.log("Getting Interests Data");
	res.status(200);
	res.json(interestsData);
	res.end();
});

app.get('/portfolio/completed', (err, res) => {
  console.log("Getting Completed Data");
	res.status(200);
	res.json(completedData);
	res.end();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});