import React from 'react';

type MyProps = {
	// Using interface also Okey
}

type MyState = {
	// count: number
	name: string
}

class Authentication extends React.Component<MyProps, MyState> {

	state: MyState = {
		name: "This page will be authentication and it will have route"
	}

	render() {
		return (
			<div>
				{this.state.name}
			</div>
		)
	}
}

export default Authentication;