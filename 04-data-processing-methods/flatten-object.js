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

function flattenObject(obj, prefix = "") {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      const flatNested = flattenObject(value, newKey);

      return { ...acc, ...flatNested };
    }

    acc[newKey] = value;
    return acc;
  }, {});
}

const flatUser = flattenObject(userProfile);
console.log(flatUser);
