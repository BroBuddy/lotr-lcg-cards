import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CycleList from './components/CycleList.tsx'
import CardList from './components/CardList.tsx'
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <CycleList />,
            },
            {
                path: '/cycle/:id',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <CardList />
                    </React.Suspense>
                ),
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
