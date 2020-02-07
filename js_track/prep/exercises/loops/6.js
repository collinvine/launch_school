let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
let city

for (city = 0; city < cities.length; city += 1) {
  if (cities[city] === null) {
    continue
  };

  console.log(cities[city].length);
}
