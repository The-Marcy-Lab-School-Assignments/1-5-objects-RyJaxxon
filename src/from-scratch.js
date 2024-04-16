const person = {
  name: 'Sara',
  bio: 'Too cool 4 skool.',
  age: 32,
  isCool: true,
  friends: ['joey', 'ryan', 'bobby'],
  hobbies: ['running', 'biking', 'baking'],
}

const fighters = {
  name: 'Fighters',
  sport: 'basketball',
  wins: 3,
  location: {
    city: 'Bridgeport',
    state: 'CT',
  },
  matches: [
    {
      teamName: 'Dunkaroos',
      skill: 9,
      wins: 12,
    },
    {
      teamName: 'Space Jammers',
      skill: 10,
      wins: 16,
    },
    {
      teamName: 'Mustangs',
      skill: 6,
      wins: 10,
    },
  ]
}

// Functions Start here --------------------------
const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  };
};
// console.log(coolGreeting(person));

const haveBirthday = (person) => {
  person.age += 1
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
};

const carMaker = (name, maker, year) => {
  const car = {
    'name': name,
    'maker': maker,
    'year': year,
    'needsOilChange': false
  }
  return car
};

const weAreNotFriends = (person) => {
  return person.friends.pop()
};

const listHobbies = (person) => {
  for (const hobby of person.hobbies) {
    console.log(`${person.name} likes ${hobby}.`)
  };
};

const getNextOpponent = (team) => {
  if (team.matches && team.matches.length > 0) {
    return team.matches[0].teamName;
  } else {
    return null;
  };
};

const listAllKeys = (object) => {
  return Object.keys(object);
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
