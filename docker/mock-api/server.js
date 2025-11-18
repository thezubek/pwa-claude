/**
 * Mock PlentyONE API Server
 *
 * Provides mock endpoints for development and testing.
 * This allows development without requiring a real PlentyONE instance.
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Mock API is running' });
});

// Mock product endpoints
app.get('/api/products', (req, res) => {
  res.json({
    data: [
      { id: 1, name: 'Product 1', price: 29.99, stock: 100 },
      { id: 2, name: 'Product 2', price: 49.99, stock: 50 },
      { id: 3, name: 'Product 3', price: 19.99, stock: 200 }
    ],
    meta: { total: 3, page: 1, perPage: 10 }
  });
});

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json({
    data: {
      id,
      name: `Product ${id}`,
      price: 29.99 + id * 10,
      description: 'Mock product description',
      stock: 100,
      images: [
        { url: 'https://via.placeholder.com/800x600', alt: 'Product image' }
      ]
    }
  });
});

// Mock cart endpoints
app.get('/api/cart', (req, res) => {
  res.json({
    data: {
      id: 'cart-123',
      items: [],
      total: 0,
      currency: 'EUR'
    }
  });
});

app.post('/api/cart/items', (req, res) => {
  const { productId, quantity } = req.body;
  res.json({
    data: {
      id: 'cart-123',
      items: [
        {
          id: 'item-1',
          productId,
          quantity,
          price: 29.99,
          total: 29.99 * quantity
        }
      ],
      total: 29.99 * quantity,
      currency: 'EUR'
    }
  });
});

app.delete('/api/cart/items/:itemId', (req, res) => {
  res.json({
    data: {
      id: 'cart-123',
      items: [],
      total: 0,
      currency: 'EUR'
    }
  });
});

// Mock user/auth endpoints
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password required'
    });
  }

  res.json({
    data: {
      token: 'mock-jwt-token',
      user: {
        id: 1,
        email,
        name: 'Test User'
      }
    }
  });
});

app.post('/api/auth/register', (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password required'
    });
  }

  res.json({
    data: {
      user: {
        id: 1,
        email,
        name: name || 'New User'
      }
    }
  });
});

app.get('/api/user/profile', (req, res) => {
  res.json({
    data: {
      id: 1,
      email: 'test@example.com',
      name: 'Test User',
      addresses: []
    }
  });
});

// Mock checkout endpoints
app.post('/api/checkout', (req, res) => {
  res.json({
    data: {
      orderId: 'order-' + Date.now(),
      status: 'pending',
      total: 99.99,
      currency: 'EUR'
    }
  });
});

// Mock payment endpoints
app.get('/api/payment/methods', (req, res) => {
  res.json({
    data: [
      { id: 'paypal', name: 'PayPal', enabled: true },
      { id: 'stripe', name: 'Credit Card', enabled: true },
      { id: 'invoice', name: 'Invoice', enabled: true }
    ]
  });
});

// Catch-all for undefined endpoints
app.use((req, res) => {
  console.warn(`404 - Endpoint not found: ${req.method} ${req.path}`);
  res.status(404).json({
    error: 'Endpoint not found',
    message: `${req.method} ${req.path} is not implemented in the mock API`
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Mock PlentyONE API running on http://0.0.0.0:${PORT}`);
  console.log('Health check: http://localhost:' + PORT + '/health');
});
