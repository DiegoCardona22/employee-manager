// @packages
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// @scripts
import EmployeeViewerPage from '../pages/EmployeeViewer';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import SidebarTemplate from '../components/templates/sidebarTemplate';

export const AppRouter = () => (
  <BrowserRouter>
    <SidebarTemplate>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" index element={<EmployeeViewerPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SidebarTemplate>
  </BrowserRouter>
);
