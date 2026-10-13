const userProfile = {
  name: "Иван",
  age: 25,
  address: {
    city: "Киров",
    country: "Россия",
  },
  contacts: {
    social: {
      telegram: "@ivan_dev",
    },
  },
};

function flattenObject(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      const flatNested = flattenObject(value);

      return { ...acc, ...flatNested };
    }

    acc[key] = value;
    return acc;
  }, {});
}

const flatUser = flattenObject(userProfile);
console.log(flatUser);
