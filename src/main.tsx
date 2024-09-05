import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './assets/header/header.tsx'
import GreetingContent from './assets/greetingContent/greetingContent.tsx'
import MainContent from './assets/mainContent/mainContent.tsx'
import ContentItem from './assets/contentItems/contentItems.tsx'
import Footer from './assets/footer/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <GreetingContent />
    <MainContent />
    <ContentItem />
    <Footer />
  </StrictMode>,
)
