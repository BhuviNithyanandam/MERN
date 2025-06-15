const http = require('http');
const users = []; // In-memory "database"

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Handle /users route
  if (url === '/users') {
    if (method === 'GET') {
      // ✅ READ all users
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    } else if (method === 'POST') {
      // ✅ CREATE user
      let body = '';
      req.on('data', chunk => (body += chunk));
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          console.log('body data---->',data);
          if (!data.name || typeof data.age !== 'number') {
            throw new Error('Invalid input');
          }

          users.push({ name: data.name, age: data.age });
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'User created', users }));
        } catch (err) {
          res.writeHead(400);
          res.end('Invalid JSON or missing fields');
        }
      });
    } else if (method === 'PUT') {
      // ✅ UPDATE user by name
      let body = '';
      req.on('data', chunk => (body += chunk));
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          const index = users.findIndex(u => u.name === data.name);
          if (index === -1) {
            res.writeHead(404);
            return res.end('User not found');
          }

          users[index].age = data.age;
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'User updated', users }));
        } catch (err) {
          res.writeHead(400);
          res.end('Invalid input');
        }
      });
    } else if (method === 'DELETE') {
      // ✅ DELETE user by name
      let body = '';
      req.on('data', chunk => (body += chunk));
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          const index = users.findIndex(u => u.name === data.name);
          if (index === -1) {
            res.writeHead(404);
            return res.end('User not found');
          }

          users.splice(index, 1);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'User deleted', users }));
        } catch (err) {
          res.writeHead(400);
          res.end('Invalid input');
        }
      });
    } else {
      res.writeHead(405);
      res.end('Method not allowed');
    }
  } else {
    res.writeHead(404);
    res.end('Route not found');
  }
});

server.listen(3001, () => {
  console.log('🚀 CRUD server running at http://localhost:3001');
});
