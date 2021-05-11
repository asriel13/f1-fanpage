import { Router } from 'express';

const router = Router();
router.get('/', (req, res) => {
  res.json({ username: 'asd' });
});

export default router;
