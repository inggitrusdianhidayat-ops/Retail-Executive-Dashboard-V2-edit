const ctx = document.getElementById('salesChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun'
        ],
        datasets: [{
            label: 'Sales (Million Rp)',
            data: [
                850,
                920,
                980,
                1050,
                1120,
                1245
            ],
            borderWidth: 3,
            tension: 0.4
        }]
    }
});
