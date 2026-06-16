const profitCtx =
document.getElementById('profitChart');

new Chart(profitCtx,{
    type:'line',
    data:{
        labels:[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun'
        ],
        datasets:[{
            label:'Profit (Million Rp)',
            data:[
                45,
                55,
                60,
                52,
                70,
                80
            ],
            borderWidth:3,
            tension:.4
        }]
    }
});
