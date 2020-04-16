import React, { useState, useEffect } from "react";
import { getDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = () => {
	const [dailyData, setDailyData] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await getDailyData());
		};
		console.log(dailyData);
		fetchAPI();
	}, []);
	const lineChart = dailyData.length ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						label: "Infected",
						borderColor: "orange",
						fill: true,
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: "Deaths",
						backgroundColor: "red",
						fill: true,
					},
				],
			}}
		/>
	) : null;
	return <div className={styles.container}> {lineChart}</div>;
};

export default Chart;
