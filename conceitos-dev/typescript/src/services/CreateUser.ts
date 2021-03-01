/**
 * Para criar: name, email, password
 */
// ?:⇒ informa que nosso campo é opcional
/**
 * Tipagem para arrays:
 * 1. Array de strings ⇒ Array<string>
 * 
 * 2. Array misto (strings e objetos) ⇒ Array<string | object>
 * Utilizar quando tipo variável.
 * 
 * 3. Array apenas strings ⇒ array[] 
 * Utilizar quando tipo unico
 */
interface TechObject{
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: string[];
}

 export default function createUser({name, email, password}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
 }