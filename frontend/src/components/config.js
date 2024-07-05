import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "L2L Bot",
  initialMessages: [createChatBotMessage("Hello! How can I assist you today?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
