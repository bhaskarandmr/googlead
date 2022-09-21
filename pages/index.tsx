import { Layout, Text, Page, Link, Code } from '@vercel/examples-ui'
import { AdBanner } from '../components/AdBanner'

function Home() {
  return (
    <Page>
      <section className="flex flex-col gap-6">
        <Text variant="h1">Loading Ads with the Script Components</Text>
        
       
      </section>

      <hr className="border-t border-accents-2 my-6" />

      <section className="flex flex-col gap-3">
        <Text variant="h2">Ad will show below</Text>

        <AdBanner height={250} width={300} />
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
