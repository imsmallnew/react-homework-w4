import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // 引入Bootstrap JS
import '@fortawesome/fontawesome-free/css/all.min.css'; // 引入Font Awesome 圖標庫
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
