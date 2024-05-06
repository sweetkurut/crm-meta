import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'app/App';
import './common/styles/styles.scss';

import { setupStore } from 'api';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={setupStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
