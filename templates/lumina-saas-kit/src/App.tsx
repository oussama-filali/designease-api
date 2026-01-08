import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DashboardPage } from '@/pages/dashboard/DashboardPage';
// import { LandingPage } from '@/pages/landing/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        <Route path="/dashboard/*" element={
          <DashboardLayout>
            <Routes>
              <Route index element={<DashboardPage />} />
              <Route path="analytics" element={<div>Analytics View</div>} />
            </Routes>
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
