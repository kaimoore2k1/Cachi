const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/token', (req, res) => {
  const { username, password } = req.body;
  if (username !== 'admin' || password !== 'admin') {
    res.status(401).json();
  }
  const loginInfo = {
    userName: 'Admin',
    userRole: 1,
    avatar: '',
    locate: 'vi-VN',
  };
  res.status(200).json(loginInfo);
});

app.get('/get-category-list', (req, res) => {
  const categories = [
    {
      id: 1,
      name: 'Milk',
      image: '',
    },
    {
      id: 2,
      name: 'Milk Tea',
      image: '',
    },
    {
      id: 3,
      name: 'Tea',
      image: '',
    },
    {
      id: 4,
      name: 'Topping',
      image: '',
    },
  ];
  res.status(200).json(categories);
});

app.get('/get-product-list-by-category-id', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Cafe Basilico',
      image: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
      price: '20.000',
      salesNumber: 1000,
      description: 'Small plates, salads & sandwiches in an intimate setting.',
    },
    {
      id: 1,
      name: 'Cafe Basilico',
      image: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
      price: '20.000',
      salesNumber: 1000,
      description: 'Small plates, salads & sandwiches in an intimate setting.',
    },
    {
      id: 1,
      name: 'Cafe Basilico',
      image: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
      price: '20.000',
      salesNumber: 1000,
      description: 'Small plates, salads & sandwiches in an intimate setting.',
    },
    {
      id: 1,
      name: 'Cafe Basilico',
      image: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
      price: '20.000',
      salesNumber: 1000,
      description: 'Small plates, salads & sandwiches in an intimate setting.',
    },
  ];
  res.status(200).json(products);
});

app.get('/get-best-seller-product-list-by-category-id', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Cafe Basilico',
      image: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
      price: '20.000',
      salesNumber: 1000,
      description: 'Small plates, salads & sandwiches in an intimate setting.',
    },
    {
      id: 1,
      name: 'Cafe Basilico',
      image: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
      price: '20.000',
      salesNumber: 1000,
      description: 'Small plates, salads & sandwiches in an intimate setting.',
    },
    {
      id: 1,
      name: 'Cafe Basilico',
      image: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
      price: '20.000',
      salesNumber: 1000,
      description: 'Small plates, salads & sandwiches in an intimate setting.',
    },
    {
      id: 1,
      name: 'Cafe Basilico',
      image: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
      price: '20.000',
      salesNumber: 1000,
      description: 'Small plates, salads & sandwiches in an intimate setting.',
    },
  ];
  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
