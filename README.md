Tender System (Vue 3 + Vite + Tailwind)

A simple Tender Download System built with Vue 3, Vite, and Tailwind CSS.
This project demonstrates data fetching, searching, downloading tender documents, authentication, and toast notifications.


Features:

(1). Browse a list of tenders (with title, description, and deadline).

(2). Search functionality to filter tenders by keyword.

(3). Download button that generates a PDF (dummy data) and shows a toast notification.

(4). Responsive UI (works on desktop, tablet, and mobile).

(5). Basic authentication (login required to access tenders).

(6). Error handling for data fetching.

(7). Unit test setup for core functionality (WIP).

(8). Pagination for large number of tenders (>10).

(9). Redirect logged-in users away from `/login.



Tech Stack:

(1). Vue 3 (Composition API)

(2). Tailwind CSS (styling) - used instead of Bootstrap-Vue/Bootstrap.  
     Tailwind was added via CDN in `index.html` using:
     <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

(3). vue3-toastify (toast notifications)

(4). jspdf (PDF download)

(5). Vite (bundler)

(6). Pinia (state management)


Dummy Login Credentials

. Username: admin

. Password: password



Project Setup:

# install dependencies
npm install

# start development server
npm run dev

# Build for production
npm run build

# run unit tests
npm run test:unit


Unit Tests (Core Functionalities):

(1). Rendering tenders list

(2). Filtering tenders with search input

(3). Download button triggers PDF & toast notification


Authentication:

(1). Users must log in before accessing tenders

(2). Credentials are currently dummy (hardcoded) for demo purposes

(3). Future improvements: route guards, token-based authentication, persisted login state
