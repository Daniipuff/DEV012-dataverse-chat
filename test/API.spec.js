global.fetch = require('node-fetch');
import { apiKeyChat } from '../src/lib/API.js';
// Mocking node-fetch
jest.mock('node-fetch', () => jest.fn());
// Mock LocalStorage
beforeAll(() => {
  global.localStorage = {
    getItem: jest.fn().mockReturnValue('13034'),
    setItem: localStorage.setItem('apiKey', '13034')
  };
});
// Mock persona
const mockPersona = { name: 'testPersona' };
describe('Endpoint de openIA', () => {
  it('La API es llamada con los datos adecuados', () => {
    // Mocking the fetch response
    const mockJsonPromise = Promise.resolve({ choices: [{ message: 'foo' }] });
    const mockFetchPromise = Promise.resolve({
      ok: true,
      status: 200,
      json: () => mockJsonPromise,
    });
    global.fetch.mockImplementationOnce(() => mockFetchPromise);
    const input = 'foo';
    apiKeyChat(input, mockPersona);
    expect(global.fetch).toBeCalledWith('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer 13034`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        messages: [
          { role: "system", content: `respondeme como si fueras + ${mockPersona.name}` },
          { role: "user", content: input }
        ],
      })
    });
  });
  it('El endpoint responde de manera correcta', () => {
    const respuesta = {
      "choices": [
        {
          "message": {
            "role": "assistant",
            "content": "¡Hola!"
          }
        }
      ]
    };
    // Mocking the fetch response with a status code
    const mockJsonPromise = Promise.resolve(respuesta);
    const mockFetchPromise = Promise.resolve({
      ok: true,
      status: 200,
      json: () => mockJsonPromise,
    });
    global.fetch.mockImplementationOnce(() => mockFetchPromise);
    return apiKeyChat('12345', [{ role: 'user', content: 'foo' }])
      .then((resolved) => {
        expect(resolved).toEqual(respuesta);
      });
  });
});