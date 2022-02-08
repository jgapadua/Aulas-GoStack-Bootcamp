import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ msg: 'Olá mundo' }));

export default routes;
