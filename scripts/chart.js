let wpns = [13,14,16,16,20,20,22,19,22,22,24,21,24,24,23,23,26,33,28,28,29,27,31,30,31,31,34,30,27,31,34,32,32,33,36,34,35,35,39,37,40,39,37,39,37,36,40,40,40,40,41,41,41,45,45,41,42,43,34.621343499657,40.06789180330230,42.947949207118600,39.58472498555640,40.92495918835550,40.92495918835550,37.520285769526200,43.14164004581850,39.74299766731480,39.74299766731480,39.68779722731810,39.62342368121910,41.04747826936900,45.49182575120050,38.334903594213500,43.84247794530790,41.01194986895740,46.32997621307850,44.56813963708650,41.83457059670960,43.113536660832200,41.947933256643600,45.942009292432900,43.04976599867720,43.286707730428300,43.625229703003600,44.180868423300800,44.342734312342700,42.017832600168700,46.57823599277670,45.37396854524640,47.53725029308910,48.64861933263440,45.9357597316621,48.49217779301180,50.060657738137000,43.11152259764490,44.349335025617900,45.34417023655120,43.71736973813790,47.41893302755970,45.576966889773400,44.900735275708800,45.91747557273060,45.200780595242000,47.06070273680600,44.950178019312700,49.537742809631100,48.49231364475570,43.86197900394160,45.89084655029400,44.31637265658180,45.48602593536090,49.311948684728100,45.438448714378300,46.74507621412200,45.57676184675510,46.88868761053890,45.23080298927930,49.378621914742400,47.98488082844880,46.98918678419500,48.51278883775780,47.42147327160260,49.33125589394350,47.75256244863400,47.24014196660740,46.77280908166190,49.71722561225760,43.99495027306600,49.151088991580900,49.55349881219660,49.86742816232480,49.033375174750700,50.63085696146950,47.378716180334900,51.35286679309680,49.9429539620232,51.62525039510150,46.883851443325500,50.50511819243700,50.78361211742230,48.70252203450000,53.102972790376500,47.85407669390310,49.595902188225700,53.50762813697130,48.07582580484820,52.00006034514720,48.06669501545910,50.07061324431010,46.33310813032370,50.069382419114500,54.08091571984550,51.372008872623000,50.774774762692900,51.57707257524170,50.226848915824900];
let dates = [new Date(220,3,11),new Date(220,3,12),new Date(220,3,15),new Date(220,3,16),new Date(220,3,18),new Date(220,3,20),new Date(220,3,21),new Date(220,3,21),new Date(220,3,22),new Date(220,3,23),new Date(220,3,23),new Date(220,3,24),new Date(220,3,25),new Date(220,3,26),new Date(220,3,27),new Date(220,3,29),new Date(220,3,30),new Date(220,4,1),new Date(220,4,2),new Date(220,4,4),new Date(220,4,6),new Date(220,4,7),new Date(220,4,8),new Date(220,4,9),new Date(220,4,10),new Date(220,4,11),new Date(220,4,12),new Date(220,4,16),new Date(220,4,17),new Date(220,4,18),new Date(220,4,18),new Date(220,4,19),new Date(220,4,20),new Date(220,4,21),new Date(220,4,22),new Date(220,4,23),new Date(220,4,25),new Date(220,4,26),new Date(220,4,27),new Date(220,4,28),new Date(220,4,29),new Date(220,4,30),new Date(220,5,1),new Date(220,5,2),new Date(220,5,3),new Date(220,5,4),new Date(220,5,5),new Date(220,5,6),new Date(220,5,11),new Date(220,5,12),new Date(220,5,13),new Date(220,5,14),new Date(220,5,15),new Date(220,5,18),new Date(220,5,19),new Date(220,5,20),new Date(220,5,21),new Date(220,5,24),new Date(220,5,25),new Date(220,5,25),new Date(220,5,26),new Date(220,5,27),new Date(220,5,27),new Date(220,5,27),new Date(220,5,28),new Date(220,5,28),new Date(220,5,28),new Date(220,5,28),new Date(220,5,29),new Date(220,5,30),new Date(220,5,30),new Date(220,6,1),new Date(220,6,1),new Date(220,6,2),new Date(220,6,2),new Date(220,6,3),new Date(220,6,6),new Date(220,6,8),new Date(220,6,8),new Date(220,6,15),new Date(220,6,15),new Date(220,6,16),new Date(220,6,16),new Date(220,6,16),new Date(220,6,16),new Date(220,6,17),new Date(220,6,17),new Date(220,6,21),new Date(220,6,21),new Date(220,6,22),new Date(220,6,22),new Date(220,6,22),new Date(220,6,22),new Date(220,6,23),new Date(220,6,23),new Date(220,6,23),new Date(220,6,24),new Date(220,6,24),new Date(220,6,24),new Date(220,6,25),new Date(220,6,25),new Date(220,6,25),new Date(220,6,29),new Date(220,6,29),new Date(220,6,29),new Date(220,6,30),new Date(220,6,30),new Date(220,6,30),new Date(220,7,9),new Date(220,7,9),new Date(220,7,9),new Date(220,7,15),new Date(220,7,15),new Date(220,7,15),new Date(220,7,20),new Date(220,7,20),new Date(220,7,21),new Date(220,7,21),new Date(220,7,21),new Date(220,7,24),new Date(220,7,24),new Date(220,7,24),new Date(220,7,25),new Date(220,7,25),new Date(220,7,25),new Date(220,7,26),new Date(220,7,26),new Date(220,7,26),new Date(220,7,28),new Date(220,7,28),new Date(220,7,28),new Date(220,7,30),new Date(220,7,30),new Date(220,7,30),new Date(220,7,31),new Date(220,7,31),new Date(220,7,31),new Date(220,7,31),new Date(220,8,3),new Date(220,8,3),new Date(220,8,3),new Date(220,8,4),new Date(220,8,4),new Date(220,8,4),new Date(220,8,5),new Date(220,8,5),new Date(220,8,7),new Date(220,8,7),new Date(220,8,10),new Date(220,8,10),new Date(220,8,10),new Date(220,8,13),new Date(220,8,13),new Date(220,8,13),new Date(220,8,13),new Date(220,8,14)];

var ctx = document.getElementById('myChart').getContext('2d');
const data = {
    labels: dates,
    datasets: [{
        fill: false,
        label: 'Page Views',
        data: wpns,
        borderColor: '#fe8b36',
        backgroundColor: '#fe8b36',
        lineTension: 1,
    }]
};
const options = {
    type: 'line',
    data: data,
    options: {
        fill: false,
        responsive: true,
        scales: {
            xAxes: [{
                // type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Date",
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Page Views",
                }
            }]
        }
    }
};


var myc = new Chart(ctx, options);