import express, { Request, Response } from 'express';

const index = express();
const port = 3000;

index.use(express.json());

index.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

index.post('/data', (req: Request, res: Response) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});

index.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});