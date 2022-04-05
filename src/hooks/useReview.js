import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect ( () => {
        fetch('fakeComments.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);
    return [reviews, setReviews];
}; 

const useChartData = () => {
    const [chartData, setChartData] = useState();
    useEffect(() => {
        fetch('chatData.json')
        .then(res => res.json())
        .then(data => setChartData(data));
    }, [])
    return [chartData, setChartData];
};
export {useReview, useChartData };