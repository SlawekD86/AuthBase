const express = require('express');
const router = express.Router();

function loginCheck(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/no-permission');
}

router.get('/logged', loginCheck, (req, res) => {
  res.render('logged', {
    user: req.user.displayName,
    avatar: req.user.photos[0].value,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', loginCheck, (req, res) => {
  res.render('userProfile');
});

router.get('/profile/settings', loginCheck, (req, res) => {
  res.render('profileSettings');
});

router.get('/logout', (req, res) => {
  res.render('logout');
});

module.exports = router;
