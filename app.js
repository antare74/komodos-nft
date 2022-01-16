const traits = require('./traits');
const limits = require('./limits');
const exceptions = require('./exceptions');
const { getRandom, composeImage } = require('./utils');
let imageCount = 0;
let TrueCount = 0;
let Background, Eyes, Head, Hands, Mouth, Skin, Tail;

for (counter = 1; imageCount <= 10; counter++) {
  Tail        = traits.Tail[getRandom(traits.Tail.length)];
  Eyes        = traits.Eyes[getRandom(traits.Eyes.length)];
  Skin        = traits.Skin[getRandom(traits.Skin.length)];
  Head        = traits.Head[getRandom(traits.Head.length)];
  Hands       = traits.Hands[getRandom(traits.Hands.length)];
  Mouth       = traits.Mouth[getRandom(traits.Mouth.length)];
  Background  = traits.background[getRandom(traits.background.length)];
  
  let attributes = [Background, Tail, Skin, Eyes, Head, Hands, Mouth];
  attrRemovalCheck = attributes.length;
  uniqueExceptions = Object.keys(exceptions.Unique);
  for (i = 0; i < uniqueExceptions.length; i++) {
    if (attributes.includes(uniqueExceptions[i])) {
      e = exceptions.Male[uniqueExceptions[i]];
      FilteredArray = attributes.filter((data) => {
        return !e.includes(data);
      });
      attributes = FilteredArray;
    }
  }

  if (attrRemovalCheck != attributes.length) {
    counter -= 1;
    continue;
  }

  attributes.forEach((data) => {
    if (limits.data[data].counter <= limits.data[data].counter) {
      TrueCount += 1;
    }
  });

  if (TrueCount == attributes.length) {
    attributes.forEach((data) => {
      limits.data[data].counter += 1;
    });

    composeImage(attributes, counter);
    imageCount += 1;
    TrueCount = 0;
  } else {
    continue;
  }
}
