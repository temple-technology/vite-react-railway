import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  // Change this URL to your deployed Fastify API if needed
  const res = http.get('http://localhost:3000/health');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'body has healthy': (r) => r.body && r.body.includes('healthy'),
  });
} 