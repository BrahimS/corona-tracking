import React, { useState, useEffect } from "react";
import { getDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
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

	console.log(confirmed, recovered, deaths);

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ["Infected", "recovered", "deaths"],
				datasets: [
					{
						label: "People",
						backgroundColor: ["orange", "green", "red"],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { diplay: true, text: `Current state in ${country}` },
			}}
		/>
	) : null;
	return (
		<div className={styles.container}> {country ? barChart : lineChart}</div>
	);
};

export default Chart;
