import React from 'react';
class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    clickMe() {
        document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
        console.log('you clicked me');
    }

    render() {
        return (
            <div>
                <p>
                    You want to book our event
                    #{this.props.eventId}: {this.props.eventTitle} ?
                </p>
                <p>Price: {this.props.eventPrice}</p>
                <button onClick={() => this.clickMe()}>Book this !</button>
            </div>
        );
    }


}
export default Checkout;