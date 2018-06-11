let SALARY = {
  "1st co-op": [1000.00,1000.00,1200.00,2000.00,2000.00,2000.00,2000.00,2120.00,2188.80,2209.00,2240.00,2392.00,2400.00,2400.00,2400.00,2400.00,2400.00,2400.00,2400.00,2400.00,2400.00,2400.00,2400.00,2400.00,2400.00,2400.00,2427.00,2500.00,2500.00,2560.00,2560.00,2560.00,2560.00,2600.00,2600.00,2600.00,2600.00,2600.00,2628.00,2640.00,2640.00,2650.00,2680.00,2700.00,2720.00,2720.00,2720.00,2720.00,2720.00,2720.00,2724.00,2800.00,2800.00,2800.00,2833.00,2848.00,2880.00,2880.00,2880.00,2880.00,2880.00,2880.00,2880.00,2880.00,2880.00,2915.00,2958.00,3000.00,3000.00,3000.00,3000.00,3000.00,3000.00,3020.00,3120.00,3200.00,3200.00,3200.00,3200.00,3200.00,3200.00,3200.00,3200.00,3280.00,3300.00,3300.00,3328.00,3360.00,3360.00,3360.00,3500.00,3680.00,3680.00,3800.00,4000.00,4000.00,4000.00,4000.00,4320.00,6000.00,344.00,400.00,6646.1888,7704.228999999999,9460.38],
  "2nd co-op": [1600.00,2000.00,2000.00,2080.00,2200.00,2400.00,2560.00,2600.00,2600.00,2600.00,2700.00,2700.00,2720.00,2720.00,2720.00,2760.00,2773.00,2800.00,2800.00,2800.00,2800.00,2840.00,2880.00,2880.00,2880.00,2880.00,2900.00,2900.00,2920.00,2990.00,3000.00,3000.00,3000.00,3000.00,3000.00,3040.00,3040.00,3040.00,3200.00,3200.00,3200.00,3200.00,3200.00,3200.00,3200.00,3200.00,3200.00,3300.00,3300.00,3300.00,3300.00,3344.00,3360.00,3360.00,3360.00,3500.00,3500.00,3520.00,3520.00,3520.00,3520.00,3520.00,3520.00,3540.00,3600.00,3600.00,3600.00,3680.00,3800.00,3840.00,3862.4,4000.00,4000.00,4000.00,4000.00,4160.00,4176.00,4200.00,4248.64,4480.00,4640.00,4640.00,4800.00,4828.0,4828.0,4828.0,4900.00,5000.00,5000.00,5600.00,6000.00,6500.00,6638.5,7000.6,7000.6,7060.950000000001,7081.469,7724.8,7845.500000000001,7845.500000000001,7931.197,8449.0,8509.35,8852.138,8931.800000000001,9052.5,9120.00,9656.0,10259.5,12003.615000000002],
  "3rd co-op": [1100.00,2000.00,2070.00,2080.00,2200.00,2400.00,2500.00,2560.00,2700.00 ,2760.00,2960.00,2960.00,3000.00,3000.00,3000.00,3000.00,3000.00,3000.00 ,3050.00,3100.00,3200.00,3200.00,3200.00,3200.00,3216.00,3336.66,3360.00 ,3360.00,3472.00,3500.00,3500.00,3500.00,3500.00,3520.00,3520.00,3520.00 ,3539.20,3600.00,3600.00,3680.00,3700.00,3813.00,3828.00,3840.00,4000.00 ,4000.00,4000.00,4000.00,4000.00,4000.00,4000.00,4000.00,4000.00,4000.00 ,4000.00,4096.00,4160.00,4167.00,4200.00,4200.00,4250.00,4333.00,4400.00 ,4400.00,4500.00,4560.00,4800.00,4800.00,4960.00,5000.00,5538.00,5560.4 ,6000.00,6060.00,6255.45,6255.45,6672.48,6950.499999999999 ,7645.549999999999,8194.6395,8451.807999999999,8451.807999999999 ,8479.609999999999,8688.125,8900.00,9035.65,9341.472,9637.5633,9800.205 ,9980.918,10071.2745,10231.135999999999,10425.75,11120.8,11426.622 ,11654.598399999999,11815.849999999999,11815.849999999999,11815.849999999999 ,11815.849999999999,11836.7015,11836.7015,12302.384999999998,12510.9 ,12510.9,13000.00,13205.949999999999,13657.732499999998,14386.1449 ,18210.309999999998],
  "4th co-op": [1248.00,2000.00,2500.00,3040.00,3360.00,3400.00,3520.00,3600.00,3640.00,3680.00,3800.00,3800.00,3825.00,3900.00,4000.00,4000.00,4000.00,4000.00,4000.00,4194.5599999999995,4200.00,4200.00,4320.00,4480.00,4480.00,4480.00,4480.00,4524.00,4800.00,5000.00,5000.00,5000.00,5033.472,5200.00,5243.2,5440.00,5600.00,5872.384,5898.599999999999,5898.599999999999,6400.00,6554.0,6554.0,6600.00,6688.00,6900.00,7209.4,7209.4,7340.48,7864.8,7864.8,7969.664,7969.664,7969.664,8192.5,8250.00,8389.119999999999,8461.214,8520.199999999999,8520.199999999999,8598.848,8651.28,8913.44,9011.75,9044.52,9175.6,9306.68,9306.68,9437.76,9444.314,9444.314,9584.569599999999,9699.92,9831.0,9831.0,10224.24,10486.4,10486.4,10486.4,10486.4,10591.264,10814.1,10879.64,11010.72,11141.8,11141.8,11141.8,11141.8,11141.8,11141.8,11417.068,11687.0928,11797.199999999999,11797.199999999999,11797.199999999999,11797.199999999999,11878.4696,12288.75,12452.6,12452.6,12845.84,13108.0,13108.0,13239.08,13763.4,13927.25,14000.00,14441.00,20481.25],
  "5th co-op": [1975.00,2600.00,3000.00,3250.00,3312.00,3680.00,4000.00,4000.00,4320.00,4320.00,4480.00,4800.00,4800.00,5000.00,5000.00,5000.00,5000.00,5120.00,5200.00,5450.00,5461.2,5550.00,5600.00,5712.50,5788.871999999999,5800.00,6000.00,6000.00,6200.00,6500.00,6500.00,6826.5,7000.00,7500.00,7645.679999999999,7660.00,8301.024,8328.33,8492.166,8737.92,8737.92,8874.449999999999,9010.98,9101.0898,9147.51,9215.775,9284.039999999999,9329.0949,9449.2413,9557.1,9557.1,9557.1,9830.16,9830.16,9830.16,9830.16,9830.16,9966.69,10048.608,10048.608,10103.22,10239.75,10376.279999999999,10485.503999999999,10540.116,10581.074999999999,10649.34,10922.4,10922.4,10922.4,10922.4,10922.4,10922.4,10922.4,10922.4,10977.011999999999,11195.46,11263.725,11359.296,11364.00,11377.044899999999,11605.05,11605.05,11659.662,11708.8128,11946.375,12173.014799999999,12287.699999999999,12287.699999999999,12287.699999999999,12287.699999999999,12287.699999999999,12560.76,12806.514,12806.514,12970.35,13464.5886,13621.5981,13653.0,13721.265,14636.016,14636.016,14708.3769,14872.00,15001.9164,15018.3,15189.00,15550.767,15550.767,16465.518],
  "6th co-op": [2250.00,2900.00,3250.00,4800.00,4500.00,4480.00,4000.00,4200.00,4800.00,5000.00,5120.00,5000.00,5833.00,5200.00,5000.00,6000.00,6000.00,6250.00,6600.00,6400.00,7725.00,7950.00,7000.00,7200.00,8500.00,8908.00,9250.00,10000.00,15600.00,6438.912,7646.2080000000005,8048.64,8451.072,8803.2,8966.688,8991.84,9054.720000000001,9054.720000000001,9054.720000000001,9054.720000000001,9432.0,9432.0,9557.76,9683.52,9714.960000000001,9714.960000000001,9997.92,10054.512,10060.800000000001,10060.800000000001,10060.800000000001,10060.800000000001,10060.800000000001,10060.800000000001,10060.800000000001,10060.800000000001,10060.800000000001,10060.800000000001,10060.800000000001,10060.800000000001,10060.800000000001,10156.3776,10253.212800000001,10479.5808,10563.84,10563.84,10689.6,10689.6,10689.6,10689.6,10941.12,11037.9552,11318.4,11318.4,11318.4,11412.720000000001,11771.136,11947.2,11947.2,12230.16,12374.784,12374.784,12374.784,12374.784,12387.36,12431.376,12466.588800000001,12547.075200000001,12576.0,12701.76,13148.208,13833.6,13921.632000000001,13921.632000000001,14199.5616,14430.960000000001,14462.400000000001,14695.056,15091.2,15091.2,15091.2,15468.480000000001,16348.800000000001,17015.328,18562.176,20109.024]
};

let AGE_SALARY = {
  "Under 16": [1800.0, 1840.0, 2600.0, 2626.6666666666665, 2689.3333333333335, 2800.0, 2806.6666666666665, 2923.7333333333336, 2954.6666666666665, 2986.6666666666665, 2986.6666666666665, 3040.0, 3043.3333333333335, 3133.3333333333335, 3133.3333333333335, 3146.6666666666665, 3184.0, 3213.3333333333335, 3253.3333333333335, 3253.3333333333335, 3306.6666666666665, 3333.3333333333335, 3400.0, 3466.6666666666665, 3573.3333333333335, 3626.6666666666665, 3626.6666666666665, 3654.0, 3711.0, 3766.6666666666665, 3781.85, 3859.3333333333335, 4000.0, 4062.6666666666665, 4066.6666666666665, 4566.666666666667, 4879.25, 4897.269333333333, 4971.5464999999995, 5173.203333333333, 5543.7119999999995, 5557.0914999999995, 5712.233833333333, 5760.306, 5819.833333333333, 5928.583333333333, 5972.666666666667, 5975.540666666667, 6983.185, 6989.787766666667, 7365.3558, 7792.133333333334, 7835.381633333333, 8272.15, 8589.281333333334, 8728.946266666666],
  "16 or older": [1500.0, 1533.3333333333333, 1871.3333333333333, 2066.6666666666665, 2200.0, 2200.0, 2503.0, 2506.6666666666665, 2746.6666666666665, 2838.486666666666, 2944.3333333333335, 2986.6666666666665, 3000.0, 3004.3333333333335, 3040.0, 3122.3333333333335, 3200.0, 3280.0, 3306.6666666666665, 3360.0, 3426.7999999999997, 3461.3333333333335, 3466.6666666666665, 3486.6666666666665, 3493.3333333333335, 3496.0, 3500.0, 3791.816666666667, 3800.0, 3982.8799999999997, 4000.0, 4096.0, 4110.399, 4230.150000000001, 4290.166666666667, 4397.493333333333, 4400.0, 4602.708333333333, 4853.333333333333, 5049.666666666667, 5353.650000000001, 5483.935999999999, 6034.128333333333, 6212.083333333333, 6245.910833333332, 6257.766666666666, 6695.316666666666, 6774.616666666666, 7131.3240000000005, 7437.116666666666, 7503.436666666666, 7962.946500000001, 9027.06, 11060.0]
}

let HACKATHON_SALARY = {
  "0": [1500.0, 2066.6666666666665, 2600.0, 2838.486666666666, 2944.3333333333335, 2986.6666666666665, 3000.0, 3040.0, 3122.3333333333335, 3266.6666666666665, 3306.6666666666665, 3573.3333333333335, 3626.6666666666665, 3791.816666666667, 4000.0, 4110.399, 5543.7119999999995, 6034.128333333333, 7437.116666666666],
  "1-5": [1533.3333333333333, 1800.0, 1840.0, 1871.3333333333333, 2200.0, 2503.0, 2506.6666666666665, 2626.6666666666665, 2689.3333333333335, 2746.6666666666665, 2800.0, 2806.6666666666665, 2923.7333333333336, 2954.6666666666665, 2986.6666666666665, 2986.6666666666665, 3004.3333333333335, 3040.0, 3043.3333333333335, 3133.3333333333335, 3133.3333333333335, 3146.6666666666665, 3200.0, 3213.3333333333335, 3253.3333333333335, 3253.3333333333335, 3280.0, 3306.6666666666665, 3360.0, 3400.0, 3426.7999999999997, 3461.3333333333335, 3466.6666666666665, 3486.6666666666665, 3493.3333333333335, 3496.0, 3500.0, 3626.6666666666665, 3654.0, 3711.0, 3766.6666666666665, 3800.0, 3859.3333333333335, 3982.8799999999997, 4000.0, 4066.6666666666665, 4096.0, 4230.150000000001, 4290.166666666667, 4397.493333333333, 4400.0, 4566.666666666667, 4602.708333333333, 4853.333333333333, 4879.25, 4897.269333333333, 5049.666666666667, 5353.650000000001, 5483.935999999999, 5760.306, 5819.833333333333, 5928.583333333333, 5972.666666666667, 5975.540666666667, 6212.083333333333, 6695.316666666666, 6983.185, 6989.787766666667, 7131.3240000000005, 7365.3558, 7792.133333333334, 7962.946500000001, 8272.15, 8589.281333333334, 11060.0],
  ">5": [2200.0, 3184.0, 3333.3333333333335, 3466.6666666666665, 3781.85, 4062.6666666666665, 4971.5464999999995, 5173.203333333333, 5557.0914999999995, 5712.233833333333, 6245.910833333332, 6257.766666666666, 6774.616666666666, 7503.436666666666, 7835.381633333333, 8728.946266666666, 9027.06]
}

let SIDE_SALARY = {
  "0h / month": [1871.3333333333333, 2503.0, 2506.6666666666665, 2600.0, 2689.3333333333335, 2800.0, 2923.7333333333336, 3040.0, 3043.3333333333335, 3122.3333333333335, 3133.3333333333335, 3184.0, 3253.3333333333335, 3360.0, 3626.6666666666665, 3654.0, 3781.85, 3791.816666666667, 4000.0, 4110.399, 4602.708333333333, 4879.25, 5928.583333333333, 6034.128333333333, 6257.766666666666, 7437.116666666666, 8589.281333333334],
  "1-10h / month": [1500.0, 1533.3333333333333, 1800.0, 1840.0, 2066.6666666666665, 2200.0, 2200.0, 2626.6666666666665, 2746.6666666666665, 2806.6666666666665, 2838.486666666666, 2944.3333333333335, 2954.6666666666665, 2986.6666666666665, 2986.6666666666665, 2986.6666666666665, 3000.0, 3004.3333333333335, 3040.0, 3133.3333333333335, 3146.6666666666665, 3200.0, 3213.3333333333335, 3253.3333333333335, 3266.6666666666665, 3306.6666666666665, 3306.6666666666665, 3486.6666666666665, 3496.0, 3626.6666666666665, 3766.6666666666665, 3800.0, 3982.8799999999997, 4000.0, 4062.6666666666665, 4066.6666666666665, 4096.0, 4230.150000000001, 4290.166666666667, 4397.493333333333, 4400.0, 4566.666666666667, 4853.333333333333, 4971.5464999999995, 5049.666666666667, 5353.650000000001, 5483.935999999999, 5543.7119999999995, 5712.233833333333, 5760.306, 5819.833333333333, 5975.540666666667, 6212.083333333333, 6245.910833333332, 6695.316666666666, 6989.787766666667, 7131.3240000000005, 7365.3558, 7503.436666666666, 7835.381633333333, 8272.15, 11060.0],
  ">10h / month": [3280.0, 3333.3333333333335, 3400.0, 3426.7999999999997, 3461.3333333333335, 3466.6666666666665, 3466.6666666666665, 3493.3333333333335, 3500.0, 3573.3333333333335, 3711.0, 3859.3333333333335, 4897.269333333333, 5173.203333333333, 5557.0914999999995, 5972.666666666667, 6774.616666666666, 6983.185, 7792.133333333334, 7962.946500000001, 8728.946266666666, 9027.06]
}

let SIDE_SALARY_2 = {
  "0h / month": [3659.0039999999995, 4026.6666666666665, 5081.066666666667, 5632.866666666666, 5717.908333333333, 5886.5, 6194.4906666666675, 7681.351633333335, 7846.466666666667, 7876.986666666667, 7879.242666666666, 8018.040400000001, 8019.493333333335, 8120.629933333334, 9170.958266666667, 9179.066666666668, 9380.4, 9718.666666666666, 9783.589, 9814.804666666669, 9876.666666666666, 10216.224433333335, 10267.24, 10757.066666666668, 11458.578666666668, 11523.332266666666, 11654.846666666666],
  "1-10h / month": [2800.0, 2833.3333333333335, 3400.0, 4266.666666666667, 4266.666666666667, 4464.986666666667, 4466.666666666667, 4666.666666666667, 4988.501333333333, 5004.166666666667, 5472.639999999999, 5954.240000000001, 6275.928, 6397.5, 6833.466666666667, 7088.040000000001, 7113.125333333333, 7155.172666666666, 7354.733333333333, 7558.776666666668, 7734.96, 7834.68, 7862.639999999999, 8103.136000000001, 8197.699999999999, 8543.002666666667, 8669.466666666667, 8776.526666666667, 9104.566666666668, 9107.704666666667, 9144.533333333333, 9240.396, 9271.556666666665, 9435.56, 9497.328, 9546.294666666667, 9558.266666666666, 9572.9, 9893.920533333332, 10054.512, 10195.195333333331, 10235.283333333333, 10316.104666666666, 10489.866666666667, 10519.478666666668, 10524.821333333333, 10559.376266666666, 10664.64, 10681.300000000001, 10708.333333333334, 11061.333333333334, 11192.696666666665, 11267.696666666665, 11654.875233333334, 11702.259133333335, 12077.024, 12606.881, 12631.082999999999, 12928.682533333333, 14161.632666666666, 14824.0, 15467.231, 18432.883633333335],
  ">10h / month": [4693.333333333333, 5333.333333333333, 6100.0, 6550.0, 7719.753333333334, 8018.666666666667, 8240.586666666666, 8355.037766666666, 8534.346666666666, 8584.769866666667, 9437.205, 9843.766666666665, 9984.907333333334, 10525.254666666666, 10559.153333333334, 10976.353333333333, 11037.2976, 11491.18, 11500.298333333334, 12603.436666666666, 12639.5, 13401.526666666667]
}
let WORK_LOCATION = [{
  'x': '1st',
  'value': [2, 100, 3, 1, 0, 4]
}, {
  'x': '2nd',
  'value': [2, 85, 6, 0, 6, 0]
}, {
  'x': '3rd',
  'value': [32, 68, 4, 0, 4, 5]
}, {
  'x': '4th',
  'value': [48, 39, 1, 11, 8, 4]
}, {
  'x': '5th',
  'value': [62, 21, 8, 6, 10, 5]
}, {
  'x': '6th',
  'value': [57, 23, 5, 17, 6, 2]
}]

let FAVOURITE_LOCATION = [{
  "name": "California",
  "value": 64,
  }, {
  "name": "East Coast Canada",
  "value": 20,
  }, {
  "name": "West Coast Canada",
  "value": 7,
  }, {
  "name": "PNW USA",
  "value": 8,
  }, {
  "name": "East Coast USA",
  "value": 7,
  }, {
  "name": "Outside NA",
  "value": 3,
}]

export {
  SALARY,
  WORK_LOCATION,
  FAVOURITE_LOCATION,
  AGE_SALARY,
  HACKATHON_SALARY,
  SIDE_SALARY,
  SIDE_SALARY_2
}
