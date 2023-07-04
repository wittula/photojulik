import { createRoot } from 'react-dom/client';
import Root from './views/Root';
import './assets/styles/fonts.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <Root />
  </QueryClientProvider>
);
