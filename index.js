import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/tshirt', (req, res) => {
    res.status(200);
    res.send('<h1>Tshirt Shop</h1>');
})

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;

    // res.send({
    //     id: id,
    //     size: size
    // });

    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

