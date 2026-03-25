 
import { DashboardLayout } from './layouts/DashboardLayout'
import './App.css'
import { AgentsPage } from './pages/dashboard/dashboard'
import { KnowledgeBasePage } from './pages/knowledge/knowledgeBase'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<AgentsPage />} />
          <Route path="knowledge" element={<KnowledgeBasePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
