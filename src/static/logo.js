import logo1 from './logos/gp.png';
// TODO: Replace with import ALL logos from this dir.

function getLogoName(logo) {
  const path = logo.toString();
  const trailing = path.substring(path.lastIndexOf('/') + 1);
  return trailing.substr(0, trailing.indexOf('-'));
}

const logoList = [logo1];

const logoDict = logoList.reduce((obj, x) => {
  const logoName = getLogoName(x);
  obj[logoName] = { src: x };
  return obj;
}, {});

export default logoDict;
