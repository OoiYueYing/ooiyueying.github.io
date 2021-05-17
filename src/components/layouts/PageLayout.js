import React from "react"
import Header from "../elements/Header"
import Footer from "../elements/Footer"
import { Helmet } from "react-helmet"

const PageLayout = props => {
  const { children } = props
  return (
    <main className="flex flex-col items-center">
      <Helmet>
        <title>💻Yue Ying</title>
        <meta
          name="image"
          content="https://www.pexels.com/photo/macbook-pro-near-iphone-and-apple-fruit-18105/"
        />
      </Helmet>
      <div className="max-w-screen-xl self-stretch m-auto w-full">
        <Header />
        <article className="px-6 sm:px-12 py-6">{children}</article>
        <Footer className="px-6 sm:px-12 py-12" />
      </div>
    </main>
  )
}

export default PageLayout
