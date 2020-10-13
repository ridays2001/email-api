# Email API

This is a basic api made using express and typescript to send emails. This api uses Gmail OAuth2 method to login and
send emails via nodemailer.

### Get Email API Credentials:

-   Go to [Google Developer Console ↗](https://console.cloud.google.com/).
-   Click on **Select a project** (there would be a dropdown) button around the top left corner. <br/>
    ![Image](/img/1.png)
-   You should see a small modal show up.
-   Click on **New Project** button around the top right corner of the modal.
-   Fill in the details as you please and click on **Create** button.
-   You will be redirected to the console dashboard. Wait for a minute or so.
-   If you aren't already in your newly created project, click on the select project dropdown and select your newly
    created project.
-   Open the navigation menu (hamburger menu at the top left corner).
-   Select the **Credentials** under **APIs & Services** section. <br /> ![Image](/img/2.png)
-   Click on **CREATE CREDENTIALS** button and select **OAuth Client ID**. <br /> ![Image](/img/3.png)
-   Select **Web Application** as the type of the application. <br /> ![Image](/img/4.png)
-   You will be prompted to configure your OAuth2 consent screen. Just fill in some basic details there and you will be
    done.
-   You can use whatever names you want. They do not matter.
-   Under the **Authorized Redirect URIs** section, add these 3 links - `https://developers.google.com/oauthplayground`,
    `https://developers.google.com/oauthplayground/`, and `https://mail.google.com/`. (Actually, you need only the first
    one. I was having some issues and adding the other 2 fixed it for me). <br /> ![Image](/img/5.png)
-   Press **Create** button and it should be created.
-   You would see a small modal with your Client ID and Client Secret. Save them somewhere safe. <br />
    ![Image](/img/6.png)
-   If you clicked out of the modal before saving your credentials, you can always get them back by clicking on your app
    name under **OAuth 2.0 Client IDs**. <br /> ![Image](/img/7.png)
-   Now, go to [Google OAuth Playground ↗](https://developers.google.com/oauthplayground/).
-   Click on the Gear Icon around the top right corner.
-   Select **Use your own OAuth credentials**.
-   Fill in your credentials that you copied a few mins ago. <br /> ![Image](/img/8.png)
-   Now, scroll through the left **Select & authorize APIs** section, look for **Gmail API v1**, and select the first
    option `https://mail.google.com/`. <br /> ![Image](/img/9.png)
-   Click on the blue **Authorize APIs** option.
-   You may see an interim account selection screen if you're logged in to multiple Gmail accounts. Select the account
    from which you want to send the emails.
-   You should get a scary looking screen that says that the app you're using isn't verified yet. That's because you
    literally just made it. It's your own app, so you don't need to worry. Click on **Advanced** > **Go to `<Your App>`
    (unsafe)**.
-   You will be redirected to the OAuth consent screen.
-   Click on the allow button to grant the permissions. <br /> ![Image](/img/10.png)
-   You should be redirected back to the playground.
-   In the left section, you should see an authorization code filled in. Click on **Exchange authorization code for
    tokens** button and save the credentials that you see on the screen somewhere safe. <br /> ![Image](/img/11.png)
-   Now you have all the credentials required for your project.
-   Fill them in the `.env` file as indicated by the `.env.example` file.
-   The `PASSWORD` field is the password for your api.
-   Open your terminal to this project folder and type `npm start` to start the api server.
