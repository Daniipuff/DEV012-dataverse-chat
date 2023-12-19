import dataset from '../src/data/dataset.js';
import { apiKeyChat } from '../src/lib/API.js';

//se crea el componente
const OpenAIChat = jest.fn().mockResolvedValueOnce( {choices: [{message: 'foo'}] });

// hacer implementación falsa de fetch
dataset.fetch = jest.fn(() => Promise.resolve({
  json: OpenAIChat
}));


describe('Endpoint de openIA', () =>
{
  it('La API es llamada con los datos adecuados', () => {

    OpenAIChat.mockResolvedValueOnce({ choices: [{ message: 'foo' }] });

    const messages = [{role: 'user', content: 'foo'}];

    apiKeyChat('13034', messages);

    expect(dataset.fetch).toBeCalledWith('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer 13034`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        messages,
      })
    });
  });

  it('El edpoint responde de manera correcta', () => {

    const respuesta = {
      "choices": [
        {
          "message": {
            "role": "assistant",
            "content": "¡Hola!"
          }
        }]
    };

    OpenAIChat.mockResolvedValueOnce(respuesta);


    return apiKeyChat('12345', [{ role: 'user', content: 'foo' }])
      .then((resolved) => {
        expect(resolved).toBe(respuesta);
      });
  });
})