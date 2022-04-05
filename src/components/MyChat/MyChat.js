import React from "react";
// import {
//   CartesianGrid,
//   Legend,
//   Line,
//   LineChart,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

import "./MyChat.css";

const MyChat = (props) => {
    // const {month, investment, sell} = props.data;
        console.log(props.item);

  return (
    <div>
      {/* <LineChart className="line-chart">
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis chatDataKey={month} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type={"monotone"} chatDataKey={sell} stroke="#8884d8" />
        <Line type={"monotone"} chatDataKey={investment} stroke="#82ca9d" />
      </LineChart> */}
    </div>
  );
};

export default MyChat;
