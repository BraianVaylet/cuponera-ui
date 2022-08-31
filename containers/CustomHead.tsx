import Head from 'next/head'

export interface CustomHeadTypes {
  title: string,
  description: string,
  faviconHref?: string
}

const FAVICON_DEFAULT = '/favicon.ico'

const CustomHead = ({ title, description, faviconHref = FAVICON_DEFAULT }: CustomHeadTypes) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href={faviconHref} />
  </Head>
)


export default CustomHead