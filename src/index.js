import { createRoot } from 'react-dom/client';
import Root from './views/Root';
import './assets/styles/fonts.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactGA from 'react-ga4';

const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container);

ReactGA.initialize('G-3D8V82TPTG');

root.render(
  <QueryClientProvider client={queryClient}>
    <Root />
  </QueryClientProvider>
);
