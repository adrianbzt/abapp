import React from 'react';
class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>
                    You want to book our event
                    #{this.props.eventId}: {this.props.eventTitle} ?
                </p>
                <p>Price: {this.props.eventPrice}</p>
                <button>Book this !</button>
            </div>
        );
    }
}
export default Checkout;