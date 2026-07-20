# Real-Time Markdown Editor 🚀

A collaborative, real-time Markdown editor built with React, Vite, and Tailwind CSS. 

**Live Demo:** [Click here to try it live!](https://markdown-collab-one.vercel.app/)

## Features
* **Real-Time Collaboration**: Powered by Yjs (CRDTs) and WebSockets. Multiple users can join the same room and edit the document simultaneously with zero conflicts.
* **Formatting Toolbar**: Quick-access buttons to easily insert Bold, Italics, Headings, Lists, and Code blocks without typing the syntax manually.
* **Live Preview**: A split-screen layout that instantly renders Markdown into beautiful HTML as you type.
* **Core Editor**: Integrated CodeMirror 6 with Markdown syntax highlighting and a custom dark mode theme.
* **Modern Tech Stack**: Built with React and Vite for blazing-fast performance, and styled with Tailwind CSS v4.
* **Seamless Deployment**: Hosted continuously via Vercel.

## How to Run Locally
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the local server.
4. Open `http://localhost:5173` in multiple browser windows to test the real-time multiplayer collaboration.