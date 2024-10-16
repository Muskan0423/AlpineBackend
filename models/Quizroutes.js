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

  if (ageRange === '18-25') baseDiscount -= 2;
  if (ageRange === '26-35') baseDiscount -= 3;
  if (ageRange === '36-45') baseDiscount -= 4;
  if (ageRange === '46+') baseDiscount -= 5;

  if (zipPurchasingPower > 100000) baseDiscount -= 5;
  else if (zipPurchasingPower > 75000) baseDiscount -= 3;

  const deviceValue = deviceData[deviceType]?.currentValue || 500;
  if (deviceValue > 1000) baseDiscount -= 5;
  else if (deviceValue > 500) baseDiscount -= 3;

  return Math.max(5, Math.min(baseDiscount, 30));
};

module.exports = router;
