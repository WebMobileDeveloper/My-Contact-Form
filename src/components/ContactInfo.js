/**
 * Created by Pro on 7/17/2017.
 */
import React, {Component, PropTypes} from 'react';
const propTypes = {};
const defaultProps = {
    contact: {
        name: '',
        number: ''
    }
};
class ContactInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>{this.props.contact.name}</span>
            </div>
        );
    }
}
ContactInfo.propTypes = propTypes;
ContactInfo.defaultProps = defaultProps;
export default ContactInfo;


