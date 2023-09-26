# PhotoJulik

Portfolio page for photographer made in [React](https://react.dev) with data stored on [Hygraph](https://hygraph.com). Email send via [EmailJS](https://emailjs.com).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Live: [photojulik.pl](https://photojulik.pl)

## .env variables

This app uses `.env` variables:
```
REACT_APP_API_ID = "Hygraph API ID"
REACT_APP_RECAPTCHA_KEY = "Public reCAPTCHAv2 key"
REACT_APP_EMAIL_KEY = "Public EmailJS key"
REACT_APP_EMAIL_SERVICE = "EmailJS service ID"
REACT_APP_EMAIL_TEMPLATE = "EmailJS template ID"
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
