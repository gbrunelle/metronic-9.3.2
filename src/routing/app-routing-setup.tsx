import { Route, Routes, Navigate } from 'react-router';
import { ErrorRouting } from '@/errors/error-routing';

import { Layout } from '@/components/layout';
import { DefaultPage } from '@/pages/default';


export function AppRoutingSetup() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DefaultPage />} />
      </Route>
      <Route path="error/*" element={<ErrorRouting />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
}
