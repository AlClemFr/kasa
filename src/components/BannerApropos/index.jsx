
// v- packages
// import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

// import styled from 'styled-components'

//v- styles
import '../../20_styles/Banner.css'

// v- images
import Logo from '../../10_images/banner_apropos_cut.png'


function BannerApropos() {
  return (
    <div className="banner-corps">
      <img className="banner-image" src={Logo} alt="Logo Kasa" />
      {/* <h1 className="banner-texte">Chez vous, partout et ailleurs</h1> */}
    </div >
  )
}

export default BannerApropos
