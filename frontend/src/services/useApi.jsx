import { useState } from 'react';

export default function useApi() {
  const [urlBase /*, setUrlBase */] = useState('http://localhost:3000/api');

  async function request(url, options) {
    options = { ...options };

    if (options.body) {
      if (typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body);

        options.headers ??= {};
        options.headers['Content-Type'] = 'application/json';
      }
    }

    if (options.json) {
      options.headers ??= {};
      options.headers['Accept'] = 'application/json';
    }

    const res = await fetch(urlBase + url, {
      ...options,
    });

    if (!res.ok)
      throw new Error(`Error en la petición: ${res.status} ${res.statusText}`);

    if (options.json)
      return await res.json();

    return await res.text();
  }

  async function post(url, body) {
    return await request(url, {
      method: 'POST',
      body,
    });
  }

  async function postJson(url, body) {
    return await request(url, {
      method: 'POST',
      body,
      json: true,
    });
  }

  return {
    post,
    postJson,
  }
}