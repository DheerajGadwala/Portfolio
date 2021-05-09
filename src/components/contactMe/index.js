import React, {useEffect} from 'react';
import validator from 'validator';
import axios from 'axios';
import linkedIn from './images/linkedIn.png';
import github from  './images/github.png';
import './style.css';

const ContactMe = ()=>{

    const [nameError, setNameError] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [messageError, setMessageError] = React.useState("");

    useEffect(() => {
        //Send button click
        document.querySelector('.sendButton').addEventListener('click', ()=>{
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var message = document.getElementById('message');
            
            if(name.value===""){
                setNameError("Name can't be empty"); 
                name.classList.add('errorInputs');
                document.querySelector('#name + label').classList.add('errorLabel');
            }
            if(!validator.isEmail(email.value)){
                if(email.value===""){
                    setEmailError("Email can't be empty"); 
                    email.classList.add('errorInputs');
                    document.querySelector('#email + label').classList.add('errorLabel');
                }
                else{
                    setEmailError("Invalid email id");
                    email.classList.add('errorInputs');
                    document.querySelector('#email + label').classList.add('errorLabel');
                }
            }
            if(message.value===""){
                setMessageError("Message can't be empty");
                message.classList.add('errorInputs');
                document.querySelector('#message + label').classList.add('errorLabel');
            }
            if(nameError==="" && emailError==="" && messageError===""){

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
                }).then(res=>console.log(res));

            } 
        });


        //Remove errors when key presses from textarea and input tags
        document.querySelectorAll("#name, #email, #message").forEach(item=>{
            item.addEventListener("keydown", ()=>{
                if(nameError!="" && item.id==="name"){
                    setNameError("");
                    document.getElementById('name').classList.remove('errorInputs');
                    document.querySelector('#name + label').classList.remove('errorLabel');
                }            
                else if(emailError!="" && item.id==="email"){
                    setEmailError("");
                    document.getElementById('email').classList.remove('errorInputs');
                    document.querySelector('#email + label').classList.remove('errorLabel');
                }
                else if(item.id==="message"){
                    setMessageError("");
                    document.getElementById('message').classList.remove('errorInputs');
                    document.querySelector('#message + label').classList.remove('errorLabel');
                }    
            });
        });
    });

    return (
        <div className="contactMeArea">
            <div className="contactMeTitle">
                <h2>
                    Wanna reach out to me?
                </h2>
            </div>
            <form className="infoForm">
                <div className="inputText">
                    <input type="text" required id="name" name="name"/>
                    <label className="inputTextLabel"><span>Name*</span></label>
                    <span className="error">{nameError}</span>
                </div>
                <div className="inputText">
                    <input type="text" required id="email" name="email"/>
                    <label className="inputTextLabel"><span>Email*</span></label>
                    <span className="error">{emailError}</span>
                </div>
                <div className="inputTextArea">
                    <textarea required id="message" name="message"/>
                    <label className="inputTextAreaLabel"><span>Message*</span></label>
                    <span className="error">{messageError}</span>
                </div>
                <div className="sendButton">
                    SEND
                </div>
            </form>
            <div className="contactMeIcons">
                <a href="https://github.com/DheerajGadwala"><img src={github}/></a>
                <a href="https://www.linkedin.com/in/dheerajgadwala/"><img src={linkedIn}/></a>
            </div>
        </div>
    );
}

export default ContactMe;