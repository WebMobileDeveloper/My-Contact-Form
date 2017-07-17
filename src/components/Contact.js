/**
 * Created by Pro on 7/17/2017.
 */
import React, {Component, PropTypes} from 'react';
import update from 'react-addons-update';

import ContactInfo from './ContactInfo';
import Control from './Control';
import ContactDetails from './ContactDetails';


const propTypes = {};
const defaultProps = {};
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: -1,
            editState: false,
            ContactData: [
                {name: 'Sergei', number: '000-22-3232'},
                {name: 'Anton', number: '120-23-2332'},
                {name: 'Rohan', number: '534-53-3643'},
                {name: 'Vova', number: '236-64-5445'}
            ]
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleClick(index) {
        this.setState({
            selectedIndex: index
        });
    }

    handleToggle() {

        this.setState({
            editState: !this.state.editState
        }, () => {
            if (this.state.editState) {

            }
            console.log(this.state.editState);
        });
    }

    handleChange(name, number) {
        this.setState({
            ContactData: update(this.state.ContactData,
                {
                    [this.state.selectedIndex]: {
                        name: {$set: name},
                        number: {$set: number}
                    }
                }
            )
        })
    }

    render() {
        const maptoComponent = (data) => {
            data.sort();
            return data.map((contact, index) => {
                return <ContactInfo contact={contact} key={index}
                                    onClick={() => this.handleClick(index)}
                />
            });
        };
        return (
            <div>
                <h1>Contact</h1>
                {maptoComponent(this.state.ContactData)}
                <ContactDetails contact={this.state.ContactData[this.state.selectedIndex]}
                                editState={this.state.editState}
                                onChange={this.handleChange}
                                onToggle={this.handleToggle}
                />
                {/*<Control />*/}
            </div>

        );
    }
}
Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;
export default Contact;


