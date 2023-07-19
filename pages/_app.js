import Layout from '../components/Layout'
// styles
import '../styles/nprogress.css'
import '../styles/index.css'
// fontawesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
// recoil js
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />      
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
