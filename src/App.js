import React, { Component } from "react";
import { getData } from "./api";

import { Cards, Chart, CountriesPicker } from "./components/index";
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
		console.log(country);
		// fetch the data
		// set the state
	};
	render() {
		const { data } = this.state;
		return (
			<div className={styles.container}>
				<Cards data={data} />
				<CountriesPicker handleContryChange={this.handleContryChange} />
				<Chart />
			</div>
		);
	}
}

export default App;
