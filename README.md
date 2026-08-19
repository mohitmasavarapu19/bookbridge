# 📚 BookBridge — Student Book Marketplace

**BookBridge** is a premium, modern, and highly interactive peer-to-peer campus marketplace designed for college students to buy and sell second-hand academic textbooks. It helps students save money, connect with peers, and share knowledge easily within their campus ecosystem.

🖥️ **Live Site:** [https://mohitmasavarapu19.github.io/bookbridge/](https://mohitmasavarapu19.github.io/bookbridge/)  
📂 **GitHub Repository:** [https://github.com/mohitmasavarapu19/bookbridge](https://github.com/mohitmasavarapu19/bookbridge)

---

## ✨ Features

* **🔐 Secure Student Authentication:** Sign up and log in using email authentication powered by **Firebase Auth**.
* **📖 Dynamic Book Marketplace:** Browse textbook listings with details including price, book condition, semester/year, and seller contact information.
* **⚡ 60-Second Listings:** Verified sellers can quickly list textbooks for sale, inputting details and choosing customized book cover imagery.
* **🔍 Search & Filtering:** Filter books dynamically by semester, price range, or search terms to find exactly what you need.
* **🎨 Glassmorphism & Sleek Dark UI:** Modern, immersive styling using Tailwind CSS and seamless animations powered by Framer Motion.
* **📱 Fully Responsive:** Fully optimized for mobile, tablet, and desktop viewing.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React 18+ (using Vite for ultra-fast builds and HMR)
* **Styling:** Tailwind CSS 4.0
* **Animations:** Framer Motion
* **Database & Auth:** Firebase (Cloud Firestore & Firebase Authentication)
* **Icons:** React Icons
* **Routing:** React Router DOM (v7)

---

## 📁 File Structure

```text
bookbridge/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images and local graphic assets
│   ├── components/         # Shared UI components (Navbar, BookCard, etc.)
│   ├── context/            # AuthContext for global user state management
│   ├── pages/              # Page components (Home, Books, Login, Signup, SellBook, Developer)
│   ├── App.css             # Main styling overrides
│   ├── App.jsx             # Router definition and route structure
│   ├── firebase.js         # Firebase initialization and configuration
│   └── main.jsx            # Application entry point
├── vite.config.js          # Vite custom build settings
├── package.json            # Scripts and dependency list
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/mohitmasavarapu19/bookbridge.git
cd bookbridge
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a file named `.env.local` in the root directory and add your Firebase credentials:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Configure Firestore Security Rules
To allow data fetching and seeding to work, ensure your Cloud Firestore Rules in the Firebase Console are configured to allow access:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

---

## 📦 Deployment to GitHub Pages

The project is configured to build and deploy directly to GitHub Pages.

To build and deploy the application:
```bash
npm run deploy
```
*Behind the scenes, this runs the `predeploy` command (`npm run build && cp dist/index.html dist/404.html`) and deploys the contents of the `dist` folder to your `gh-pages` branch using the `gh-pages` CLI.*

---

## 👨‍💻 Developer Profile

**MASAVARAPU SRI SIVA SAI MOHIT**  
*Aspiring Software and AI/ML Engineer*

* 📧 **Email:** [mohitmasavarapu1916@gmail.com](mailto:mohitmasavarapu1916@gmail.com)
* 📞 **Phone:** [+91 9347591593](tel:9347591593)
* 💼 **LinkedIn:** [linkedin.com/in/mohit-masavarapu-548a80389](https://linkedin.com/in/mohit-masavarapu-548a80389)
* 🐙 **GitHub:** [github.com/mohitmasavarapu19](https://github.com/mohitmasavarapu19)
