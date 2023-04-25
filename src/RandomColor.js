import hexSigns from "./hexSigns";
const RandomColor = () => {
    let hexNumb = "#";
    for (let i = 0; i < 6; i++) {
      hexNumb += hexSigns[Math.floor(Math.random() * 16)];
    }
    return hexNumb;
  }

export default RandomColor;
