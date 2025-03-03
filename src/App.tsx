import { FunctionComponent } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PaginationWrapper } from './components/PaginationWrapper'

const LoginSample: FunctionComponent = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        <PaginationWrapper />
    </QueryClientProvider>
  );
}

export default LoginSample
