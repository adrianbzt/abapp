import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import ButtonJmeker from './ButtonJmeker';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    clickMe() {
        document.body.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        console.log('you clicked me');
    }

    render() {
        return (
            <div>
                <Typography noWrap>
                    You think water moves fast? You should see ice.
                    #{this.props.eventId}: {this.props.eventTitle} ?




                </Typography>

                <Typography>Price: {this.props.eventPrice}</Typography>

                <ButtonJmeker />

            </div>
    );
    }


    }
    export default Checkout;