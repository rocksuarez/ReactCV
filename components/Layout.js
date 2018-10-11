import Link from 'next/link';
import Head from 'next/head';
import css from "../styles.scss";

export default ({ children, title = 'Ro Suarez DEV' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </Head>
    <header>
      <div className="row container mb0">
        <div className="col s12">
          <nav>
            <Link href='/'><a>Rodrigo</a></Link> 
            <Link href='/trabajos'><a>Experiencia</a></Link> 
            <Link href='/contacto'><a>Contacto</a></Link>
          </nav>
        </div>
      </div>
    </header>
    <section>
      {children}
    </section>
    <footer>
    <div className="row">
        <div className="col s12 center">
          <p>footer</p>
        </div>
      </div>
    </footer>
  </div>
)