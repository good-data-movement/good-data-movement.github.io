import logo from './gatsby-icon.png';
import logo2 from './gatsby-astronaut.png';

const people = [
  {
    id: 'gp',
    name: 'George Punter',
    description: 'Hi',
    social: [
      {
        id: 'github',
        url: 'https://github.com/good-data-movement',
        name: 'Github',
        fontAwesomeIcon: ['fab', 'github'],
      },
    ],
    joinedDate: '2019',
    type: 'developer',
    logo: {
      title: 'ps-george',
      image: {
        src: logo,
      },
    },
  },
];

/* Useful for future when have image transformations or headless CMS.
projects {
  id
  name
  description
  projectUrl
  repositoryUrl
  publishedDate(formatString: "YYYY")
  type
  logo {
    title
    image: resize(width: 200, quality: 100) {
      src
    }
  }
}
*/

export default people;
