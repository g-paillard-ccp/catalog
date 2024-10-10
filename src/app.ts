import express, {Request, Response} from 'express';
import {Repo} from "./repo.interface";
import {RepoImpl} from "./repo.impl";

const app = express();
const port = process.env.PORT || 3000;

const productRepo: Repo = new RepoImpl();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});
app.get('/:id', async (req: Request, res: Response) => {
    const product = await productRepo.get(req.params.id);
    res.send(`Product ${product.name}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
