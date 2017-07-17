/**
 * Created by Pro on 7/17/2017.
 */
import React, {Component, PropTypes} from 'react';
const propTypes = {};
const defaultProps = {};
class ContactDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>name</h1>
                <h1>number</h1>
            </div>
        );
    }
}
ContactDetails.propTypes = propTypes;
ContactDetails.defaultProps = defaultProps;
export default ContactDetails;


