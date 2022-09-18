import React,{useState} from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Result =() =>{
    return(
        <p>Your message has been successfully sent. i will contact you soon</p>
    );  
};

function Contact(props){
    const [result,showResult] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m9piwcf', 'template_97c5zsc', e.target, 'cbUsbuxzKTHikQ4Tg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };
    //hide result
    setTimeout(()=>{
        showResult(false) 
    },5000);

    return(
            <div class="contactme" id="contact">
                <div class="container">
                    <div class="form1">
                        <form class="form2" action="" onSubmit={sendEmail}>
                            <div className="formWord">
                                <h2>Say Hello!</h2>
                                <span>Full Name</span>
                                <br/>
                                <input
                                    className="input100"
                                    type="text"
                                    name="fullName"
                                    required
                                />
                                <br />
                                <span>Phone Number</span>
                                <br/>
                                <input
                                    className="input100"
                                    type="number"
                                    name="phone"
                                    required
                                />
                                <br />
                                <span>Enter Email</span>
                                <br/>
                                <input
                                    className="input100"
                                    type="text"
                                    name="email"
                                    required
                                />
                                <br/>
                            </div>
                            <div className="formWord">  
                                <span>Message</span>
                                <br/>
                                <textarea name="message" required></textarea>               
                                <br/>
                                <button>SUBMIT</button>

                                <div className="row">{result ? <Result/> : null}</div>
                            </div>
                        </form>
                    </div>
                </div>
    
            </div>
    );
}

export default Contact;


