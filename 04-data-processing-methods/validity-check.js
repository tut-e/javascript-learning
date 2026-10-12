const allowed = ["admin", "editor", "guest"];

function areRolesValid(userRoles, allowedRoles) {
  if (userRoles.length === 0) return false;

  return userRoles.every((role) => allowedRoles.includes(role));
}

console.log(areRolesValid(["guest", "editor"], allowed)); // true
console.log(areRolesValid(["admin", "hacker"], allowed)); // false
console.log(areRolesValid([], allowed));
