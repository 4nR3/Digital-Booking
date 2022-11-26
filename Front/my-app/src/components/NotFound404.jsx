import React from 'react'
import "../componentsStyle/NotFound404.css"

const NotFound404 = () => {
  return (
    <div className="notFound404" >
      <div className='cajita'>
      <i class="fas fa-exclamation-triangle" id='iconoError404'></i>
          <h1 className="notFound404_text">404</h1>
          <h2 className="notFound404_text">Pagina no encontrada</h2>
          <i class="fas fa-exclamation-triangle"></i>
        </div>
    </div>
  )
}

export default NotFound404