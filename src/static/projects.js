import logo from './gatsby-icon.png';
import logo2 from './gatsby-astronaut.png';

const projects = [
  {
    id: 'awesome-privacy-tools',
    name: 'awesome-privacy-tools',
    description:
      'Collection of exisiting tools to help users maintain privacy online.',
    projectUrl: 'https://github.com/good-data-movement/awesome-privacy-tools',
    repositoryUrl:
      'https://github.com/good-data-movement/awesome-privacy-tools',
    publishedDate: '2019',
    type: 'resource',
    logo: {
      title: 'Privacy tools icon.',
      image: {
        src: logo,
      },
    },
  },
  {
    id: 'good-data-api',
    name: 'Good Data API',
    description:
      'API specification to make & respond to data subject access requests',
    projectUrl: 'https://github.com/good-data-movement/API',
    repositoryUrl: 'https://github.com/good-data-movement/API',
    publishedDate: '2019',
    type: 'resource',
    logo: {
      title: 'Logo alt',
      image: {
        src: logo2,
      },
    },
  }
  
];

/*
 * Potential Projects in future:
{
	id: 'good-data-guideline',
	name: 'Good Data Guidelines',
	description:
		'A set of guidelines for best practice when handling personal data.',
  projectUrl: 'https://github.com/good-data-movement/manifesto/blob/master/alliance.md',
	repositoryUrl: 'https://github.com/good-data-movement/manifesto',
	publishedDate: '2019',
	type: 'resource',
	logo: {
		title: 'Logo alt',
		image: {
			src: logo2,
		},
	}
},
{
  id: 'good-data-alliance',
  name: 'Good Data Alliance',
  description:
    'Community-vetted association of companies ascribing to the Good Data Guidelines.',
  projectUrl: 'https://github.com/good-data-movement/manifesto/blob/master/guidelines.md',
  repositoryUrl: 'https://github.com/good-data-movement/manifesto',
  publishedDate: '2019',
  type: 'initiative',
  logo: {
    title: 'Logo alt',
    image: {
      src: logo2,
    },
  },
}

Useful for future when have image transformations or headless CMS.
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

export default projects;
