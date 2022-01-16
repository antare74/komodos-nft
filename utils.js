const images = require('images');
const path = require('path');

module.exports.getRandom = (max) => {
  //provides random number from zero to max value
  if (max == 1) {
    return 0;
  } else {
    return parseInt(Math.random() * (max - 0) + 0);
  }
};

module.exports.composeImage = async (traits, Id) => {

  try {
    //function to compose image
    const backgroundpath = path.join(__dirname, './assets/komodos/images/', `${traits[0]}.png`);
    console.log(backgroundpath)
    // return
    // const backgroundpath = path.join(__dirname, './assets/komodos/images/', `${traits[0]}.png`);
    // const backgroundpath = path.join(__dirname, './assets/komodos/images/', "Bloody.png");
    const body = path.join(__dirname, './assets/komodos/images/', `${traits[1]}.png`);
    // console.log(traits, Id)
    // return
    images(backgroundpath).draw(images(body), 10, 1).save(`${Id}.png`);
    console.log("body putted successfully : ", traits[1]);
    for (i = 2; i < traits.length; i++) {
      if (traits[i] == 'shirtless') {
        continue;
      }
      images(`${Id}.png`)
        .draw(
          images(path.join(__dirname, './assets/komodos/images/', `${traits[i]}.png`)),
          10,
          10
        )
        .save(`${Id}.png`);
      console.log(traits[i], " added successfully");
    }
    console.log('Image created...', Id);

  } catch (error) {

  }

};
