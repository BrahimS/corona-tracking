import React, { Component } from "react";
import { getData } from "./api";

import { Cards, Chart, CountriesPicker } from "./components/index";
import covdImage from "../src/img/adam-niescioruk-Z9arfr0f248-unsplash.jpg";
import styles from "./App.module.css";

class App extends Component {
	state = {
		data: {},
		country: "",
	};
	async componentDidMount() {
		const returnedData = await getData();
		this.setState({ data: returnedData });
	}

	handleContryChange = async (country) => {
		const fechedData = await getData(country);
		console.log(fechedData);
		// fetch the data
		// set the state
		this.setState({ data: fechedData, country: country });
	};
	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<img className={styles.image} src={covdImage} alt="coronavirus" />
				<Cards data={data} />
				<CountriesPicker handleContryChange={this.handleContryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
