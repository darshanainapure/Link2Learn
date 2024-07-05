class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.interactionCount = 0; // Initialize interaction count
      this.maxInteractionsBeforeLogin = 2; // Define maximum interactions before prompting login
      this.isAuthenticated = false; // Track login status
    }
  
    handleHello = () => {
      this.updateChatHistory("Hello there! How can I help?");
    };
  
    handleWebsiteInfo = () => {
      this.updateChatHistory("Our website is designed specifically for students in classes 8, 9, and 10, providing a comprehensive range of resources to support their studies. Each class section includes access to YouTube video tutorials, downloadable textbooks, a 'Prepare for Exam' feature, past question papers, and detailed syllabi for each subject. We cover all major subjects including Science, Social Studies, Mathematics, and English, ensuring that students have all the materials they need to succeed.");
    };
  
    handleClassInfo = (className) => {
      this.updateChatHistory(`For class ${className}, we offer the following subjects: Science, Social Studies, Maths, and English. Each subject includes resources like YouTube links, downloadable books, past question papers, and detailed syllabi to help you prepare.`);
    };
  
    handleSubjectsInfo = () => {
      this.updateChatHistory("We offer resources for Science, Social Studies, Maths, and English for classes 8, 9, and 10. Each subject includes detailed explanations, YouTube links, downloadable books, question papers, and syllabi.");
    };
  
    handleClass8Subjects = () => {
      this.updateChatHistory("For class 8, we offer resources in Science, Social Studies, Maths, and English. Each subject comes with detailed study materials, YouTube links, downloadable books, past question papers, and syllabi.");
    };
  
    handleClass9Subjects = () => {
      this.updateChatHistory("For class 9, we offer resources in Science, Social Studies, Maths, and English. Each subject comes with detailed study materials, YouTube links, downloadable books, past question papers, and syllabi.");
    };
  
    handleClass10Subjects = () => {
      this.updateChatHistory("For class 10, we offer resources in Science, Social Studies, Maths, and English. Each subject comes with detailed study materials, YouTube links, downloadable books, past question papers, and syllabi.");
    };
  
    handleSubjectDetails = (subject) => {
      const subjectDetails = {
        science: "Science resources include Physics, Chemistry, and Biology. We provide detailed notes, experiments, YouTube tutorials, downloadable textbooks, past question papers, and detailed syllabi.",
        maths: "Maths resources cover Algebra, Geometry, and Trigonometry. We offer practice problems, solved examples, video lessons, downloadable textbooks, past question papers, and detailed syllabi.",
        english: "English resources include grammar, literature, and writing skills. We provide comprehensive guides, YouTube lectures, downloadable textbooks, past question papers, and detailed syllabi.",
        socialStudies: "Social Studies resources cover History, Geography, and Civics. We provide notes, maps, video explanations, downloadable textbooks, past question papers, and detailed syllabi."
      };
      this.updateChatHistory(subjectDetails[subject]);
    };
  
    handleUnrecognizedMessage = () => {
      this.updateChatHistory("I'm sorry, I didn't understand that. Can you please rephrase or ask about our classes, subjects, or exam preparation?");
    };
  
    updateChatHistory = (message) => {
      const chatMessage = this.createChatBotMessage(message);
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, chatMessage],
      }));
  
      this.interactionCount++;
  
      if (!this.isAuthenticated && this.interactionCount === this.maxInteractionsBeforeLogin) {
        this.promptLogin();
      }
    };
  
    promptLogin = () => {
      const loginMessage = this.createChatBotMessage("To continue chatting, please log in.");
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, loginMessage],
      }));
    };
  
    setAuthenticated = (status) => {
      this.isAuthenticated = status;
      if (this.isAuthenticated) {
        this.maxInteractionsBeforeLogin = Infinity; // Unlimited interactions once logged in
      }
    };
  }
  
  export default ActionProvider;
  