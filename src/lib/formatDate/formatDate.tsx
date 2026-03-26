export function formatHumanDate(iso: string) {
    if (!iso) return ''
    const d = new Date(iso + 'T00:00:00')
    if (Number.isNaN(d.getTime())) return ''
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(d)
  }