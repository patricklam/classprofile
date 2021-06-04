let SALARY = {
  "1st co-op": [24, 20, 20, 18.75, 18, 18, 23, 20, 17, 17.31, 32, 17.5, 19, 25, 20, 18, 22, 24, 18, 5, 15, 20, 18, 18, 42.9, 25, 18.5, 14, 45.5, 20, 21, 19, 21, 17.5, 20, 21.5, 25, 20, 21, 25, 18, 20, 18, 24, 20, 18, 25, 18, 43, 22.08, 18, 22, 18, 40, 20, 17, 20],
  "2nd": [22, 65, 20, 17.5, 18, 54.6, 54.6, 43.875, 39, 25.14, 33, 23, 20, 26, 20, 46.8, 35, 46.8, 22, 17, 20, 22, 35, 28, 46.8, 48.75, 18, 46.8, 25, 22, 21, 23, 58.5, 38, 21, 25, 21, 20, 28, 60, 40, 45.5, 42, 17, 20, 18, 30, 49, 22, 26, 21, 40, 26, 20, 32],
  "3rd": [28, 78, 65, 30, 30, 25, 48, 45, 45.5, 24.68, 58.5, 24, 24, 35, 24, 58.5, 38, 54.6, 47.3, 30, 24, 40, 68.9, 55.9, 55.9, 23.75, 36, 52, 24, 23, 35, 46, 65, 22, 57.2, 25, 23, 32, 33, 43, 45, 22, 22.5, 20, 24, 55, 21.33, 24, 25, 60, 52, 30, 30],
  "4th": [70, 89.375, 71.5, 52, 25, 54.6, 48, 78, 58.5, 52.494, 62.4, 62.4, 55.9, 58.5, 30, 45, 58.5, 46.15, 58, 33, 26, 48, 78, 65, 84.006, 25, 61.1, 71.5, 31, 40, 48, 58.5, 56.251, 26, 71.5, 65, 23, 62.4, 55, 65, 65, 115, 21.5, 39, 22, 58.5, 49, 30, 35, 32, 55, 65, 52.494, 32.5],
  "5th": [28, 83.2, 55, 65, 65, 65, 0, 84.5, 48, 67.5*1.3, 61.1, 59.8, 65, 55, 24, 50, 65, 54.795, 58, 37, 36, 48, 65, 61.1, 59.8, 58.5, 110.5, 55.9, 65, 35, 31, 32.5, 67.47, 29, 65, 30, 58.5, 100, 53.3, 65, 130, 29, 53.3, 39, 65, 105.13, 26.05, 38, 35, 57, 36, 52.494, 58.5],
  "6th co-op": [42, 136.5, 41, 36, 158, 92.5, 47, 40, 45, 107.9, 44, 70, 93.756, 36, 41, 44, 40, 130, 41, 127, 40, 40, 65, 40, 33, 35.1, 40.38, 29, 35, 31, 111.8, 100, 48, 130, 34, 40, 35, 70.71, 25, 39, 40, 54, 40, 31.73, 30]
};

// let AGE_SALARY = {
//   "Under 16": [1800.0, 2600.0, 2645.3333333333335, 2689.3333333333335, 2760.0, 2800.0, 2806.6666666666665, 2923.7333333333336, 2954.6666666666665, 2986.6666666666665, 2986.6666666666665, 3040.0, 3043.3333333333335, 3133.3333333333335, 3133.3333333333335, 3146.6666666666665, 3184.0, 3213.3333333333335, 3253.3333333333335, 3253.3333333333335, 3306.6666666666665, 3333.3333333333335, 3400.0, 3466.6666666666665, 3573.3333333333335, 3626.6666666666665, 3626.6666666666665, 3654.0, 3711.0, 3766.6666666666665, 3781.85, 3859.3333333333335, 4000.0, 4062.6666666666665, 4066.6666666666665, 4325.150000000001, 4632.675, 4750.8933333333325, 4778.55, 4792.833333333333, 4897.269333333333, 5173.203333333333, 5543.7119999999995, 5760.306, 5819.833333333333, 5928.583333333333, 5972.666666666667, 5975.540666666667, 6097.213333333333, 6700.596666666667, 6983.185, 6989.787766666667, 7792.133333333334, 7834.266666666666, 8272.15, 8728.946266666666],
//   "16 or older": [1911.3333333333333, 2200.0, 2200.0, 2250.0, 2300.0, 2503.0, 2506.6666666666665, 2746.6666666666665, 2838.486666666666, 2878.133333333333, 2944.3333333333335, 2986.6666666666665, 3000.0, 3004.3333333333335, 3040.0, 3100.0, 3122.3333333333335, 3200.0, 3280.0, 3306.6666666666665, 3360.0, 3461.3333333333335, 3466.6666666666665, 3486.6666666666665, 3493.3333333333335, 3496.0, 3500.0, 3719.7333333333336, 3791.816666666667, 3800.0, 3982.8799999999997, 4000.0, 4096.0, 4230.150000000001, 4290.166666666667, 4397.493333333333, 4400.0, 4602.708333333333, 4853.333333333333, 5011.666666666667, 5049.666666666667, 5168.583333333333, 5483.935999999999, 6034.128333333333, 6067.0, 6212.083333333333, 6257.766666666666, 6593.133333333334, 6695.316666666667, 6774.616666666666, 7131.3240000000005, 7437.116666666666, 9027.06, 11060.0]
// }

let HACKATHON_SALARY = {
  "0": [24.66666667, 22, 36.29166667, 25, 16, 22.33333333, 21.5, 25, 25, 26.66666667, 32.33333333, 36.16666667, 22.5, 19, 22.66666667, 22, 21.33333333, 22.33333333],
  "1-5": [33.83333333, 21, 42.43333333, 24.76666667, 23.33333333, 42.56666667, 41.05, 18.58333333, 41, 22.33333333, 35, 19.5, 22.08333333, 32.53333333, 41.16666667, 32.33333333, 46.6, 32.33333333, 20.33333333, 21.80333333, 54.33333333, 35, 41.86666667, 22.37666667, 27, 20.66666667, 39.8, 31, 21, 34.06666667, 39, 27.33333333, 26.33333333, 24, 21.5, 21.33333333, 32.66666667],
  ">5": [40.66666667, 42.76666667, 46.66666667, 49]
}

let SIDE_SALARY = {
  "0h / month": [1911.3333333333333, 2503.0, 2506.6666666666665, 2600.0, 2689.3333333333335, 2800.0, 2923.7333333333336, 3040.0, 3043.3333333333335, 3122.3333333333335, 3133.3333333333335, 3184.0, 3253.3333333333335, 3360.0, 3626.6666666666665, 3654.0, 3719.7333333333336, 3781.85, 3791.816666666667, 4000.0, 4602.708333333333, 4792.833333333333, 5928.583333333333, 6034.128333333333, 6257.766666666666, 7437.116666666666, 7834.266666666666],
  "1-10h / month": [1800.0, 2200.0, 2200.0, 2250.0, 2300.0, 2645.3333333333335, 2746.6666666666665, 2760.0, 2806.6666666666665, 2838.486666666666, 2944.3333333333335, 2954.6666666666665, 2986.6666666666665, 2986.6666666666665, 2986.6666666666665, 3000.0, 3004.3333333333335, 3040.0, 3100.0, 3133.3333333333335, 3146.6666666666665, 3200.0, 3213.3333333333335, 3253.3333333333335, 3266.6666666666665, 3306.6666666666665, 3306.6666666666665, 3486.6666666666665, 3496.0, 3626.6666666666665, 3766.6666666666665, 3800.0, 3982.8799999999997, 4000.0, 4062.6666666666665, 4066.6666666666665, 4096.0, 4230.150000000001, 4290.166666666667, 4325.150000000001, 4397.493333333333, 4400.0, 4750.8933333333325, 4778.55, 4853.333333333333, 5011.666666666667, 5049.666666666667, 5168.583333333333, 5483.935999999999, 5543.7119999999995, 5760.306, 5819.833333333333, 5975.540666666667, 6067.0, 6097.213333333333, 6212.083333333333, 6695.316666666667, 6700.596666666667, 6989.787766666667, 7131.3240000000005, 8272.15, 11060.0],
  ">10h / month": [2878.133333333333, 3280.0, 3333.3333333333335, 3400.0, 3461.3333333333335, 3466.6666666666665, 3466.6666666666665, 3493.3333333333335, 3500.0, 3573.3333333333335, 3711.0, 3859.3333333333335, 4632.675, 4897.269333333333, 5173.203333333333, 5972.666666666667, 6593.133333333334, 6774.616666666666, 6983.185, 7792.133333333334, 8728.946266666666, 9027.06]
}

let SIDE_SALARY_2 = {
  "0h / month": [4026.6666666666665, 4296.2, 5081.066666666667, 5717.908333333333, 5886.5, 6194.4906666666675, 7055.333333333333, 7681.351633333333, 7846.466666666667, 7876.986666666667, 7879.242666666666, 8018.040400000001, 8120.629933333333, 8191.8, 8468.35, 9170.958266666667, 9179.066666666668, 9380.4, 9718.666666666666, 9790.773333333333, 9814.804666666667, 10216.224433333333, 10267.24, 10757.066666666666, 11458.578666666668, 11654.846666666666, 14635.0],
  "1-10h / month": [2800.0, 2833.3333333333335, 3400.0, 4266.666666666667, 4266.666666666667, 4666.666666666667, 5004.166666666667, 5472.639999999999, 5851.333333333333, 6275.928, 6697.48, 6700.0, 6833.466666666666, 7088.04, 7106.025333333334, 7482.752, 7558.776666666668, 7734.959999999999, 7862.639999999999, 7863.040000000001, 7939.5199999999995, 8080.242666666666, 8103.1359999999995, 8174.4000000000015, 8197.699999999999, 8490.18, 8543.002666666667, 8643.85, 8669.466666666665, 8776.526666666667, 8931.36, 9107.704666666667, 9144.533333333333, 9175.114666666666, 9240.396, 9271.556666666665, 9435.56, 9558.266666666666, 9572.9, 9893.920533333332, 9912.77, 9923.2, 10136.136, 10195.195333333331, 10235.283333333333, 10489.866666666667, 10519.478666666668, 10524.821333333331, 10559.376266666668, 10664.64, 10681.300000000001, 10708.333333333332, 10864.689, 11032.099999999999, 11061.333333333334, 11127.533333333333, 11192.696666666665, 11267.696666666665, 11654.875233333334, 11721.866666666667, 12175.75, 14570.270666666669, 14824.0],
  ">10h / month": [4693.333333333333, 5333.333333333333, 6100.0, 6345.3, 6550.0, 7874.046666666666, 8018.666666666667, 8082.233333333334, 8240.586666666668, 8355.037766666666, 8534.346666666666, 9437.205, 9843.766666666668, 10525.254666666668, 10559.153333333334, 10976.353333333333, 11037.2976, 11491.179999999998, 11500.298333333332, 12603.436666666666, 12639.5, 13401.526666666667]
}

let ADMISSION_SALARY = {
  "<=93": [1911.3333333333333, 2200.0, 2250.0, 2300.0, 2600.0, 2689.3333333333335, 2746.6666666666665, 2760.0, 2806.6666666666665, 2923.7333333333336, 2944.3333333333335, 2986.6666666666665, 3000.0, 3122.3333333333335, 3133.3333333333335, 3133.3333333333335, 3146.6666666666665, 3213.3333333333335, 3253.3333333333335, 3253.3333333333335, 3280.0, 3306.6666666666665, 3400.0, 3461.3333333333335, 3466.6666666666665, 3493.3333333333335, 3573.3333333333335, 3654.0, 3711.0, 3766.6666666666665, 3781.85, 3859.3333333333335, 4000.0, 4066.6666666666665, 4096.0, 4230.150000000001, 4602.708333333333, 4778.55, 5011.666666666667, 5049.666666666667, 5173.203333333333, 5483.935999999999, 5972.666666666667, 5975.540666666667, 6067.0, 6593.133333333334, 6695.316666666667, 7437.116666666666, 8728.946266666666, 9027.06, 11060.0],
  ">93": [1800.0, 2200.0, 2503.0, 2506.6666666666665, 2645.3333333333335, 2800.0, 2838.486666666666, 2878.133333333333, 2954.6666666666665, 2986.6666666666665, 2986.6666666666665, 3004.3333333333335, 3040.0, 3040.0, 3043.3333333333335, 3100.0, 3184.0, 3200.0, 3266.6666666666665, 3306.6666666666665, 3333.3333333333335, 3360.0, 3466.6666666666665, 3486.6666666666665, 3496.0, 3500.0, 3626.6666666666665, 3626.6666666666665, 3719.7333333333336, 3791.816666666667, 3800.0, 3982.8799999999997, 4000.0, 4062.6666666666665, 4290.166666666667, 4325.150000000001, 4397.493333333333, 4400.0, 4632.675, 4750.8933333333325, 4792.833333333333, 4853.333333333333, 5168.583333333333, 5543.7119999999995, 5760.306, 5819.833333333333, 5928.583333333333, 6034.128333333333, 6097.213333333333, 6212.083333333333, 6257.766666666666, 6700.596666666667, 6774.616666666666, 6983.185, 6989.787766666667, 7131.3240000000005, 7792.133333333334, 7834.266666666666, 8272.15]
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

let GENDER_SALARY = [{
  'x': '1st',
  'value': [19.6667, 21.92304348]
}, {
  'x': '2nd',
  'value': [27.66, 32.62059524]
}, {
  'x': '3rd',
  'value': [27.9, 40.29829268]
}, {
  'x': '4th',
  'value': [43.7, 55.37990244]
}, {
  'x': '5th',
  'value': [48.65, 58.603625]
}, {
  'x': '6th',
  'value': [47.59, 63.1170625]
}]

let FAVOURITE_LOCATION = [{
  "name": "California",
  "value": 64,
  }, {
  "name": "East Coast Canada",
  "value": 25,
  }, {
  "name": "West Coast Canada",
  "value": 7,
  }, {
  "name": "PNW USA",
  "value": 8,
  }, {
  "name": "East Coast USA",
  "value": 12,
  }, {
  "name": "Outside NA",
  "value": 3,
}]

let COMPANY_WORK_COUNT = {
 "data": {
  "Khan Academy": 1,
  "500px":	1,
  "A Thinking Ape":	1,
  "Abra":	1,
  "Addepar":	2,
  "ADP":	1,
  "Advanced Micro Devices (AMD)":	1,
  "Alation":	1,
  "AMD":	2,
  "Apple":	2,
  "ARUP":	1,
  "Autonomic":	1,
  "Auvik Networks Inc":	1,
  "Avidbots Corp":	1,
  "Bank of America Merrill Lynch":	1,
  "Bank of Montreal":	1,
  "Behaviour Interactive":	2,
  "BigRoad":	1,
  "Bloomberg":	8,
  "Bluejay Networks":	1,
  "BMO Capital Markets":	1,
  "Bunch":	1,
  "Cambridge Mobile Telematics":	1,
  "Capco":	1,
  "Capital One":	2,
  "Carrot":	1,
  "CBC/Radio-Canada":	1,
  "Ceridian": 	1,
  "CIBC":	3,
  "Citadel Securities":	6,
  "Climax Media":	1,
  "cognite":	1,
  "ConsenSys":	1,
  "Cruise LLC":	1,
  "Ctrl V":	1,
  "CuteTax Inc":	1,
  "Dapper Labs":	1,
  "darkmatter":	1,
  "Databricks":	3,
  "Datadog":	1,
  "DF/Net Software":	1,
  "ESCRYPT Canada":	2,
  "eSentire":	1,
  "Facebook":	16,
  "Faire":	2,
  "Finastra":	2,
  "Focal Healthcare":	2,
  "Focal Systems":	1,
  "Genesys":	2,
  "Globality Inc":	1,
  "Google":	7,
  "Grain Discovery":	1,
  "HealthIM":	1,
  "Horizons School of Technology":	1,
  "HubHead":	1,
  "Hudson River Trading":	1,
  "Humu":	1,
  "IBM":	3,
  "Imply":	1,
  "Infor":	1,
  "Jane Street":	7,
  "John Hancock":	1,
  "Khazanah": 	1,
  "Kik Interactive":	1,
  "Klyck.io":	1,
  "Lambton Colloge":	1,
  "LCBO":	2,
  "Lending Loop":	1,
  "Lens Immersive":	2,
  "Lifion By ADP":	1,
  "Lightspeed":	1,
  "Loblaw Digital":	1,
  "Localintel":	1,
  "Lyft":	2,
  "LyricFind":	1,
  "Manulife":	1,
  "Medley":	1,
  "Microsoft":	2,
  "Miovision":	3,
  "MongoDB":	1,
  "Mozilla Corporation":	1,
  "National Instruments":	1,
  "Nuance Communications":	1,
  "Nymi":	1,
  "ODAIA Intelligence":	1,
  "OICR":	1,
  "OLAP Vision":	1,
  "OMERS":	1,
  "Ontario Teachers' Pension Plan":	1,
  "Oracle":	4,
  "Pagerduty":	1,
  "Paper Co":	1,
  "PlanGrid":	2,
  "Playstation":	1,
  "Postmates":	2,
  "Pratt and Whitney":	1,
  "PureFacts":	1,
  "PVelocity":	1,
  "QuEra Computing":	2,
  "Quizlet": 	1,
  "Quora":	1,
  "Qwantech":	1,
  "Rangle.io":	1,
  "Rave Inc":	2,
  "Rediron Technologies":	1,
  "Reebee":	1,
  "Rewind.io":	1,
  "RocScience":	1,
  "Safe Software":	1,
  "SAP":	2,
  "Self-employed under E-Coop: Tutturu":	1,
  "Shape Security":	1,
  "Shopify":	9,
  "Snap Inc":	2,
  "Snowflake":	1,
  "Solace":	1,
  "Spatial":	2,
  "Splunk":	7,
  "Sprout":	1,
  "Square":	1,
  "Square Enix Montreal":	1,
  "SSIMWAVE":	1,
  "StackAdapt":	1,
  "Stripe":	4,
  "Taplytics":	1,
  "Tealbook":	1,
  "Telus":	1,
  "The Trade Desk":	2,
  "Thomson Reuters":	1,
  "ThoughtWire":	1,
  "TripAdvisor":	1,
  "Tulip Retail":	1,
  "Tumblr":	1,
  "Ubisoft Toronto":	2,
  "Uken Games":	1,
  "University of Toronto":	1,
  "UWaterloo":	1,
  "Veeva Systems":	4,
  "Veriday":	1,
  "Vigilant - DRW":	1,
  "Wayfair":	1,
  "White rabbit.ai":	1,
  "Wind River":	1,
  "Wish":	6,
  "Woodbine Entertainment Group":	2,
  "Yahoo":!	5,
  "YugaByte":	2,
  "YuJa":	1,
  "Zazzle":	1,
  "ZeMind":	1,
  "Zynga":	1,
},
 "metadata": {}
};

let FAVOURITE_COMPANIES = {
 "data": [
    [ "Grand Rounds", 1.0, 1 ], 
    

    
  ], "metadata": {}
}

let GRADE_SALARY = [
// coop 1
{"y": 20, "x":	85, "term":0, "size":8},
{"y": 20, "x":	80, "term":0, "size":7},

{"y": 20, "x":	95, "term":0, "size":5},
{"y": 20, "x":	70, "term":0, "size":3},
{"y": 18, "x":	75, "term":0, "size":3},
{"y": 25, "x":	85, "term":0, "size":3},
{"y": 15, "x":	90, "term":0, "size":2},
{"y": 20, "x":	90, "term":0, "size":2},

  {"y": 20, "x":	65, "term":0, "size":2},
  {"y": 40, "x":	70, "term":0, "size":1},
  {"y": 43, "x":	75, "term":0, "size":1},
  {"y": 24, "x":	80, "term":0, "size":1},
  {"y": 32, "x":	80, "term":0, "size":1},
  {"y": 5, "x":	85, "term":0, "size":1},
  {"y": 43, "x":	85, "term":0, "size":1},
  {"y": 24, "x":	90, "term":0, "size":1},
  {"y": 46, "x":	95, "term":0, "size":1},

//coop 2
{"y": 20, "x":	90, "term":1, "size":5},

{"y": 20, "x":	85, "term":1, "size":4},
{"y": 25, "x":	85, "term":1, "size":3},
{"y": 20, "x":	80, "term":1, "size":3},
{"y": 45, "x":	95, "term":1, "size":3},
{"y": 60, "x":	95, "term":1, "size":2},
{"y": 50, "x":	90, "term":1, "size":2},
{"y": 20, "x":	75, "term":1, "size":2},
{"y": 25, "x":	80, "term":1, "size":2},
{"y": 35, "x":	85, "term":1, "size":2},
{"y": 47, "x":	85, "term":1, "size":2},
{"y": 25, "x":	90, "term":1, "size":2},

  {"y": 22, "x":	65, "term":1, "size":1},
  {"y": 17, "x":	70, "term":1, "size":1},
  {"y": 18, "x":	70, "term":1, "size":1},
  {"y": 40, "x":	70, "term":1, "size":1},
  {"y": 28, "x":	80, "term":1, "size":1},
  {"y": 38, "x":	80, "term":1, "size":1},
  {"y": 55, "x":	80, "term":1, "size":1},
  {"y": 28, "x":	85, "term":1, "size":1},
  {"y": 39, "x":	85, "term":1, "size":1},
  {"y": 55, "x":	85, "term":1, "size":1},
  {"y": 30, "x":	90, "term":1, "size":1},
  {"y": 42, "x":	90, "term":1, "size":1},
  {"y": 65, "x":	90, "term":1, "size":1},
  {"y": 22, "x":	95, "term":1, "size":1},
//coop 3
{"y":25, "x":	90, "term":2, "size":4},
{"y":25, "x":	85, "term":2, "size":4},
{"y":20, "x":	75, "term":2, "size":3},
{"y":45, "x":	85, "term":2, "size":3},
{"y":45, "x":	95, "term":2, "size":3},
{"y":52, "x":	85, "term":2, "size":2},
{"y":55, "x":	85, "term":2, "size":2},
{"y":30, "x":	90, "term":2, "size":2},
{"y":55, "x":	90, "term":2, "size":2},
{"y":60, "x":	65, "term":2, "size":2},
{"y":30, "x":	75, "term":2, "size":2},

  {"y":24, "x":	65, "term":2, "size":1},
  {"y":23, "x":	70, "term":2, "size":1},
  {"y":65, "x":	70, "term":2, "size":1},
  {"y":25, "x":	75, "term":2, "size":1},
  {"y":35, "x":	75, "term":2, "size":1},
  {"y":65, "x":	75, "term":2, "size":1},
  {"y":20, "x":	80, "term":2, "size":1},
  {"y":30, "x":	80, "term":2, "size":1},
  {"y":40, "x":	80, "term":2, "size":1},
  {"y":48, "x":	80, "term":2, "size":1},
  {"y":69, "x":	80, "term":2, "size":1},
  {"y":30, "x":	85, "term":2, "size":1},
  {"y":35, "x":	85, "term":2, "size":1},
  {"y":25, "x":	95, "term":2, "size":1},
  {"y":36, "x":	95, "term":2, "size":1},
  {"y":78, "x":	95, "term":2, "size":1},

//coop 4
{"y":60, "x":	90, "term":3, "size":5},
{"y":60, "x":	95, "term":3, "size":3},
{"y":65, "x":	95, "term":3, "size":2},

{"y":55, "x":	80, "term":3, "size":2},
{"y":25, "x":	85, "term":3, "size":2},
{"y":30, "x":	85, "term":3, "size":2},
{"y":50, "x":	90, "term":3, "size":2},

  {"y":26, "x":	75, "term":3, "size":1},
  {"y":48, "x":	75, "term":3, "size":1},
  {"y":72, "x":	75, "term":3, "size":1},
  {"y":52, "x":	80, "term":3, "size":1},
  {"y":62, "x":	80, "term":3, "size":1},
  {"y":22, "x":	85, "term":3, "size":1},
  {"y":35, "x":	85, "term":3, "size":1},
  {"y":46, "x":	85, "term":3, "size":1},
  {"y":48, "x":	85, "term":3, "size":1},
  {"y":53, "x":	85, "term":3, "size":1},
  {"y":65, "x":	85, "term":3, "size":1},
  {"y":72, "x":	85, "term":3, "size":1},
  {"y":78, "x":	85, "term":3, "size":1},
  {"y":22, "x":	90, "term":3, "size":1},
  {"y":25, "x":	90, "term":3, "size":1},
  {"y":30, "x":	90, "term":3, "size":1},
  {"y":45, "x":	90, "term":3, "size":1},
  {"y":56, "x":	90, "term":3, "size":1},
  {"y":65, "x":	90, "term":3, "size":1},
  {"y":115, "x":	90, "term":3, "size":1},
  {"y":25, "x":	95, "term":3, "size":1},
  {"y":33, "x":	95, "term":3, "size":1},
  {"y":39, "x":	95, "term":3, "size":1},
  {"y":52, "x":	95, "term":3, "size":1},
  {"y":55, "x":	95, "term":3, "size":1},
  {"y":70, "x":	95, "term":3, "size":1},
  {"y":78, "x":	95, "term":3, "size":1},
  {"y":84, "x":	95, "term":3, "size":1},
  {"y":89, "x":	95, "term":3, "size":1},
//coop 5
{"y":60, "x":	85, "term":4, "size":4},
{"y":65, "x":	85, "term":4, "size":2},
{"y":65, "x":	90, "term":4, "size":2},

{"y":29, "x":	75, "term":4, "size":2},
{"y":55, "x":	75, "term":4, "size":2},
{"y":40, "x":	85, "term":4, "size":2},
{"y":50, "x":	85, "term":4, "size":2},

  {"y":65, "x":	70, "term":4, "size":1},
  {"y":0, "x":	75, "term":4, "size":1},
  {"y":36, "x":	75, "term":4, "size":1},
  {"y":65, "x":	75, "term":4, "size":1},
  {"y":30, "x":	80, "term":4, "size":1},
  {"y":55, "x":	80, "term":4, "size":1},
  {"y":59, "x":	80, "term":4, "size":1},
  {"y":65, "x":	80, "term":4, "size":1},
  {"y":24, "x":	85, "term":4, "size":1},
  {"y":36, "x":	85, "term":4, "size":1},
  {"y":56, "x":	85, "term":4, "size":1},
  {"y":105, "x":	85, "term":4, "size":1},
  {"y":130, "x":	85, "term":4, "size":1},
  {"y":48, "x":	90, "term":4, "size":1},
  {"y":28, "x":	95, "term":4, "size":1},
  {"y":33, "x":	95, "term":4, "size":1},
  {"y":37, "x":	95, "term":4, "size":1},
  {"y":50, "x":	95, "term":4, "size":1},
  {"y":53, "x":	95, "term":4, "size":1},
  {"y":65, "x":	95, "term":4, "size":1},
  {"y":85, "x":	95, "term":4, "size":1},
  {"y":88, "x":	95, "term":4, "size":1},
  {"y":100, "x":	95, "term":4, "size":1},
  {"y":111, "x":	95, "term":4, "size":1},
  {"y":26, "x":	100, "term":4, "size":1},
  {"y":31, "x":	100, "term":4, "size":1},
//coop 6
{"y":40, "x":	90, "term":5, "size":6},
{"y":40, "x":	95, "term":5, "size":6},
{"y":35, "x":	90, "term":5, "size":4},
{"y":30, "x":	90, "term":5, "size":2},
{"y":95, "x":	90, "term":5, "size":2},
{"y":110, "x":	95, "term":5, "size":2},

  {"y":30, "x":	85, "term":5, "size":2},
  {"y":34, "x":	85, "term":5, "size":1},
  {"y":44, "x":	85, "term":5, "size":1},
  {"y":130, "x":	85, "term":5, "size":1},
  {"y":158, "x":	85, "term":5, "size":1},
  {"y":25, "x":	90, "term":5, "size":1},
  {"y":44, "x":	90, "term":5, "size":1},
  {"y":35, "x":	95, "term":5, "size":1},
  {"y":65, "x":	95, "term":5, "size":1},
  {"y":71, "x":	95, "term":5, "size":1},
  {"y":100, "x":	95, "term":5, "size":1},
  {"y":130, "x":	95, "term":5, "size":1},
  {"y":42, "x":	100, "term":5, "size":1},
]

let MISSED_INTERVIEW = [{
  "name": "Yes",
  "value": 11,
},{
  "name": "No",
  "value": 25
}]

let LATE_INTERVIEW = [{
"name": "Yes",
"value": 16,
},{
"name": "No",
"value": 19
}]

let LATE_INTERVIEWER = [{
"name": "Yes",
"value": 34,
},{
"name": "No",
"value": 2
}]

let FAVOURITE_COOP = {
  "ADP":	1,
  "Alarm.com":	1,
  "Apple":	1,
  "Bloomberg":	1,
  "Facebook":	5,
  "Google":	2,
  "Grain Discovery":	1,
  "Humu":	1,
  "Jane Street":	2,
  "Manulife":	1,
  "MongoDB":	1,
  "Nvidia":	1,
  "QuEra Computing":	1,
  "Shopify":	2,
  "Splunk":	2,
  "Stripe":	1,
  "The Trade Desk":	1,
  "whiterabbit.ai":	1,
  "Wish":	3,
  "Zazzle":	1,
  "Zynga":	1,
}

let FAVOURITE_COOP_REASON = [{
    "name": "Culture & Environment", 
    "value":	7},
  {"name": "Pay", 
    "value":	7},
  {"name": "Perks", 
    "value":	6},
  {"name": "Work & Projects", 
    "value":	13},
  {"name": "Location", 
    "value":	2},
  {"name": "Team & Co-workers", 
    "value":	6},
  {"name": "Friendships", 
    "value":	7},
  {"name": "Intern Experience", 
    "value":	6
}]

export {
  SALARY,
  WORK_LOCATION,
  FAVOURITE_LOCATION,
  // AGE_SALARY,
  HACKATHON_SALARY,
  SIDE_SALARY,
  SIDE_SALARY_2,
  ADMISSION_SALARY,
  COMPANY_WORK_COUNT,
  FAVOURITE_COMPANIES,
  GRADE_SALARY,
  GENDER_SALARY,
  MISSED_INTERVIEW,
  LATE_INTERVIEW,
  LATE_INTERVIEWER,
  FAVOURITE_COOP,
  FAVOURITE_COOP_REASON
}
