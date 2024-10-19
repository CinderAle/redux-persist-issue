import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { ErrorBoundary } from './ErrorBoundary';
import { persistor, store } from './store';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
    <ErrorBoundary>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div>success!</div>
            </PersistGate>
        </Provider>
    </ErrorBoundary>
);
