export function apiKeyChat(input) {
  const apiKey = localStorage.getItem("apiKey");

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "respondeme como si fueras Homero Simpson" },
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
