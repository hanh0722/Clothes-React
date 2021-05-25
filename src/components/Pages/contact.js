import React from 'react';
// using class for save data to server
class Contact extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div className='container-section container-contact'>
                <p>Contact with us</p>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7449.759953796101!2d105.81719307209!3d20.99744776049314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8f6a38960b%3A0x20a87616ab8b2866!2sKhuong%20Trung%2C%20Thanh%20Xu%C3%A2n%2C%20Hanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1620748244478!5m2!1sen!2s" width="100%" height="450" allowFullScreen="" style={{border: 'none'}} loading="lazy"></iframe>
                <div className='box-contact'>
                    <div className='left-contact'>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
                        <div className='form-contact'>
                            <div>
                                <label htmlFor='name'>Your name</label><br/>
                                <input type='text' required placeholder='Name...' maxLength='100' id='name'/>
                            </div>
                            <div>
                                <label htmlFor='email'>Your email</label><br/>
                                <input type='email' required placeholder='Email...' maxLength='100' id='email'/>
                            </div>
                            <div>
                                <label htmlFor='subject'>Subject</label><br/>
                                <input type='text' placeholder='Subject...' id='subject'/>
                            </div>
                            <div>
                                <label htmlFor='messages'>Your message</label><br/>
                                <textarea id='messages'name='message' rows='4' cols='40'></textarea>
                            </div>
                            <div className='button'>
                                <button className='submit-contact'>Send</button>
                            </div>
                        </div>
                    </div>
                    <div className='right-contact'>
                        <p>Contact info</p>
                        <p>Address: Number A, B Street, C District, D City</p>
                        <p>Mobile: <a href='tel:'>0123.456.789</a></p>
                        <p>Mail: <a href='mailto:'>abc@cde.io</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;