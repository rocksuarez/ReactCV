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
      <link rel="shortcut icon" href="static/nerdRo.svg"/>
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
    </Head>
    <header>
      <div className="row container mb0">
        <div className="col s12">
          <nav>
            <Link href='/'><a>Rodrigo</a></Link> 
            <Link href='/trabajos'><a>Experiencia</a></Link> 
            <Link href='/contacto'><a href="mailto:rodry.leon@gmail.com?subject=iWantYou%20" target="_blanck">Contacto</a></Link>
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
          <p>Open source React/next CV <a href="https://github.com/rocksuarez/ReactCV">Git Repo</a> =) star me</p>
        </div>
      </div>
    </footer>
  </div>
)