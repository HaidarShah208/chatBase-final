import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DashboardLayout } from '../layouts/DashboardLayout'
import { AgentWorkspacePage } from '../pages/agent/AgentWorkspacePage'
import { AgentsPage } from '../pages/dashboard/dashboard'
import { ChatHistoryPage } from '../pages/chatHistory/chatHistory'
import { KnowledgeBasePage } from '../pages/knowledge/knowledgeBase'
import { LeadsPage } from '../pages/leads/leads'
import NotFound from '../pages/notFound/notFound'
import { AnalyticsPage } from '../pages/analytics/analytics'
import { ChatLogsPage } from '../pages/chatLogs/chatLogs'
import { NotificationsPage } from '../pages/notifications/notifications'
import { SettingsPage } from '../pages/settings/settings'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="agents/:agentId" element={<AgentWorkspacePage />} />
        <Route element={<DashboardLayout />}>
          <Route index element={<AgentsPage />} />
          <Route path="knowledge" element={<KnowledgeBasePage />} />
          <Route path="chat-history" element={<ChatHistoryPage />} />
          <Route path="chat-logs" element={<ChatLogsPage />} />
          <Route path="leads" element={<LeadsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

