//import data from "../data/dataset.js";

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

  const endpoint = fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  return endpoint
    .then((response) => {
      //Verifica si el código de estado de la respuesta no es un codigo de estado "OK"
      if (!response.ok) {//Si la respuesta tiene un codigo de estado exitoso, devuelve el cuerpo de la respuesta en formato JSON
        throw new Error(`HTTP error! Status: ${response.status}`);//Si la respuesta no es exitosa, lanza un error con informacion sobre el código de estado
      }
      return response.json();
    })
    .then((data) => {
      //nos aseguramos que "data" tenga una propiedad llamada choices, si existe, se asigna el valor de "data.choices" a la variable "choices"
      const choices = data && data.choices;
      //verificamos que la variable "choices" existe, es un array y tiene al menos un elemento antes de intentar acceder al primer elemento del array y verificamos que al menos tenga un elemento antes de acceder
      if (choices && Array.isArray(choices) && choices.length > 0) {
        //asigna el primer elemento del array "choices" a la variable firstChoice
        const firstChoice = choices[0];
        //verifica que "firstChoice" no es null, verifica que "firstChoice.message" existe,verifica que "firstChoice.message.content" existe
        if (firstChoice && firstChoice.message && firstChoice.message.content) {
          return firstChoice.message.content;
        }
      }
      //se ejecutara si las condiciones en la estructura condicional anterior no se cumplen
      return 'Empty response';
    })

    .catch((error) => {
      console.error('Error obtaining response:', error);
      throw error;
    });
}