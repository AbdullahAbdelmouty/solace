const userData = require('../user.json');

const resolvers = {
  user: ({ id }) => {
    return userData.data.user;
  },
  updateUser: ({ firstName }) => {
    const updatedUser = { ...userData.data.user, firstName };
    console.log('Updated User:', updatedUser);
    return updatedUser;
  },
};

module.exports = resolvers;
