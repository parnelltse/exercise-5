import styles from './VertivalChart.module.css'
import { Bar } from 'react-chartjs-2'

import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function VerticalChart(){
    const[chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels:["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",],
            datasets: [
                {
                    label: 'Scale $',
                    data: [12345, 231321, 32341, 33231, 42313, 53122, 21890],
                    borderColor:'rgb(53,162,235)',
                    backgroundColor: 'rgb(53,162,235,0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title:{
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRation: false,
            responsive: true
        })

    }, [])

    return(
        <>
            <Bar data={chartData} options={chartOptions} style= {{width: "500px", height: "300px"}}/>
        </>
    )
}
