"use client"

import { Provider } from 'react-redux';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import RootLayout from './layout';
const StoreProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                {children}
            </PersistGate>
        </Provider>
    );
}

export default StoreProvider;