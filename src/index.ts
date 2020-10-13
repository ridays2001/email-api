// Configure environment variables from .env file.
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import logger from 'morgan';
import { verifyMail, resetMail } from './util/mails';

import express from 'express';
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1);

type RequestBody = {
	email: string;
	username: string;
	type: 'verify' | 'reset';
};
app.post('/', async (req, res) => {
	if (req.headers.authorization !== process.env.PASSWORD) return res.status(500).end('Error: Access blocked!');
	const { email, username, type } = req.body as RequestBody;
	if (type !== 'verify' && type !== 'reset') return res.status(500).end('Error: Invalid email type!');
	const code = type === 'verify' ? await verifyMail(email, username) : resetMail(email, username);
	res.json({ email, code });
});

const port = Number(process.env.PORT) ?? 80;
app.listen(port, () => console.log(`Listening on http://localhost${port === 80 ? '' : port}/`));
