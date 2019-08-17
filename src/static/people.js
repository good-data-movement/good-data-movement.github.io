import logoDict from './logo';

const people = [
  {
    id: 'gp',
    name: 'George Punter',
    description:
      'How this person is changing the data world & how you could help them.',
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
        src: logoDict['gp'].src,
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
