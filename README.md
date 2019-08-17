# Good Data Movement website

The Good Data Movement website is our portal to the outside world.

This website should act as a hub for the various projects & initiatives of the Good Data Movement & other similar organisations.

## Roadmap

### Release 1: Barebones

- [x] Manifesto
- [x] GDM Projects

### Release 2: Fine-tune

- [ ] Brand: GDM logo & colour theming.
- [ ] Split block of text into window-sized chunks.
- [ ] Add gif/png/icons alongside/with each chunk of text.
- [ ] Snap between windows on scroll.

### Release 3: Collaboration

- [ ] Activists: People you can contact working on GDM or similar projects.
- [ ] Sponsors: Similar to Projects, for GDM sponsors.
- [ ] Companies/Organisations: Activist orgs in this space; from [awesome-data-organisations](https://github.com/good-data-movement/awesome-data-companies)
- [ ] Other Tools/Projects/Resources; pulled from [awesome-privacy-resources](https://github.com/good-data-movement/awesome-privacy-resources)

### Release 4: Subscribe

- [ ] How-can-you help interactive questionnaire.
- [ ] Donate/Subscribe/Join Kickstarter-style stretch goals & let people choose what we focus on.
- [ ] People: List people who support the GDM taken from Subscribers w/ Amount Donated & whatever information they consent to be displayed.
- [ ] Visualisation of Donations

(Going to need backend service for managing mail-list/database with subscription amounts etc., hopefully Subscription service provider has an API/provides this service.)

### Release 5: Media

- [ ] Podcast: Links to download podcast.
- [ ] Blog/Medium integration.
- [ ] Link to all Social Media.
- [ ] Twitter feed.
- [ ] Discord plugin?

### Release 6: Automation

- [ ] Automate content pulling from various [Good Data Movement](https://github.com/good-data-movement) repositories; e.g.

### By April 2020: Transparency

- Visualised spending breakdown for the year.

## Branches

- Website is deployed on the `master` branch.
- `development` is the branch for active development.
  <!-- - `production` is the main branch for stable changes.-->

## Tech Stack

- Gatsbyjs
- React.js
- emotion/styled-components
- Static site hosted using Github Pages

## Prerequisites

### NVM/Node

NVM (Node Version Manager) is a great tool for managing your Node.js environment; we recommend you install node.js using this.

### _yarn_

The following is taken from _yarn_'s official [installation guide]() for Ubuntu.

Please consult _yarn_'s documentation for installing on other systems or for more information.

```

```

If you install node.js using nvm, using the `--ignore-...` when installing yarn:
`sudo apt install yarn --ignore-peer-dependencies`

## Quick Start

### Development

`yarn && yarn develop`

### Deployment

Builds production build and deploys to Github Pages.

`yarn && yarn deploy`

## Acknowledgments

This website is bootstrapped from https://github.com/EmaSuriano/gatsby-starter-mate.

Many thanks to @EmaSuriano for contributing Gatsby Starter Mate to the open-source community!
