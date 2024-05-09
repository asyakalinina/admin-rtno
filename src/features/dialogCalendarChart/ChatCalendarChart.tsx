// ChatCalendarChart.tsx
import React from 'react';
import {Bar} from 'react-chartjs-2';
import style from "./style.module.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, ChartOptions,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export interface ChatData {
    date: string;
    count: number;
}

interface ChatCalendarChartProps {
    chatData: ChatData[];
}

const ChatCalendarChart: React.FC<ChatCalendarChartProps> = ({chatData}) => {
    const chartProps: any = {
        options: {
            height: 300,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    enabled: true
                }
            },
            responsive: true,
        },
        data: {
            labels: chatData.map(d => d.date),
            datasets: [
                {
                    label: 'Number of chats',
                    data: chatData.map(d => d.count),
                    backgroundColor: 'rgb(111,116,168)',
                }
            ],
        },
    };

    return (
        <div className={style.chartContainer}>
            <Bar {...chartProps} />
        </div>
    );
};

export default ChatCalendarChart;
