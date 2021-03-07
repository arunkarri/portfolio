var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const response = [
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/arun-kashyap-42a4767a/',
      icon: 'linkedin.png',
    },
    {
      name: 'Github',
      link: 'https://github.com/arunkarri',
      icon: 'github.png',
    },
  ];
  res.json(response);
});

module.exports = router;
