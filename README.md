# Live Code Interviewer

The **Live Code Interviewer** is a tool designed for live technical interviews, providing a robust platform that combines real-time code editing, multi-language execution, and a detailed, automated, AI-supported final report.

## 🌐 Demonstrations

- [Interview Recording](https://youtu.be/WA-tuJGg9PI) 
- [Final Interview Report](https://youtu.be/01Qnqo36DVc)

## 🔧 Key Features

- **Synchronized Code Editor**: Uses Monaco, the same editor base as VS Code, allowing real-time editing for a smooth collaborative experience.
- **Multi-language Execution**: Supports multiple languages, including JavaScript, TypeScript, Python, Java, C#, PHP, and many others.
- **Code Saving**: Saves code generated during the interview for future reference and inclusion in the final report.
- **Automated AI-Powered Reports**: Generates reports that include multilingual transcriptions, summaries, analysis of questions and answers, identifying important themes and topics discussed.

## 🛠 Technologies Used

- **[SuperViz](https://superviz.com/)**: Video conferencing integration for real-time collaboration and screen sharing.
- **Monaco Editor**: Advanced and collaborative code editing.
- **Piston API**: Compiles and runs code in multiple languages directly in the editor.
- **Firebase Firestore**: Stores and retrieves code during and after the interview.
- **Artificial Intelligence**: Detailed transcription and analysis of interview data for a comprehensive final report.

## 📸 Screenshots
<img width="600" alt="livecode1" src="https://github.com/user-attachments/assets/c2e884c1-f054-4615-9279-d5f2e7c42637"> <img width="600" alt="livecode" src="https://github.com/user-attachments/assets/17029df0-28b1-4b2f-958d-74058e6e3c19">

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/antoniovini47/live-code-interviewer.git
   cd live-code-interviewer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your SuperViz API key:
   ```env
   VITE_SUPERVIZ_DEVELOPER_KEY=YOUR_SUPERVIZ_KEY
   ```

4. Start the project:
   ```bash
   npm run dev
   ```

5. Access the project in the browser: [http://localhost:3000](http://localhost:3000)

## Project Structure

- **src/components** - Reusable components, such as the code editor and video room.
- **src/services** - Integrations with external APIs, like Firebase and Piston.
- **src/styles** - Styling files.

## Final Report and Transcription

At the end of each interview, a final report is automatically generated, containing:
- Interview summary
- Complete and multilingual transcription
- Analysis of topics, questions, and mentioned actions

## Useful Links

- **Project Website**: [lcinterviewer.rotec.dev](https://lcinterviewer.rotec.dev)
- **SuperViz Documentation**: [superviz.com/docs](https://superviz.com/docs)

## 👥 Collaborators

- [jrmagalhaesz](https://github.com/jrmagalhaesz)
- [gustabcc](https://github.com/gustabcc)
