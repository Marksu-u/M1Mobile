
const imageA = require("../../../src/images/ArnoldBuddy.jpg");
const imageR = require("../../../src/images/RonnieBuddy.jpg");
const imageC = require("../../../src/images/CbumBuddy.png");

const BuddyThemes = {
  Ronnie: {
    image: imageR,
    title: "Ronnie Coleman",
    motivation: "You have to train the best way that is suited to you, a way that will allow you to progress."
  },
  Arnold: {
    image: imageA,
    title: "Arnold Schwarzenegger",
    motivation: "Just remerber. You can't climb the ladder of success with your hands in your pockets"
  },
  Cbum: {
    image: imageC,
    title: "Chris Bumstead",
    motivation: "When you look in the mirror, you don't see the perfect version of yourself, you better see the hardest working version of yourself."
  }
};

export default BuddyThemes;
