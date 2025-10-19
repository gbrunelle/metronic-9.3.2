import { Helmet } from 'react-helmet-async';
import { LayoutProvider } from '@/components/layout/components/context';
import { Main } from './components/main';

export function Layout() {
  return (
    <>
      <Helmet>
        <title>Metronic - Layout 6</title>
      </Helmet>

      <LayoutProvider>
        <Main />
      </LayoutProvider>
    </>
  );
}
