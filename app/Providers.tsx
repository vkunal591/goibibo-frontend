'use client'

import { store, persistor } from '@/store/store'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const Providers = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
                <Toaster position="top-right" />
            </PersistGate>
        </Provider>

    )
}

export default Providers