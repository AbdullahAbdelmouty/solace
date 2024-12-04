const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type LocalizedName {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
  }

  type Country {
    id: String
    name: String
  }

  type Nationality {
    country: Country
    countryId: Int
  }

  type NationalId {
    idNumber: String
    expiryDate: String
  }

  type MaritalStatus {
    id: String
    name: String
  }

  type User {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
    localizedName: LocalizedName
    nationalId: NationalId
    nationalities: [Nationality]
    maritalStatus: MaritalStatus
    dependants: Int
  }

  type Query {
    user(id: Int!): User
  }

type Mutation {
  updateUser(
    firstName: String,
    fatherName: String,
    grandfatherName: String,
    familyName: String
  ): User
}

`);

module.exports = schema;
