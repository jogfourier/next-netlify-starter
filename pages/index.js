import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import * as React from 'react'
//import {registerSection} from '../components/register-section'
//import pdfMake from 'pdfmake/build/pdfmake'

/* I uploaded my font to AWS S3 and set up CORS for it.
const fonts = {
  yourFontName: {
    normal: 'https://okt.s3.us-west-2.amazonaws.com/ipaexg.ttf',
    bold: 'https://okt.s3.us-west-2.amazonaws.com/ipaexg.ttf',
    italics: 'https://okt.s3.us-west-2.amazonaws.com/ipaexg.ttf',
    bolditalics: 'https://okt.s3.us-west-2.amazonaws.com/ipaexg.ttf',
  },
}
const docDefinition = {
  pageMargins: [20, 97, 20, 60] as [number, number, number, number],
  pageSize: {
    width: 595.28,
    height: 879,
  },
  content: [{...registerSection()}],
  styles: {},
  images: {
    snow: 'https://okt.s3.us-west-2.amazonaws.com/logo.png',
  },
  defaultStyle: {
    fontSize: 10,
    font: 'yourFontName',
  },
}

function ClientSidePdf() {
  function openPdf() {
    // @ts-ignore
    pdfMake.createPdf(docDefinition, null, fonts).open()
  }

  return (
    <div>
      ClientSidePdf
      <button onClick={openPdf}>Open</button>
    </div>
  )
}

export default ClientSidePdf
*/
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
          <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Nombre (nombre completo): <input type="text" name="nombre" /></label>   
        </p>
        <p>
          <label>Fecha de Nacimiento (dd/mm/aaaa): <input type="text" name="fecha" /></label>
        </p>
        <p>
          <label>Edad: <input type="text" name="fecha" /></label>
        </p>
        <p>
          <label>Pasaporte: <input type="text" name="pasaporte" /></label>
        </p>
        <p>
          <button type="descargar">Descargar</button>
        </p>
      </form>
      </main>

      <Footer />
    </div>
  )
}
