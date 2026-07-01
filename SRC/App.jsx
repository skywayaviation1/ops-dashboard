import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Dashboard       from './pages/Dashboard.jsx';
import Fleet           from './pages/Fleet.jsx';
import Pilots          from './pages/Pilots.jsx';
import Trips           from './pages/Trips.jsx';
import Reports         from './pages/Reports.jsx';
import { Revenue, Compliance, Settings } from './pages/OtherPages.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index           element={<Dashboard />} />
          <Route path="fleet"    element={<Fleet />} />
          <Route path="pilots"   element={<Pilots />} />
          <Route path="trips"    element={<Trips />} />
          <Route path="reports"  element={<Reports />} />
          <Route path="revenue"  element={<Revenue />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*"        element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
