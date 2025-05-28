import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const emailOlvide = async (datos) => {
    // Looking to send emails in production? Check out our Email API/SMTP product!
        const transporte = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_POST,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const {email, nombre, token} = datos;
    
    const info = await transporte.sendMail({
        from: "APV - Administrador de Pacientes Veterinarios",
        to: email,
        subject: "Reestablece tu password",
        text: "Reestablece tu password",
        html: `<p>Hola: ${nombre}, reestablece tu password en APV</p>
            <p>Has solicitado reestablecer tu password, sigue el siguiente enlace para generar uno nuevo:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a></p>
            <p>Si no solicitaste este email, puedes ignorarlo</p>
        `
    });
    console.log("Mensaje enviado: %s", info.messageId);
}

export default emailOlvide;