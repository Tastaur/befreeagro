import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import { ThemeWrapper } from './wrappers/ThemeWrapper';
import { router } from './routes';
import { queryClient } from './wrappers/queryClient/constants';



function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeWrapper>
        <RouterProvider router={router} />
      </ThemeWrapper>
    </QueryClientProvider>
  );
}

export default App;
