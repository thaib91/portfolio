import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';

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
            inputPlaceholder: 'Text me directly HERE',
            showConfirmButton: true
          })
          
          if (text) {
            await axios.get(`/sms?text=${text}`)
          }

    }

    sendEmail = async() => {
        const {value: text} = await Swal.fire({
            title: 'Send an E-mail to Thai!',
            input: 'textarea',
            inputPlaceholder: 'E-mail me directly HERE!',
            showConfirmButton: true
          })
          if (text) {
            await axios.get(`/email?text=${text}`)
          }
    }


    render() {
        return (
            <div className='messenger-btns'>
                <Button onClick={this.sendText}> Text Message! </Button>
                <Button onClick={this.sendEmail}> Email! </Button>
            </div>
        )
    }
}