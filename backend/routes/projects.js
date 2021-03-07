var express = require('express');
var router = express.Router();
const fetchMetaData = require('meta-fetcher');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  let links = [
    {
      link: 'https://github.com/arunkarri/React-COVID-Dashboard',
      image: 'https://user-images.githubusercontent.com/14010423/110236538-541f7a80-7f5c-11eb-8769-b576fe61374e.png',
    },
    {
      link: 'https://github.com/arunkarri/Student-Mentor-Frontend',
      image: 'https://user-images.githubusercontent.com/14010423/110236591-93e66200-7f5c-11eb-816d-f4394cfb7f22.png',
    },
    {
      link: 'https://github.com/arunkarri/Pizza-Hackathon',
      image: 'https://user-images.githubusercontent.com/14010423/110235577-cdb46a00-7f56-11eb-84a6-5f217012f765.png',
    },
    {
      link: 'https://github.com/arunkarri/beer-punk',
      image: 'https://user-images.githubusercontent.com/14010423/110234717-0aca2d80-7f52-11eb-9369-bc78eb55626a.png',
    },
    {
      link: 'https://github.com/arunkarri/blog-design-bootstrap',
      image: 'https://user-images.githubusercontent.com/14010423/110236804-dfe5d680-7f5d-11eb-97ed-478b4f57fbdb.png',
    },
    {
      link: 'https://github.com/arunkarri/promises-xmlhttp',
      image: 'https://user-images.githubusercontent.com/14010423/110236809-e7a57b00-7f5d-11eb-9819-ee62b8d75e7c.png',
    },
    {
      link: 'https://github.com/arunkarri/newspaper-bootstrap',
      image: 'https://user-images.githubusercontent.com/14010423/110236704-4e766480-7f5d-11eb-84be-dcee079db791.png',
    },
    {
      link: 'https://github.com/arunkarri/recipe-search-project',
      image: 'https://user-images.githubusercontent.com/14010423/110236831-0d328480-7f5e-11eb-96ba-fadd6cee4916.png',
    },
    {
      link: 'https://github.com/arunkarri/countries-weather',
      image: 'https://user-images.githubusercontent.com/14010423/110236840-16bbec80-7f5e-11eb-8e9d-9052e7bb4eb4.png',
    },
    {
      link: 'https://github.com/arunkarri/The-Cat-API',
      image: 'https://user-images.githubusercontent.com/14010423/110236853-2dfada00-7f5e-11eb-8718-87edef2d2e1a.png',
    },
    {
      link: 'https://github.com/arunkarri/Forgot-Password',
      image: 'https://user-images.githubusercontent.com/14010423/110236612-bb3d2f00-7f5c-11eb-8f8b-93b183edb13e.png',
    },
    {
      link: 'https://github.com/arunkarri/React-Ticket-Management',
      image: 'https://user-images.githubusercontent.com/14010423/110236504-2cc8ad80-7f5c-11eb-8e92-d1bab2c65414.png',
    },
    {
      link: 'https://github.com/arunkarri/Get-Bank-Details-By-IFSC',
      image: 'https://user-images.githubusercontent.com/14010423/110236069-d5c1d900-7f59-11eb-9e18-efe18b16aba7.png',
    },
    {
      link: 'https://github.com/arunkarri/Space-Flight-News',
      image: 'https://user-images.githubusercontent.com/14010423/110236099-0144c380-7f5a-11eb-815c-259956401eb9.png',
    },
    {
      link: 'https://github.com/arunkarri/random-fox-generator',
      image: 'https://user-images.githubusercontent.com/14010423/110236137-33eebc00-7f5a-11eb-8a58-b21cbfc86252.png',
    },
    {
      link: 'https://github.com/arunkarri/resume-react',
      image: 'https://user-images.githubusercontent.com/14010423/110236183-6698b480-7f5a-11eb-8f77-08684d12a098.png',
    },
    {
      link: 'https://github.com/arunkarri/React-Counter-Todo',
      image: 'https://user-images.githubusercontent.com/14010423/110236422-c9d71680-7f5b-11eb-8787-33e0779d5277.png',
    },
    {
      link: 'https://github.com/arunkarri/React-search-and-pagination',
      image: 'https://user-images.githubusercontent.com/14010423/110236447-e7a47b80-7f5b-11eb-8d05-69c13d5db618.png',
    },

    {
      link: 'https://github.com/arunkarri/table-pagination',
      image: 'https://user-images.githubusercontent.com/14010423/110236652-fdff0700-7f5c-11eb-8f07-44352dd04c2e.png',
    },
    {
      link: 'https://github.com/arunkarri/calculator-js-dom',
      image: 'https://user-images.githubusercontent.com/14010423/110236664-12db9a80-7f5d-11eb-9e95-3999c9c95508.png',
    },
    {
      link: 'https://github.com/arunkarri/resume-task-dom',
      image: 'https://user-images.githubusercontent.com/14010423/110236680-34d51d00-7f5d-11eb-904e-17e043d4c088.png',
    },
    {
      link: 'https://github.com/arunkarri/child-stats',
      image: 'https://user-images.githubusercontent.com/14010423/110236733-82ea2080-7f5d-11eb-88ba-f0c7a172e8ff.png',
    },
    {
      link: 'https://github.com/arunkarri/resume-plain-css',
      image: 'https://user-images.githubusercontent.com/14010423/110236742-939a9680-7f5d-11eb-9679-20778b7a446a.png',
    },
    {
      link: 'https://github.com/arunkarri/pan-card-form',
      image: 'https://user-images.githubusercontent.com/14010423/110236763-ab721a80-7f5d-11eb-8fea-2b5d1b0f7a4e.png',
    },
    {
      link: 'https://github.com/arunkarri/form-data-task',
      image: 'https://user-images.githubusercontent.com/14010423/110236781-c17fdb00-7f5d-11eb-8ddb-fbab6f609100.png',
    },
    {
      link: 'https://github.com/arunkarri/random-unique-digit-generator',
      image: 'https://user-images.githubusercontent.com/14010423/110236789-cb094300-7f5d-11eb-95a6-ca86e6a8f8fd.png',
    },
    {
      link: 'https://github.com/arunkarri/kaprekar-generator',
      image: 'https://user-images.githubusercontent.com/14010423/110236794-d6f50500-7f5d-11eb-83db-4c4a3624c53d.png',
    },
    
    {
      link: 'https://github.com/arunkarri/promise-chaining',
      image: 'https://user-images.githubusercontent.com/14010423/110236818-f68c2d80-7f5d-11eb-9aa9-47d2edd04fcc.png',
    },
    {
      link: 'https://github.com/arunkarri/Callback-Hell',
      image: 'https://user-images.githubusercontent.com/14010423/110236824-03108600-7f5e-11eb-8162-7b9b247ce29b.png',
    },
  ];
  for await (const contents of links.map(async (data, index) => {
    let result = await fetchMetaData(data.link);
    data.title = result.basic_metadata.title;
    data.description = result.opengraph['og:description'];
    return data;
  }));
  res.json(links);
});

module.exports = router;
