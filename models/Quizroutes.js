const express = require('express');
const zipData = require('../zipData.json');
const deviceData = require('../deviceData.json');
const router = express.Router();



router.post('/discount', (req, res) => {
  const { ageRange, zipCode, deviceType, deviceModel } = req.body;

  const discount = calculateDiscount(ageRange, zipCode, deviceType, deviceModel);

  res.json({ discount });
});

const calculateDiscount = (ageRange, zipCode, deviceType) => {
  let baseDiscount = 30; 
  const zipPurchasingPower = zipData[zipCode]?.averageIncome || 50000;

  const ageDiscount = {
    '18-25': -2,
    '26-35': -3,
    '36-45': -4,
    '46+': -5,
  }[ageRange] || 0;

  const incomeDiscount = zipPurchasingPower > 100000 ? -5 :
                         zipPurchasingPower > 75000 ? -3 : 0;

  baseDiscount += ageDiscount + incomeDiscount;

  const deviceValue = deviceData[deviceType]?.currentValue || 500;
  const deviceDiscount = deviceValue > 1000 ? -5 : 
                         deviceValue > 500 ? -3 : 0;

  baseDiscount += deviceDiscount;

  return Math.max(5, Math.min(baseDiscount, 30));
};

module.exports = router;
