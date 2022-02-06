import React from 'react';

const App = () => {
    return (
        <div className="contacts">
        
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
            
            <div className="contact-card">
                {/* <img src="./images/fluffykins.png"/> */}
                <h3>Fluffykins</h3>
                <div className="info-group">
                    {/* <img src="./images/phone-icon.png" /> */}
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    {/* <img src="./images/mail-icon.png" /> */}
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                {/* <img src="./images/felix.png"/> */}
                <h3>Felix</h3>
                <div className="info-group">
                    {/* <img src="./images/phone-icon.png" /> */}
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    {/* <img src="./images/mail-icon.png" /> */}
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                {/* <img src="./images/pumpkin.png"/> */}
                <h3>Pumpkin</h3>
                <div className="info-group">
                    {/* <img src="./images/phone-icon.png" /> */}
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    {/* <img src="./images/mail-icon.png" /> */}
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
            
        </div>
    );
}

export default App;
