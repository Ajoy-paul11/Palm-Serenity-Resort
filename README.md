# Palm Serenity Resort Plot — Premium Resort-Property Showcase

**Palm Serenity Resort Plot** is a modern, responsive real-estate / resort-property web application built with **React.js** and **Tailwind CSS**. The site showcases resort-plots for sale — featuring project overview, gallery, master-plan, amenities, connectivity, and more. Primary goal: capture leads from potential buyers — using features like:

- Automated lead-capture pop-up that triggers after ~10 seconds of landing on the site.
- A sticky **“Enquiry Now”** button to encourage visitors to submit queries / contact form.

## ✨ Features

- ⚡ **Fast & modern stack** – React with Vite for a snappy SPA experience and smooth navigation.
- 🎨 **Responsive UI with Tailwind CSS** – Fully mobile-friendly layout optimized for phones, tablets, and desktops.
- 🧭 **Client-side routing** – Navigation powered by `react-router-dom` for an app-like experience.
- 📩 **Contact & enquiry forms** – Integrated with **Web3Forms** to send submissions directly to email (no custom backend required).
- 🧩 **react-scroll** –Smooth in-page scroll navigation (e.g. navigating to gallery, amenities, contact, etc.)
- ✅ **Form validation & UX** – `react-hook-form` for validation and `react-toastify` for instant feedback (success/error toasts).
- 🖼️ **Iconography** – Clean icon set using `lucide-react` and `react-icons` for consistent visual language.

## 💡 Project Highlights

- **Real-world client build** – Designed and developed specifically for Palm Serenity Resort & Plots, reflecting real content and requirements.
- **Performance-conscious** – Built with Vite, optimized components, and Tailwind utility classes to keep pages lightweight.
- **Modularity & reusability** – Components like Gallery, Amenities, Overview, ContactForm are separated for easier maintenance or scalability.
- **Backend-free form handling** – Web3Forms handles all form submissions via email, simplifying deployment and hosting.
- **Production-focused decisions** – Libraries chosen with long-term maintainability and readability in mind (routing, forms, animations, notifications)
- **Lead-capture UX** – The timed pop-up + sticky enquiry button are thoughtful UX features for real estate/resort websites — increases chance of user engagement and conversions.

## 🛠 Tech Stack

**Core:**

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)

**Forms & UX:**

- [Web3Forms](https://web3forms.com/) – serverless form handling via email
- [react-hook-form](https://react-hook-form.com/) – form state & validation
- [react-toastify](https://fkhadra.github.io/react-toastify/) – toast notifications

**UI Enhancements:**

- [react-scroll](https://www.npmjs.com/package/react-scroll) – In page scrolling with navigation link
- [react-icons](https://react-icons.github.io/react-icons/) – icons

## 📁 Project Structure (Overview)

```txt
src/
  ├─ assets              # Images, logos, static content
  ├─ components          # Reusable UI section (Hero, About, Navbar etc.)
  |
  ├─ App.jsx            # Home Page Layout
  ├─ index.css           # Global CSS File of the Project
  └─ main.jsx            # App entry point

```

## 🚀 Getting Started

Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

## Installation & Development

Clone the project

```bash
  git clone https://github.com/Ajoy-paul11/Palm-Serenity-Resort.git
```

Go to the project directory

```bash
  cd Palm-Serenity-Resort
```

Install dependencies

```bash
  npm install
    or
  yarn install
```

Run development server

```bash
  npm run dev
    or
  yarn dev
```

Build for production

```bash
  npm run build
    or
  yarn build
```

## 🔐 Forms & Web3Forms Setup

This project uses Web3Forms to handle form submissions without a custom backend.

- Create a free account at [Web3Forms](https://web3forms.com/)
- Obtain your access key from the Web3Forms website.

In your form component, include the access key as a hidden input:

```javascript
<form method="POST" action="https://api.web3forms.com/submit">
  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
  {/* Your other form fields */}
  <input type="text" name="name" placeholder="Your Name" required />
  //...Other input fields
</form>
```

- Optionally, wrap the submission in react-hook-form for validation and use react-toastify to show success/error messages.

## 📸 Screenshots

🏠 Landing Page  
 ![Palm Serenity Resort & Plot Page](./public/screenshot/home.png)

## 🌐 Live Website

- Website: [palmserenityresortplot.com](https://palmserenityresortplot.com/)

## 📄 License

#### 1. This project was developed for [DS Marcom](https://dsmarcom.com/)

#### 2. You may reuse the structure and code patterns for learning purposes.

#### 3. Commercial reuse of the exact design, content, or branding may be restricted based on the client’s terms.

## 👨‍💻 Authors

#### Ajoy Paul - Full-Stack Developer

- Github: [@Ajoy-paul11](https://www.github.com/Ajoy-paul11)
- Portfolio: https://portfolio-ajoy-paul.vercel.app
- LinkedIn: [Ajoy Paul](https://www.linkedin.com/in/ajoypaul)
