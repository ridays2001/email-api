import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import randomString from './randomString';

import verification from '../templates/verification';
import resetPw from '../templates/resetPw';

export const verifyMail = async (email: string, username: string) => {
	const subject = `Email Verification - ${username}`;
	const code = randomString();
	const link = `${process.env.URL}/verify?username=${username}&code=${encodeURIComponent(code)}`;
	const text = `Hello ${username},\nYour verification code is ${code}, or follow the link -\n${link}`;
	const html = verification(username, code, link);
	await sendMail(email, subject, text, html);
	return code;
};

export const resetMail = async (email: string, username: string) => {
	const subject = `Reset Password - ${username}`;
	const code = randomString();
	const link = `${process.env.URL}/reset-pwd/${username}/${code}`;
	const text = `Hello ${username},\nPlease copy paste this link into your browser to reset your password -\n${link}`;
	const html = resetPw(username, link);
	await sendMail(email, subject, text, html);
	return code;
};

const sendMail = async (email: string, subject: string, text: string, html: string) => {
	const id = process.env.ClientID as string;
	const secret = process.env.ClientSecret as string;
	const refToken = process.env.RefreshToken as string;
	const mail = process.env.Mail as string;

	const { OAuth2 } = google.auth;
	const client = new OAuth2({
		clientId: id,
		clientSecret: secret,
		redirectUri: 'https://developers.google.com/oauthplayground'
	});
	client.setCredentials({ refresh_token: refToken });
	const token: unknown = client.getAccessToken();

	const smtp = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: mail,
			clientId: id,
			clientSecret: secret,
			accessToken: token as string,
			refreshToken: refToken
		},
		tls: {
			rejectUnauthorized: false
		}
	});
	smtp.sendMail(
		{
			from: {
				name: 'Riday Shah',
				address: mail
			},
			to: email,
			subject,
			text,
			html
		},
		(err, info) => {
			console.log(err ?? info.accepted);
			smtp.close();
		}
	);
};
