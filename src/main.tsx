import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setupAxiosInterceptors } from './core/http/axios-interceptors';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/index.css'
import './styles/table.css'
import './styles/dark-styles.css'
import "./styles/navbar-styles.css";
import { App } from './app/App';

setupAxiosInterceptors();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
