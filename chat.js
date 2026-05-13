import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

createChat({
  webhookUrl: "https://lumeaintelligence.app.n8n.cloud/webhook/4cd33e9b-9276-4a58-bb66-39f5338f7e83/chat",
  webhookConfig: {
    method: "POST",
    headers: {},
  },
  target: "#n8n-chat",
  mode: "window",
  chatInputKey: "chatInput",
  chatSessionKey: "sessionId",
  metadata: {},
  showWelcomeScreen: false,
  defaultLanguage: "en",
  initialMessages: ["Como puedo ayudarte?"],
  i18n: {
    en: {
      title: "Tienes alguna duda?",
      subtitle: "Asistente inmediato creado con IA",
      footer: "",
      getStarted: "Nueva conversacion",
      inputPlaceholder: "Escribe aqui...",
    },
  },
});
