import axios from "axios";

const apiUrl = "https://covid19.mathdro.id/api";

// get Data from the API

export const getData = async () => {
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(apiUrl);
		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {}
};

export const getDailyData = async () => {
	try {
		const { data } = await axios.get(`${apiUrl}/daily`);
		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return modifiedData;
	} catch (error) {}
};
