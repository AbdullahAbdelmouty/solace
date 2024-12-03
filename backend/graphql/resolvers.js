const userData = require('../user.json');

const resolvers = {
  user: ({ id }) => {
    // Return static user data; ignore the ID for now
    return userData.data.user;
  },
  updateUser: ({ firstName }) => {
    // Example mutation logic
    const updatedUser = { ...userData.data.user, firstName };
    console.log('Updated User:', updatedUser);
    return updatedUser;
  },
};

module.exports = resolvers;
