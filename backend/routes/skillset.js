var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const response = [
    {
      category: 'Frontend',
      technologies: [
        { technology: 'Angular', logo: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg' },
        { technology: 'React JS', logo: 'https://www.itechinsiders.com/wp-content/uploads/2019/01/1_okufk5mMDbTfqA5iS_rldQ.png' },
        { technology: 'Javascript', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWITl81P_IpGP6I5M_6um_sLIeXgbdoXjrkw&usqp=CAU' },
        { technology: 'HTML', logo: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png' },
        { technology: 'CSS', logo: 'https://i.pinimg.com/originals/3c/2a/ad/3c2aadf4b1aeffa2bc631eb2037a2496.jpg' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { technology: 'Node JS', logo: 'https://coralogix.com/wp-content/uploads/2018/04/Coralogix-Nodejs-integration.jpg' },
        { technology: 'Mongo DB', logo: 'https://pbs.twimg.com/profile_images/1234528105819189248/b6F1hk_6.jpg' },
      ],
    },
    {
      category: 'Others',
      technologies: [
        { technology: 'Flutter', logo: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/flutter_icon_130936.png' },
        { technology: 'Automation Anywhere', logo: 'https://pbs.twimg.com/profile_images/1135531319679545349/vvd-voet_400x400.png' },
        { technology: 'Dialogflow', logo: 'https://pbs.twimg.com/profile_images/880147119528476672/S7C-2C6t.jpg' },
        {
          technology: 'Firebase',
          logo:
            'data:image/png;base64,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',
        },
      ],
    },
  ];

  res.json(response);
});

module.exports = router;
