import React, {Component} from 'react';


export default class Messenger extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: {
                recipient: '',
                text:''
            }
        }
    }
}