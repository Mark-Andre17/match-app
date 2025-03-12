import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { MatchProvider } from './context/context.tsx';

createRoot(document.getElementById('root')!).render(
    <MatchProvider>
        <App />
    </MatchProvider>
)
