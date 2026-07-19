# Real-Time Markdown Editor

A collaborative, real-time Markdown editor built with React, Vite, and Tailwind CSS.

## Features
* **Modern Tech Stack**: Initialized with React and Vite for blazing-fast performance.
* **Sleek UI**: Styled with Tailwind CSS v4, featuring a custom dark mode theme.
* **Core Editor**: Integrated CodeMirror 6 with Markdown syntax highlighting.
* **Live Preview**: Implemented a split-screen layout that instantly renders Markdown into HTML as you type.
* **Rich Typography**: Powered by `react-markdown` and the Tailwind Typography plugin for beautiful, readable output.
* **Real-Time Collaboration**: Powered by Yjs (CRDTs) and WebSockets. Multiple users can join the same room and edit the document simultaneously with zero conflicts!

## How to Run Locally
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the local server.
4. Open `http://localhost:5173` in multiple browser windows to test the real-time multiplayer collaboration.