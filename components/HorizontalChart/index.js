import styles from './HorizontalChart.module.css'
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

export default function HorizontalChart(){
    const[chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels:["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",],
            datasets: [
                {
                    label: 'Data 1',
                    data: [12345, 21321, 32311, 33231, 42313, 53122, 11890],
                    borderColor:'rgb(53,162,235)',
                    backgroundColor: 'rgb(22,162,235,0.4)'
                },
                {
                    label: 'Data 2',
                    data: [12345, 23321, 22341, 33231, 42313, 31122, 2890],
                    borderColor:'rgb(53,162,235)',
                    backgroundColor: 'rgb(153,122,235,0.4)'
                },
                {
                    label: 'Data 3',
                    data: [12345, 23121, 31341, 33231, 42313, 50022, 21190],
                    borderColor:'rgb(53,162,235)',
                    backgroundColor: 'rgb(53,162,235,0.4)'
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
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
