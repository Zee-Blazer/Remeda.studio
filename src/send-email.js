const nodemailer = require('nodemailer');

const emailSender = ({ username, email, story }) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_SENDER,
          pass: process.env.EMAIL_PASSCODE
        }
    });
      
    const mailOptions = {
        from: `${username} a Remeda.studio User`,
        to: 'help@remeda.studio',
        subject: `Here is a email from one of our user at Remeda.studio`,
        html: `
            <h3>Here is the message from ${username}(email: ${email})</h3>
            <p>${story}</p>
        `
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

}

module.exports = emailSender;
