import { FunctionComponent } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PaginationWrapper } from './components/PaginationWrapper'

const LoginSample: FunctionComponent = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <h1 className="text-3xl font-bold underline">    Hello world!  </h1>
        <header className="App-header">

          <PaginationWrapper />

        </header>
      </div>
    </QueryClientProvider>
  );
}

export default LoginSample
