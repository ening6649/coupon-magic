const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    commentCount: Int
    coupons: [Coupon]
    comments: [User]
  }

  type Coupon {
    _id: ID
    createdAt: String
    couponTitle: String
    product: String
    vendor: String
    amountOff: String
    currency: String
    redeemBy: String
    maxRedemptions: String
    username: String
    user: [User]
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    user: [User]
    coupon: [Coupon]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    coupons(username: String): [Coupon]
    coupon(_id: ID!): Coupon
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth    
    
    addCoupon(
      createdAt: String,
      couponTitle: String,
      product: String,
      vendor: String,
      amountOff: String,
      currency: String,
      redeemBy: String,
      maxRedemptions: String
    ): Coupon
    
    addComment(couponId: ID!, commentText: String!): Comment  }
`;

module.exports = typeDefs;