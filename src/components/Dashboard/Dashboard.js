import React from 'react';
import { useChartData } from '../../hooks/useReview';
import MyChat from '../MyChat/MyChat';


const Dashboard = () => {
    const [chartData, setChartData] = useChartData();
    const chartItem = chartData;
    
    return (
        <div>
            <h1>Dashboard</h1>
           <div>
               {
                   chartItem.map(item => <MyChat
                   key={item.month}
                   ></MyChat>)
               }
           </div>
        </div>
    );
};

export default Dashboard;