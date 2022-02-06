import React from 'react';

const Contact = () => {
    return (
        <div className="contact-card">
        <img src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="cat img"/>
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
            {/* <img src="./images/phone-icon.png" /> */}
            <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
            {/* <img src="./images/mail-icon.png" /> */}
            <p>mr.whiskaz@catnap.meow</p>
        </div>
    </div>
    );
}

export default Contact;
