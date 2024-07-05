class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.handleHello();
      } 
      else if (lowerCaseMessage.includes("hi")) {
        this.actionProvider.handleHello();
      }else if (lowerCaseMessage.includes("website")) {
        this.actionProvider.handleWebsiteInfo();
      } else if (lowerCaseMessage.includes("class 8")) {
        this.actionProvider.handleClassInfo(8);
      } else if (lowerCaseMessage.includes("class 9")) {
        this.actionProvider.handleClassInfo(9);
      } else if (lowerCaseMessage.includes("class 10")) {
        this.actionProvider.handleClassInfo(10);
      } else if (lowerCaseMessage.includes("subjects")) {
        this.actionProvider.handleSubjectsInfo();
      } else if (lowerCaseMessage.includes("class 8 subjects")) {
        this.actionProvider.handleClass8Subjects();
      } else if (lowerCaseMessage.includes("class 9 subjects")) {
        this.actionProvider.handleClass9Subjects();
      } else if (lowerCaseMessage.includes("class 10 subjects")) {
        this.actionProvider.handleClass10Subjects();
      } else if (lowerCaseMessage.includes("science")) {
        this.actionProvider.handleSubjectDetails('science');
      } else if (lowerCaseMessage.includes("maths")) {
        this.actionProvider.handleSubjectDetails('maths');
      } else if (lowerCaseMessage.includes("english")) {
        this.actionProvider.handleSubjectDetails('english');
      } else if (lowerCaseMessage.includes("social studies")) {
        this.actionProvider.handleSubjectDetails('socialStudies');
      } else {
        this.actionProvider.handleUnrecognizedMessage();
      }
    }
  }
  
  export default MessageParser;
  