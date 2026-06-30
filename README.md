# Ankit Sweets 🍬✨

Ankit Sweets is a premium, interactive Indian Sweet Shop web application designed to bring the rich taste of traditional Indian confectionery directly to customers. Built with modern web technologies, it offers a seamless shopping experience, live inventory management, and festive themes.

---

## 🚀 Key Features

- **Artisanal Sweet Catalog:** Browse through a rich variety of hand-crafted sweets (dry-fruit, milk-based, ghee-based, and Bengali sweets) with ratings, tags, and custom illustrations.
- **Dynamic Cart & WhatsApp Order Integration:** A floating interactive cart that allows users to adjust item quantities and checkout directly via WhatsApp with auto-generated order details.
- **Store Administration Portal:** Secure admin login to manage sweet inventory (add, update, or delete products) and customize the storefront dynamically.
- **Live Firebase Integration:** Real-time synchronization of sweets, prices, and settings.
- **Smart Festival Settings:** Toggle and customize festive banners (Diwali, Holi, Eid, or Custom) from the admin panel to automatically style the application with festive animations and themes.
- **Customer Reviews Hub:** Interactive testimonial section where clients can share their sweet experiences.
- **Rich Motion Design:** Fully responsive glassmorphic UI styled with Tailwind CSS, custom page transitions, floating animations, and interactive backgrounds.

---

## 🛠️ Tech Stack

- **Frontend Core:** React, TypeScript, Vite
- **Styling & Theme:** Tailwind CSS, Lucide React (Icons)
- **Database & Sync:** Firebase Realtime Database / Firestore
- **State Management:** React Hooks (useState, useEffect, useRef)

---

## 💻 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "Ultimate Sweet Shop"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory (or update the existing one) with your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_DATABASE_URL=your_database_url_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

---

## 📁 Project Structure

```text
Ultimate Sweet Shop/
├── components/          # Reusable UI components
│   ├── AdminModal.tsx         # Inventory & festival settings management
│   ├── AnimatedBackground.tsx # Interactive background effects
│   ├── CartModal.tsx          # Shopping cart UI & WhatsApp checkout
│   ├── FestivalBanner.tsx     # Seasonal/festival notification bar
│   ├── FloatingCart.tsx       # Quick-access cart button
│   ├── Header.tsx             # Navigation & branding bar
│   ├── LoginModal.tsx         # Admin authentication modal
│   ├── ProductCard.tsx        # Product display card with price tags
│   └── ReviewModal.tsx        # Customer review submission form
├── constants.ts         # Initial product catalog & customer testimonials
├── types.ts             # TypeScript interfaces for products, cart, and reviews
├── firebaseService.ts   # Firebase database read/write actions
├── firebase.ts          # Firebase configuration & initialization
├── App.tsx              # Main entry layout & view routing logic
├── index.tsx            # React DOM mounting entry point
└── tailwind.config.js   # Tailwind theme configurations
```

---

## 🎨 Customizing the Store

- **Change WhatsApp Checkout Number:** Open `constants.ts` and update the `WHATSAPP_NUMBER` variable.
- **Initial Catalog:** Add or modify default sweets in the `SWEET_CATALOG` array in `constants.ts`.
- **Default Testimonials:** Update reviews in the `TESTIMONIALS` list in `constants.ts`.
