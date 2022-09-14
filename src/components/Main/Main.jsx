import './Main.css'

import React from 'react'
import { scrollDown, facebook, instagram, linkedin, whatsapp } from '../../assets/icons/icons'

function Main() {
  return (
    <>
      <div className="navigation">
          <h1>Easy Study</h1>
          <div>
            <a href='/'>Início</a>
            <a href='#sobre-nos'>Sobre Nós</a>
            <a href='/login' id='signin-btn'>Entrar</a>
          </div>
      </div>

      <div className="hero">
        <div className="hero-text">
          <h1 className='animation'>Comece a aprender uma nova habilidade ainda hoje</h1>
          <p>Cursos nas áreas de Design, Marketing e Programação</p>
          <img src={scrollDown} alt="ícone indicando para arrastar para baixo" />
        </div>
      </div>

      <div id="sobre-nos">

          <h1>O nosso propósito de existir</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in risus efficitur, aliquam lacus quis, vestibulum neque. In ac tincidunt leo. Sed non pulvinar tellus. Mauris vitae tincidunt lacus. Duis vel nisi dui. Curabitur vestibulum efficitur magna id pharetra. Donec nec dui nisl. Curabitur tincidunt ex eget orci ullamcorper viverra. Donec molestie ante ac quam tempor dapibus sit amet nec neque. Nam sit amet fermentum nibh.

          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam porttitor bibendum magna et dapibus. Nulla at nibh arcu. Aenean lectus ligula, ornare vel vulputate ut, dapibus id elit. Suspendisse porta libero risus, nec pharetra dolor finibus sed. In non venenatis nibh. Quisque ultrices ante nisl, nec interdum est imperdiet ut. Nulla vulputate fermentum consequat. Integer ornare accumsan sem nec iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor orci orci, vitae ornare dolor tempus sed. Integer dapibus ornare laoreet.
          </p>

      </div>

      <footer>
        <p>EASY STUDY • TODOS OS DIREITOS RESERVADOS</p>

        <div className="social-media">
          <img src={whatsapp} alt="whatsapp" />
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
        </div>
      </footer>
    </>
  )
}

export default Main