let welcomeStranger = (name, work) => {
  console.log(`Hello, ${name.join(" ")}! Nice to have a ${work.title} ${work.occupation} around.`);
}

welcomeStranger(['collin', 'vine'], {title: "Executive", occupation: "Product Manager"});
