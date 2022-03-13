const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const couponSchema = new Schema(
  {
    couponTitle: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    product: {
      type: String,
      require: true,
    },
    vendor: {
      type: String,
      require: true,
      trim: true,
    },
    amountOff: {
      type: Number,
      require: true,
    },
    currency: {
      type: String,
      require: true,
      enum: ['$', '€'],
      default: '$',
    },
    redeemBy: {
      type: Date,
    },
    maxRedemptions: {
      type: Number,
    },
    // image: {
    //   type: String,
    // },
    user: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }]

  }
);

const Coupon = model('Coupon', couponSchema);

module.exports = Coupon;
