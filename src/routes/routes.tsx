import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DashboardLayout } from '../layouts/DashboardLayout'
import { AgentsPage } from '../pages/dashboard/dashboard'
import { ChatHistoryPage } from '../pages/chatHistory/chatHistory'
import { KnowledgeBasePage } from '../pages/knowledge/knowledgeBase'
import { LeadsPage } from '../pages/leads/leads'
import NotFound from '../pages/notFound/notFound'
import { AnalyticsPage } from '../pages/analytics/analytics'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<AgentsPage />} />
          <Route path="knowledge" element={<KnowledgeBasePage />} />
          <Route path="chat-history" element={<ChatHistoryPage />} />
          <Route path="leads" element={<LeadsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

