'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ErudaDebugger() {
  // Only load in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <>
      <Script 
        src="https://cdn.jsdelivr.net/npm/eruda" 
        strategy="beforeInteractive"
      />
      <Script
        id="eruda-init"
        strategy="afterInteractive"
      >
        {'window.eruda && eruda.init();'}
      </Script>
    </>
  )
}
