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
class ContactDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            phone:''
        };
        this.onEdit=this.onEdit.bind(this);
    }
    onToggle(){
        this.props.onToggle();
        if(this.props.editState){
            this.props.onEdit(this.state.name,this.state.number);
        }
    }
    onEdit(){
        this.props.onChange(this.state.contact.name,this.state.contact.number)
    }
    onChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
                name:nextProps.contact.name,
                number:nextProps.contact.number
        });
    }

    render() {
        const renderData = () => {
            if (this.props.editState) {
                return (
                    <div>
                        <input name="name" value={this.state.name} onChange={this.onChange}/>
                        <input name="phone" value={this.state.number} onChange={this.onChange} />
                    </div>
                );
            }else{
                return (
                    <div>
                        <span>{this.state.name} </span>
                        <span>{this.state.number} </span>
                    </div>
                );
            }
        };
        return (
            <div>
                {renderData()}
                <button onClick={this.onToggle}>{!this.props.editState?'Edit':'Save'}</button>
                <button>Delete</button>
            </div>
            )

    }
}
ContactDetails.propTypes = propTypes;
ContactDetails.defaultProps = defaultProps;
export default ContactDetails;


