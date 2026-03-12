require('dotenv').config();
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'secret-key', // Use a real secret in production
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Passport Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // In a real app, you'd save the user to a database here
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    const user = req.user;
    const name = encodeURIComponent(user.displayName);
    const email = encodeURIComponent(user.emails[0].value);
    const picture = encodeURIComponent(user.photos[0].value);
    
    // Redirect to frontend dashboard with user data
    res.redirect(`http://localhost:3000/dashboard.html?name=${name}&email=${email}&picture=${picture}`);
  }
);

app.get('/api/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});

app.get('/auth/logout', (req, res) => {
    req.logout(() => {
        res.redirect('http://localhost:3000/index.html');
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Make sure to set your GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in the .env file.`);
});
