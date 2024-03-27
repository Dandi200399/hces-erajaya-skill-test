// Public/js/dashboard.js

document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai filter dari form
    var formData = new FormData(this);
    
    // Kirim permintaan AJAX ke endpoint /dashboard/data
    fetch('/dashboard/data', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Buat chart dengan data yang diterima dari backend
        createChart(data);
    })
    .catch(error => console.error('Error:', error));
});

function createChart(data) {
    // Contoh penggunaan Chart.js untuk membuat pie chart
    var ctx = document.getElementById('chartContainer').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: data.labels, // Label untuk setiap bagian pie
            datasets: [{
                label: 'Jumlah Karyawan',
                data: data.values, // Jumlah karyawan untuk setiap bagian pie
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
