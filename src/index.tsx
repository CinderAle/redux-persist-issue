import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/es/integration/react';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
		<div>success!</div>
        </PersistGate>
    </Provider>
);
