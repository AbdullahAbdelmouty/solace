const userData = require('../user.json');

const resolvers = {
  user: ({ id }) => {
    return userData.data.user;
  },
  updateUser: ({ firstName,fatherName,grandfatherName,familyName }) => {
    const updatedUser = { ...userData.data.user, firstName,fatherName,grandfatherName,familyName };
    console.log('Updated User:', updatedUser);
    return updatedUser;
  },
};

module.exports = resolvers;
