import React from 'react';
import axios from 'axios';

class App extends React.Component {
	state = {
		title: '',
		body: '',
	};

	handleChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value,
		});
	};

	submit = (event) => {
		event.preventDefault();

		const payload = {
			title: this.state.title,
			body: this.state.body,
		};

		axios({
			url: '/api/save',
			method: 'POST',
			data: payload,
		})
			.then(() => {
				console.log('data been sent');
			})
			.catch(() => {
				console.log('something bad happened');
			});
	};

	render() {
		console.log('State: ', this.state);
		return (
			<div>
				<h2>welcome to my app</h2>
				<form onSubmit={this.submit}>
					<div className='form-input'>
						<input
							type='text'
							name='title'
							value={this.state.title}
							onChange={this.handleChange} //update when user types
						/>
					</div>
					<div className='form-input'>
						<textarea
							name='body'
							id=''
							cols='30'
							rows='10'
							value={this.state.body}
							onChange={this.handleChange}
						></textarea>
					</div>
					<button>submit</button>
				</form>
			</div>
		);
	}
}

export default App;
