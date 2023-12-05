import OpenAI from "openai";

const openai = new OpenAI();

async function apiKeyChat() {
    const stream = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
    {
        body: JSON.stringify({
        "id": "chatcmpl-123",
        "object": "chat.completion",
        "created": 1677652288,
        "model": "gpt-3.5-turbo-0613",
        "system_fingerprint": "fp_44709d6fcb",
        "choices": [{
          "index": 0,
          "message": {
            "role": "assistant",
            "content": "\n\nHello there, how may I assist you today?",
          },
          "finish_reason": "stop"
        }],
        "usage": {
          "prompt_tokens": 9,
          "completion_tokens": 12,
          "total_tokens": 21
          
        }
      }
    )}
}

apiKeyChat();
