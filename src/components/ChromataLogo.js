import React from 'react';
import Section from '../components/Section';

// settings for Chromata
// more info on https://www.michaelbromley.co.uk/experiments/chromata/
const chromataOptions = {
  colorMode: 'color',
  compositeOperation: 'lighten',
  iterationLimit: 0,
  key: 'low',
  lineWidth: 2,
  lineMode: 'smooth',
  origin: ['bottom'],
  outputSize: 'original',
  pathFinderCount: 30,
  speed: 9,
  turningAngle: 1.6 * Math.PI,
};
// set the color matching the page background color
const srcImgBgColor = 'black';

class ChromataLogo extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: srcImgBgColor,
          width: '100%',
          height: '100%',
        }}
      >
        <img
          className="chromata-img"
          src={this.props.imgSrc}
          style={{
            display: 'none',
          }}
        ></img>
      </div>
    );
  }
  componentDidMount() {
    require('../../node_modules/chromata/dist/chromata.min.js');
    const chromataImgElement = document.querySelector('.chromata-img');
    const chromataIntance = new Chromata(chromataImgElement, chromataOptions);
    chromataIntance.start();
  }
}

export default ChromataLogo;
