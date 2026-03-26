import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DashboardLayout } from '../layouts/DashboardLayout'
import { AgentsPage } from '../pages/dashboard/dashboard'
import { ChatHistoryPage } from '../pages/chatHistory/chatHistory'
import { KnowledgeBasePage } from '../pages/knowledge/knowledgeBase'
import NotFound from '../pages/notFound/notFound'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<AgentsPage />} />
          <Route path="knowledge" element={<KnowledgeBasePage />} />
          <Route path="chat-history" element={<ChatHistoryPage />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

