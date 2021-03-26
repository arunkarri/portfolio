var express = require('express');
var router = express.Router();
const fetchMetaData = require('meta-fetcher');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  let links = [
    {
      link: 'https://medium.com/swlh/how-to-build-a-flutter-app-bar-dashboard-in-10-minutes-or-less-621693fe9c5f',
    },
    {
      link: 'https://dltlabs.medium.com/building-chatbots-with-dialogflow-and-flutter-987e13c289e7',
    },
    {
      link: 'https://dltlabs.medium.com/how-to-create-a-toast-notification-in-flutter-easily-aa66d03467a4',
    },
    {
      link: 'https://dltlabs.medium.com/how-to-build-a-flutter-card-list-in-less-than-10-minutes-9839f79a6c08',
    },
    {
      link: 'https://kashyap1049.medium.com/how-to-copy-composite-data-type-by-value-i-javascript-b04e22877984',
    },
    {
      link: 'https://kashyap1049.medium.com/copying-contents-of-primitive-and-non-primitive-data-types-javascript-32b16f7b92b8',
    },
    {
      link: 'https://kashyap1049.medium.com/objects-and-its-internal-representation-in-javascript-540aa32a08c1',
    },
    {
      link: 'https://kashyap1049.medium.com/window-vs-screen-vs-document-in-javascript-e60e07304ba4',
    },
    {
      link: 'https://kashyap1049.medium.com/what-is-the-difference-between-http-1-1-and-http-2-c53d535a398f',
    },
    {
      link: 'https://kashyap1049.medium.com/what-happens-when-we-type-a-url-in-the-address-bar-b6e88f7996cd',
    }
  ];
  for await (const contents of links.map(async (data, index) => {
    let result = await fetchMetaData(data.link);
    console.log(result);
    data.image = result.opengraph['og:image'];
    data.title = result.basic_metadata.title;
    data.description = result.opengraph['og:description'];
    return data;
  }));
  res.json(links);
});

module.exports = router;
