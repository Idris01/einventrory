import {
    Doughnut,
    Line
} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
)

export default function LineChart () {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales',
                data: [19002, 4718, 28630, 251987, 2211, 7251],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.2)'
            },
            {
                label: 'Purchases',
                data: [1000, 4300, 2102, 7280, 13097, 2992,],
                borderColor: '#2ecc71',
                backgroundColor: 'rgba(46, 204, 113, 0.2)'
            },
            {
                label: 'Revenue',
                data: [12000, 2780, 16982, 17233, 251, 3271,],
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.2)'
            },
        ]
    }

    const options = {
        plugins: {
            legend: {
                position: true
            }
        },
        scales: {
            yAxis: {
                min: 3,
                max: 6
            }
        }
    };
    

    return <Line data={data} options={options} />
}