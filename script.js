// SALES TREND

const salesCtx = document.getElementById('salesChart');

new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
            label: 'Sales (Million Rp)',
            data: [850,920,980,1050,1120,1245],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37,99,235,0.2)',
            fill: true,
            tension: 0.4
        }]
    }
});


// PROFIT TREND

const profitCtx = document.getElementById('profitChart');

new Chart(profitCtx, {
    type: 'bar',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
            label: 'Profit (Million Rp)',
            data: [220,250,280,300,330,355],
            backgroundColor: '#16a34a'
        }]
    }
});
