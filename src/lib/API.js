import dataset from "../data/dataset.js";

export function apiKeyChat(input, persona) {
  console.log(persona);
  const apiKey = localStorage.getItem("apiKey");

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: `respondeme como si fueras + ${persona.name}` },
      { role: "user", content: input },
    ],
  };

  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  })
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error(`HTTP error! Status: ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}
const apiURL = "https://api.openai.com/v1/chat/completions";

export function apiKeyChatGrupal(input, personajesChat) {
  //console.log(input, personajesChat);

  const apiKey = localStorage.getItem("apiKey");
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Eres ${personajesChat.name} por lo tanto, responde colectivamente a todas las preguntas que puedan sobre sus vidas`,
      },
      { role: "user", content: input }
    ],
  };

  const result = fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  return result
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const choices = data && data.choices;

      if (choices && Array.isArray(choices) && choices.length > 0) {
        const firstChoice = choices[0];

        if (firstChoice && firstChoice.message && firstChoice.message.content) {
          return firstChoice.message.content;
        }
      }

      return 'Empty response';
    })
    .catch((error) => {
      console.error('Error obtaining response:', error);
      throw error;
    });
}
