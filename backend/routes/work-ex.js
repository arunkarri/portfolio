var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const response = [
    {
      company: 'DLT Labs',
      title: 'Senior Software Engineer',
      tenure: '2019-Current',
      roles: [
        'Expertise in Building web applications using React.js, Bootstrap and HTML.',
        'Experienced in developing full-stack web applications using React, Node, Express framework and MongoDB.',
        'Exposure to various security mechanisms such as JWT, bcrypt, dotenv, etc.',
        'Hands-on experience on Mongo atlas and MongoDB package.',
        'Led the entire development effort of Asset Track and DL Certify Projects at DLT Labs.',
        'Developed live mobile applications for cross platforms using Flutter.',
        'Work in multiple applications, while working on POCs to explore new functionalities for upcoming projects and process improvements',
        'Built a CICD pipeline and Sonarqube scanner for Android and iOS ',
        'Hired, trained and mentored a development team of 4 members.',
        'Suggested and developed innovative solutions such as IoT and Chatbots for existing applications.',
      ],
    },

    {
      company: 'Verizon India',
      title: 'Analyst System Dev / Software Engineer',
      tenure: '2015-2019',
      roles: [
        'Worked in detailed design, requirement gathering for the Web application project, and implementation of business requirements.',
        'Worked with the team and help them to deliver the project within the deadlines.',
        'Worked with process owners to make them understand the roadblocks.',
        'Built Node Apis for web applications.',
        'Automated various processes using Automation Anywhere, saving 100s of man-hours.',
        'Led the team in standardizing the web design and procedures for better UX.',
        'Involve in smaller projects or phases of a larger project with accountability for tasks assigned; providing project updates or timelines as needed.',
        'Worked in implementation of business requirements, defects resolution.Support application maintenance releases and deliverables.',
      ],
    },
  ];
  res.json(response);
});

module.exports = router;
