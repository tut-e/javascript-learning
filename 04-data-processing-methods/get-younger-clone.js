const users = [
  { name: "Анна", age: 25 },
  { name: "Олег", age: 30 },
];

function getYoungerClone(users) {
  const updatedUsers = deepClone(users);
  for (let i = 0; i < updatedUsers.length; i++) {
    if (updatedUsers[i].age) {
      updatedUsers[i].age -= 1;
    }
  }
  return updatedUsers;
}

function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (typeof value === "function") {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  const clone = Array.isArray(value) ? [] : {};

  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      clone[key] = deepClone(value[key]);
    }
  }

  return clone;
}

const updatedUsers = getYoungerClone(users);
console.log(updatedUsers);
// updatedUsers должен быть: [ { name: 'Анна', age: 24 }, { name: 'Олег', age: 29 } ]
// users должен остаться: [ { name: 'Анна', age: 25 }, { name: 'Олег', age: 30 } ]
