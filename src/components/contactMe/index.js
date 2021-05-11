import React, {useEffect} from 'react';
import validator from 'validator';
import axios from 'axios';
import linkedIn from './images/linkedIn.png';
import github from  './images/github.png';
import hackeRank from './images/hackeRank.png';
import sendingMail from './images/sendingMail.gif';
import './style.css';

const ContactMe = ()=>{

    const [nameError, setNameError] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [messageError, setMessageError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [mailsentConfirmation, setMailSentConfirmation] = React.useState(false);

    const nameKeyDown = ()=>{
        setNameError("");
        document.getElementById('name').classList.remove('errorInputs');
        document.querySelector('#name + label').classList.remove('errorLabel');
    }

    const emailKeyDown = ()=>{
        setEmailError("");
        document.getElementById('email').classList.remove('errorInputs');
        document.querySelector('#email + label').classList.remove('errorLabel');
    }

    const messageKeyDown = ()=>{
        setMessageError("");
        document.getElementById('message').classList.remove('errorInputs');
        document.querySelector('#message + label').classList.remove('errorLabel');
    }

    const validate = ()=>{
        var name = document.getElementById('name');
            var email = document.getElementById('email');
            var message = document.getElementById('message');
            var indicator = true;
            if(name.value===""){
                setNameError("Name can't be empty"); 
                name.classList.add('errorInputs');
                document.querySelector('#name + label').classList.add('errorLabel');
                indicator = false;
            }
            if(!validator.isEmail(email.value)){
                if(email.value===""){
                    setEmailError("Email can't be empty"); 
                    email.classList.add('errorInputs');
                    document.querySelector('#email + label').classList.add('errorLabel');
                    indicator = false;
                }
                else{
                    setEmailError("Invalid email id");
                    email.classList.add('errorInputs');
                    document.querySelector('#email + label').classList.add('errorLabel');
                    indicator = false;
                }
            }
            if(message.value===""){
                setMessageError("Message can't be empty");
                message.classList.add('errorInputs');
                document.querySelector('#message + label').classList.add('errorLabel');
                indicator = false;
            }
            if(indicator && nameError==="" && emailError==="" && messageError===""){
                setLoading(true)
                //used axios to make api call to emailjs-com
                var form = document.querySelector('.infoForm');
                var data = new FormData(form);
                data.append('service_id', 'gmail');
                data.append('template_id', 'portfolioTemplate');
                data.append('user_id', 'user_1x2mJlFIf0vuZZg7O67G0');
                //console.log(data);
                axios({
                    method: 'post',
                    url: 'https://api.emailjs.com/api/v1.0/email/send-form',
                    data: data,
                }).then(res=>{
                    setLoading(false);
                    setMailSentConfirmation(true);
                });
            }
    }

    return (
        <div className="contactMeArea">
            <div className="contactMeTitle">
                <h2>
                    Contact Me
                </h2>
            </div>
            <div className="sendingMail" style={{display: loading?'':'none'}}>
                <img src={sendingMail}/>
            </div>
            <div className="mailSentConfirmation" style={{display: mailsentConfirmation?'':'none'}}>
                <div className="confirmationMessage">
                    Hey, I have recieved your details, I will get in touch with you soon!
                </div>
                <div className="okButton" onClick={()=>{setMailSentConfirmation(false)}}>
                    OK
                </div>
            </div>
            <form className="infoForm" style={{display: (loading || mailsentConfirmation)?'none':''}}>
                <div className="inputText">
                    <input type="text" required id="name" name="name" onKeyDown={nameKeyDown}/>
                    <label className="inputTextLabel"><span>Name*</span></label>
                    <span className="error">{nameError}</span>
                </div>
                <div className="inputText">
                    <input type="text" required id="email" name="email" onKeyDown={emailKeyDown}/>
                    <label className="inputTextLabel"><span>Email*</span></label>
                    <span className="error">{emailError}</span>
                </div>
                <div className="inputTextArea">
                    <textarea required id="message" name="message" onKeyDown={messageKeyDown}/>
                    <label className="inputTextAreaLabel"><span>Message*</span></label>
                    <span className="error">{messageError}</span>
                </div>
                <div className="sendButton" onClick={validate}>
                    SEND
                </div>
            </form>
            <div className="contactMeIcons">
                <a href="https://github.com/DheerajGadwala"><img src={github}/></a>
                <a href="https://www.hackerrank.com/drgad24"><img src={hackeRank}/></a>
                <a href="https://www.linkedin.com/in/dheerajgadwala/"><img src={linkedIn}/></a>
            </div>
        </div>
    );
}

export default ContactMe;