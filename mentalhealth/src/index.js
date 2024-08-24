import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';


const root = ReactDOM.createRoot(document.getElementById('root'));

const CLERK_PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }
root.render(
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
    </ClerkProvider>
);
