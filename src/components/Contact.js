/**
 * Created by Pro on 7/17/2017.
 */
import React, {Component, PropTypes} from 'react';

import ContactInfo from './ContactInfo';
import Control from './Control';
import ContactDetails from './ContactDetails';


const propTypes = {};
const defaultProps = {};
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ContactData: [
                {name: 'Sergei', number: '000-22-3232'},
                {name: 'Anton', number: '120-23-2332'},
                {name: 'Rohan', number: '534-53-3643'},
                {name: 'Vova', number: '236-64-5445'}
            ]
        }
    }

    render() {
        const maptoComponent=(data)=>{
            data.sort();
            return data.map((contact,i)=>{
               return <ContactInfo contact={contact} key={i} />
            });
        };
        return (
            <div>
                <h1>Contact</h1>
                {maptoComponent(this.state.ContactData)}
                <ContactDetails/>
                <Control/>
            </div>

        );
    }
}
Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;
export default Contact;


