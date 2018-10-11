import css from "../styles.scss";

export default () => (
    <div className="container">
      <div className='row'>
      <div className='col s12 m4 l3 push-m8 push-l9'>
            <div className="row">
              <div className="col s12">
                <div className="titleBlock">
                  <h1 className="">Perfil</h1>
                </div>
              </div>
              <div className="col s12">
                <div className="devBlock">
                  <div className="avatarBg"></div>
                </div>
              </div>
            </div>
        </div>
        <div className='col s12 m8 l9 pull-m4 pull-l3'>
            <div className="row">
              <div className="col s12">
                <div className="titleBlock">
                  <h1 className="">Resume</h1>
                </div>
              </div>
              <div className="col s12">
                <div className="resumeBlock">
                  <p>Resumen super empresarial</p>
                </div>
              </div>
            </div>
        </div>      
      </div>
    </div>
  )

