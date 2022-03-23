let data = {
    "data": [
        {
            "month": "03.2020",
            "totalNetUSD": 26038,
        },
        {
            "month": "02.2020",
            "totalNetUSD": 32239,
        },
        {
            "month": "01.2020",
            "totalNetUSD": 27872,
        },
    ]
};

for (var i = 0; i < data.data.length; i++) {
    data.data[i].id = i + 1;
}

data.columns = [
    {
        name: 'Month',
        selector: row => row.month,
    },
    {
        name: 'Total Net USD',
        selector: row => row.totalNetUSD,
        right: true,
    }
];

export default data