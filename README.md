```
// redis起動
docker run --rm --name nodejsbook-redis -p 6379:6379 redis

// express server起動
npm start -w packages/backend
// -> listen localhost:8000

// React App起動
npm start -w packages/frontend
// -> listen localhost:3000
```
