import React, { Component } from "react";
import { getData } from "./api";

import { Cards, Chart, Countries } from "./components/index";
import styles from "./App.module.css";

class App extends Component {
	state = {
		data: {},
	};
	async componentDidMount() {
		const returnedData = await getData();
		this.setState({ data: returnedData });
	}
	render() {
		const { data } = this.state;
		return (
			<div className={styles.container}>
				<Cards data={data} />
				<Countries />
				<Chart />
			</div>
		);
	}
}

export default App;
