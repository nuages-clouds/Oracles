import React, { Component, useState } from 'react';

import { tickerABI } from './tickerABI.js';

import './App.css';
import Web3 from 'web3';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import StockList from './components/StockList/StockList';
import { tickerContract } from './EthereumSetup';

class App extends Component {
	componentWillMount() {
		this.loadBlockchainData();
	}

	async loadBlockchainData() {
		const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
		// const accounts = await web3.eth.getAccounts();
		const contractAddress = '0x90E1290fDB16aDEE48C21d7c591BE4de493e97ee'; //Contract Address
		const tickerContract = new web3.eth.Contract(tickerABI, contractAddress);
		this.setState({ account: accounts[0] });
	}
	constructor(props) {
		super(props);

		this.state = {
			stocks: [],
			term: '',
			value: '',
			account: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	handleClick(e) {
		if (e) e.preventDefault();
		this.setState({
			value: '',
			term: this.state.value
		});

		const term = this.state.value;
		const key = 'BX57J5NBZOKN101O';
		const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${term}&apikey=${key}`;

		axios
			.get(url)
			.then(res => {
				// retrieves price and volume data for a particular stock symbol
				const objArray = Object.entries(res.data['Global Quote']);
				const stocks = [objArray[0][1], objArray[4][1], objArray[5][1]];
				//console.log(stocks);

				this.setState((state, props) => {
					return {
						...state,
						stocks
					};
				});
			})
			.catch(error => console.log(error));
	}

	
	const setData = async e => {
		e.preventDefault();
		const accounts = await window.ethereum.enable();
		const account = accounts[0];
		const gas = await tickerContract.methods.setGreeting(greeting).estimateGas();
		const result = await tickerContract.methods
			.setGreeting(greeting)
			.send({ from: account, gas });
		console.log(result);
	};

	const getData = async e => {
		e.preventDefault();
		const result = await tickerContract.methods.getGreeting().call();

		console.log(result);
	};

	//

	render() {
		let stocks = this.state.stocks;
		const value = this.state.value;

		return (
			<div className='App'>
				<h1 className='App__Title'>Stock Symbol</h1>
				<SearchBar
					value={value}
					onChange={this.handleChange}
					onClick={this.handleClick}
				/>
				<StockList stockItem={this.state.stocks} />
				<div>
					<p>Your account: {this.state.account}</p>
				</div>

				
				<br />
				<button onClick={getData} type='button'>
					Get Data
				</button>
			</div>
		);
	}
}

export default App;

