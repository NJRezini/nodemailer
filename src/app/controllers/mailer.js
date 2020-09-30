const nodemailer = require('nodemailer'),
  fs = require('fs');

module.exports = {
  async main(request, response) {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_LOGIN, // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: `"Fred Foo 👻" ${process.env.MAIL_LOGIN}`, // sender address
      to: 'nathanrezini@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
      attachments: {
        filename: 'xmlNathan.xml',
        content: fs.createReadStream('xmlNathan.xml'),
      },
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  },
};
