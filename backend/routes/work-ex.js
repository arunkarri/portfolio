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
        'Build end to end modules using Angular 7.',
        'Develop live mobile applications for cross platforms using Flutter.',
        'Work in multiple applications, while working on POCs to explore new functionalities for upcoming projects and process improvements',
        'Developed chatbot to minimise contact us functionality in the mobile apps.',
        'Write and publish blogs on any topic and contribute to the community.',
        'Built a CICD pipeline using Jenkins and fastlane for Android and iOS ',
        'Work closely with team to understand the functionality and come up with the best approach to code with respect to overall performance.',
        'Follow coding standards and design patterns while working on the projects.',
        'Actively participate in peer code reviews',
        'Mentor teammates during development.',
      ],
    },

    {
      company: 'Verizon India',
      title: 'Analyst System Dev',
      tenure: '2017-2019',
      roles: [
        'Work in detailed design, requirement gathering for the Web application project, and implementation of business requirements.',
        'Work with the team and help them to deliver the project within the deadlines.',
        'Work with process owner to make them understand the complexities(if any) that are roadblocks for the development.',
        'Work includes compiling and analyzing data, creating reports, providing information and/or recommendations regarding function-specific policies; tracking of processes & activities.',
        'Work on automating processes using Automation Anywhere, saving 100s of man-hours.',
        'Lead the team in standardizing the web design and procedures for better UX. Involve in smaller projects or phases of a larger project with accountability for tasks assigned; providing project updates or timelines as needed.',
        'Work on POCs to provide an opportunity for the management to evaluate a new tool/technology.',
        'Work in implementation of business requirements, defects resolution. Support application maintenance releases and deliverables.',
      ],
    },
    {
      company: 'Verizon India',
      title: 'Software Engineer',
      tenure: '2015-2017',
      roles: [
        'Work in implementation of business requirements.',
        'Deliver project within deadlines',
        'Follow the standards for the web design and procedures for better UX.',
        'Support application maintenance releases and deliverables.',
        'Work on POCs to provide an opportunity for the management to evaluate a new tool/technology.',
        'Work in implementation of business requirements, defects resolution.',
      ],
    },
  ];
  res.json(response);
});

module.exports = router;
