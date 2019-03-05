import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import './messenger.scss';

export default class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: {
                recipient: '',
                text: ''
            }
        }
    }

    handleChange(prop, value){
        this.setState({[prop]:value})
    }

     sendText = async() => {

        const {value: text} = await Swal.fire({
            title: 'Send a text to Thai!',
            input: 'textarea',
            inputPlaceholder: 'Please send me a text and include your name and phone number for me to reach back.',
            showConfirmButton: true,
            inputValidator: (value) => {
                return !value && "Please write a message. Don't forget your Contact Info!"
            }
          })
          
          if (text) {
            await axios.get(`/sms?text=${text}`)
          }

    }

    sendEmail = async() => {
        const {value: text} = await Swal.fire({
            title: 'Send an E-mail to Thai!',
            input: 'textarea',
            inputPlaceholder: 'E-mail me directly HERE! Please Include Your Name and Contact Information for me to reach back.',
            showConfirmButton: true,
            inputValidator: (value) => {
                return !value && "Please write a message. Don't forget your Contact Info!"
            }
          })
          if (text) {
            await axios.get(`/email?text=${text}`)
          }
    }


    render() {
        return (
            <div className='messenger-btns'>
                <Button onClick={this.sendText}> Text Thai! </Button>
                <Button onClick={this.sendEmail}> Email Thai! </Button>
            </div>
        )
    }
}