import { signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../utils/firebase";

export class Auth {
  async login(email, password) {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;

      return user;
    } catch (error) {
      const errorMessage = error.message;
      // Handle Errors here.
      // console.error("Error code:", errorCode);
      // console.error("Error message:", errorMessage);
      throw error;
    }
  }

  async resetPassword (email) {
    try {
      await sendPasswordResetEmail(auth, email);
      // El correo electrónico de restablecimiento de contraseña se ha enviado correctamente
      return {
        type:true,
        msg: "Correo Enviado"
      }
    } catch (error) {
      return{
        type:false,
        error: error.message
      }
      // Ocurrió un error al enviar el correo electrónico de restablecimiento de contraseña
    }
  };
}
