import dataset from "../data/dataset.js"; 

  export function apiKeyChat(input, persona) { 
    console.log(persona);
    const apiKey = localStorage.getItem("apiKey");

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `respondeme como si fueras + ${persona.name}`},
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
 
  const openAiURL = "https://api.openai.com/v1/chat/completions";

  export const persona = dataset.map(element => element.name);
  
  export function apiKeyChatGrupal(persona, input) {
    const apiKey = localStorage.getItem("apiKey");
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Eres + ${persona.name} personaje por lo tanto, respondan colectivamente a todas las preguntas que puedan sobre sus vidas`,
        },
        { role: "user",  content: input }
      ],
    };
  
    const resultado = fetch(openAiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });
  
    return resultado
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
  
        return 'Respuesta vacía';
      })
      .catch((error) => {
        console.error('Error al obtener respuesta:', error);
        throw error; // Vuelve a lanzar el error para que sea manejado por el código que llama a esta función
      });
  }
  