import React , {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {add_Reminder , remove_Reminder , clear_Reminder} from '../actions/index';
import logo from './p1.png'

class App extends Component{

    state = {
        text: '',
        date: new Date()
    }

    render_Reminder = () => {
        const {reminders} = this.props;

        return(
            <ul className="list-group">

                {
                    reminders.map(reminder => {
                        return(
                            <li key={reminder.id} className="list-group-item"> 
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                <div className="closeIcon btn btn-danger" onClick={()=> this.props.remove_Reminder(reminder.id)}>X</div>
                            </li>
                        )
                    })
                }
            </ul>
        )

    }


    render(){
        return(
            <div className="App">
                <img src={logo}/>
                <div className="reminder-title">
                    <h2 className="reminder-head">Time will tell everything...</h2>
                    <input
                        onChange = {(e) => this.setState({ text: e.target.value})}
                        value={this.state.text}
                        className="form-control"
                        type="text"
                        placeholder="Enter Your Idea For .."/>
                    <DatePicker
                        className="form-control"
                        value={this.state.date}
                        selected={this.state.date}
                        onChange={(date) => {this.setState({date:date})}}
                        showTimeSelect
                        timeFormat="HH:mm"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                        />
                        {this.render_Reminder()}
                    <button 
                    className="btn btn-primary btn-block" 
                    onClick={ () => { 
                        this.props.add_Reminder(this.state.text, this.state.date)
                        this.setState({text: '' , date: ''})
                     }}>
                        Add Reminder
                    </button>
                    <button 
                    className="btn btn-danger btn-block"
                    onClick={()=>this.props.clear_Reminder()}
                    >Clear Reminder</button>
                </div>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         add_Reminder : () => dispatch(add_Reminder())
//     }
// }

function mapStateToProps(state) {
    return{
        reminders: state
    }
}

export default connect(mapStateToProps ,{add_Reminder, remove_Reminder,clear_Reminder})(App)