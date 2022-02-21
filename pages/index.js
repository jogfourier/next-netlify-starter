import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="descargar">Send</button>
        </p>
      </form>
      </main>

      <Footer />
    </div>
  )
}
