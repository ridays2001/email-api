const html = (name: string, code: string, link: string) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Email Verification</title>
		<style>
			body {
				font-size: 16px;
			}
			#container {
				background-color: #fc8eac;
				background: url('https://i.ibb.co/8xnWhLD/color-splash.jpg');
				background-repeat: no-repeat;
				background-size: cover;
				padding-top: 3em;
				padding-bottom: 4em;
			}
			#main {
				text-align: center;
				background-color: #f3f3f9;
				width: 80%;
				margin: 0 auto;
				margin-top: 3.5em;
				margin-bottom: 3em;
				padding: 2em 1.5em;
				border-radius: 21px;
			}
			#text {
				width: 85%;
				margin: 0 auto;
			}
			#code {
				width: 75%;
				margin: 0 auto;
				margin-top: 0.75em;
				margin-bottom: 0.75em;
				padding: 0.75em 1em;
				font-size: 20px;
				font-weight: 500;
				background-color: #3d3a41;
				color: #ffffff;
				border-radius: 10px;
			}
			hr {
				margin-top: 2em;
				border: 1.5px solid #3d3a41;
				background-color: #3d3a41;
			}
			#footer {
				width: 85%;
				text-align: justify;
				margin: 0 auto;
			}
			@media screen and (min-width: 768px) {
				body {
					font-size: 24px;
				}
				#main {
					width: 60%;
					margin-top: 5em;
				}
				#text {
					width: 65%;
				}
				#code {
					width: 65%;
					font-size: 32px;
					padding: 0.5em 0.25em;
				}
				#footer {
					width: 65%;
				}
			}
		</style>
	</head>
	<body>
		<div id="container">
			<div id="main">
				<div id="text">
					Hello ${name},
					<br />
					Please enter your verification code as shown in the box below:
				</div>
				<div id="code">${code}</div>
				<div>Or, you can click
					<a href='${link}'>here ↗</a>
				</div>
				<div id="footer">
					<hr />
					This is an auto-generated email. If you have any issues, feel free to contact me at
					<a href="mailto:ridayshah2001@gmail.com">ridayshah2001@gmail.com</a>.
				</div>
			</div>
		</div>
	</body>
</html>
`;

export default html;
