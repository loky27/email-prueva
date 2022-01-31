//Requerimos el paquete
import { createTransport } from 'nodemailer';

export  const hola=()=>{
//Creamos el objeto de transporte
var transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'hef6666@gmail.com',
    pass: 'avsmkjkfyhnsjpea'
  }
});


var mensaje = 
`
<h1>hola </h1>
<p>nada </p>
`;

var mailOptions = {
  from: 'hef6666@gmail.com',
  to: 'hef6666@gmail.com,jonathan.jimenez.27.96@gmail.com',
  subject: 'Asunto Del Correo',
  html: mensaje
};


  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
}