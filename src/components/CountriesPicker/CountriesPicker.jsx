import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api/index";

import styles from "./CountriesPicker.module.css";

const CountriesPicker = ({ handleContryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);
	useEffect(() => {
		const fetchApi = async () => {
			setFetchedCountries(await fetchCountries());
		};
		fetchApi();
	}, [setFetchedCountries]);
	console.log(fetchedCountries);
	return (
		<FormControl className={styles.formControl}>
			<NativeSelect
				dafaultValue=""
				onChange={(event) => handleContryChange(event.target.value)}
			>
				<option value="global"> Global</option>
				{fetchedCountries.map((country, i) => (
					<option key={i} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountriesPicker;
