
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Establecer el idioma de la página a español
document.documentElement.lang = 'es';

createRoot(document.getElementById("root")!).render(<App />);
