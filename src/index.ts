// Configure environment variables from .env file.
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import logger from 'morgan';
import mail from './mail';

import express from 'express';
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1);

type RequestBody = {
	email: string;
	subject: string;
	text: string;
	html: string;
};
app.post('/', async (req, res) => {
	if (req.headers.authorization !== process.env.PASSWORD) return res.status(500).end('Error: Access blocked!');
	const { email, subject, text, html }: RequestBody = req.body;
	mail(email, subject, text, html);
	res.end('Email Sent!');
});

const port = Number(process.env.PORT) ?? 80;
app.listen(port, () => console.log(`Listening on http://localhost${port === 80 ? '' : port}/`));
