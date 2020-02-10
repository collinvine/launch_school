let localGreet = (locale) => {
  let lang = locale.slice(0, 2);
  console.log(lang);
  let region = locale.slice(3, 5);
  console.log(region);

  switch (lang) {
    case "en":
      switch (region) {
        case "US":
          console.log("Hey!");
          break;
        case "GB":
          console.log("Hello!");
          break;
        case "AU":
          console.log("Howdy!");
          break;
        default:
          console.log("Hi!");
      };
      break;
    case "fr":
      switch (region) {
        case "FR":
          console.log("Salut!");
          break;
        case "CA":
          console.log("Salut, ca");
          break;
        case "MA":
          console.log("Salut, ma");
          break;
        default:
      }
      break;
    default:
      console.log("hi");
  }
};

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
