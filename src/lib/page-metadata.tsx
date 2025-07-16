"use client"

import React, { createContext, useContext, ReactNode, useState } from 'react'
import { PageMetadata, PageMetadataContextType } from '@/lib/types/index'

// Create a default context value for SSR and when used outside provider
const defaultContextValue: PageMetadataContextType = {
  metadata: {
    title: '',
    description: '',
  },
  setMetadata: () => {},
};

const PageMetadataContext = createContext<PageMetadataContextType>(defaultContextValue);

export function PageMetadataProvider({
  children,
}: {
  children: ReactNode
}) {
  const [metadata, setMetadata] = useState<PageMetadata>({
    title: '',
    description: '',
  })

  return (
    <PageMetadataContext.Provider value={{ metadata, setMetadata }}>
      {children}
    </PageMetadataContext.Provider>
  )
}

export function usePageMetadata() {
  const context = useContext(PageMetadataContext)
  if (!context) {
    throw new Error('usePageMetadata must be used within a PageMetadataProvider')
  }
  return context
} 