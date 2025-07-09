import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Legal Notice - Raimonvibe',
  description: 'Legal notice, terms of use, and liability information for Raimonvibe website.',
  keywords: 'legal notice, terms of use, liability, disclaimer, Raimonvibe',
  openGraph: {
    title: 'Legal Notice - Raimonvibe',
    description: 'Legal notice, terms of use, and liability information for Raimonvibe website.',
    url: 'https://www.raimonvibe.com/legalnotice',
    siteName: 'Raimonvibe',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Legal Notice - Raimonvibe',
    description: 'Legal notice, terms of use, and liability information for Raimonvibe website.',
  },
}

export default function LegalNotice() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Legal Notice" />
          
          <section>
            <header className="main">
              <h1>raimonvibe</h1>
            </header>

            <p>Last updated: October, 2024</p>
            <p>Welcome to raimonvibe. By using our website, you agree to the terms and conditions set out in this legal notice.</p>
            <p>Please read the legal notice carefully before using our website. If you have any questions, please contact us.</p>

            <h2>Legal Notice</h2>
            <p>The information on this website is intended for general information purposes only. While we endeavor to ensure that the information on this website is accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
            <p>Raimonvibe cannot be held liable for any loss or damage, including without limitation, direct or indirect, consequential or incidental damages, arising from or in connection with the use of this website.</p>
            <p>This website may contain links to third-party websites that are not under the control of Raimonvibe. We have no control over the nature, content, and availability of those sites, and the inclusion of any links does not necessarily imply an endorsement or recommendation of the views expressed within them.</p>
            <p>We strive to keep this website running smoothly. However, Raimonvibe takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>

            <h3>Contact us:</h3>
            <p>Email: <a href="mailto:info@raimonvibe.com">info@raimonvibe.com</a></p>
            <p>Website: <a href="https://raimonvibe.com">https://raimonvibe.com</a></p>

            <p>By using our website, you accept our terms of use and privacy policy. The information on this website is intended for general information purposes and is not intended as legal advice. We do not guarantee the accuracy, completeness, or reliability of any information on this website and will not be liable for any errors or omissions.</p>
            <p>Copyright © 2025 raimonvibe. All rights reserved.</p>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
