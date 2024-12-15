// Google Analytics Integration
export const trackPageView = (path: string) => {
  window.gtag('config', 'GA-MEASUREMENT-ID', {
    page_path: path
  })
}

export const trackEvent = (action: string, category: string, label: string) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label
  })
} 