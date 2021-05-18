module.exports = {
    get_emoji: () => {
      const randomNum = Math.random();
      let pokemon = "📗";
  
      if (randomNum > 0.7) {
        pokemon = "📘";
      } else if (randomNum > 0.4) {
        pokemon = "📙";
      }
  
    },
  };