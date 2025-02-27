import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {I18nextProvider} from 'react-i18next'
import i18n from './i18.ts'
import './index.css'
import {Provider} from 'react-redux'
import {store} from './store/store.ts'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
const client = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchInterval: 7000,
      // staleTime: 7000,
      gcTime: 120 * 1000,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <I18nextProvider i18n={i18n}>
          <App />
          <ReactQueryDevtools />
        </I18nextProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
)
