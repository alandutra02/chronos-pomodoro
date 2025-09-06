
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AboutPomodoro } from "../../pages/AboutPomodoro";
import { NotFound } from "../../pages/NotFound";
import { Home } from "../../pages/Home";
import { History } from "../../pages/History";
import { useEffect } from "react";
import { Settings } from "../../pages/Settings";


function ScrollToTop() { // precisamos fazer uma função para colocar o useLocation por que ele tem que ser colocado dentro do contexto de BrowserRouter. Então chamamos esta função como um componente dentro de BrowserRouter no retorno de MainRouter
  const { pathname } = useLocation() // useLocation é um Hook utilizado para saber o caminho da rota

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth'}) // faz com que o scroll vá para o topo sempre que o componente for renderizado. Sem isso quando se muda de página, a próxima página não fica no topo
  }, [pathname])
  return null
}

export function MainRouter() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />   
            <Route path='/history' element={<History />} />   
            <Route path='/about-pomodoro' element={<AboutPomodoro />} />   
            <Route path='/settings' element={<Settings />} />   
            <Route path='*' element={<NotFound />} />
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
    )
}