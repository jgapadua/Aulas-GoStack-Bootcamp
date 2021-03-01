import {Request, Response} from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, Array
// interfaces: como definimos os tipos de um conjuntos de dados, geralmente um objeto

export function helloWorld (request:Request , response:Response) { 
const user = createUser({
  email:'joaogabrielpadua@gmail.com',
  password:'123456',
  techs: [
    'Node.js',
     'ReactJS',
      'React Native',
    ],
});

  return response.json({ message: 'Hello World'});
}