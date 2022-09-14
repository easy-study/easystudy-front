import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import "./Home.css";
import RecommendedCourses from '../RecommendedCourses/RecommendedCourses';
import MyCourses from '../MyCourses/MyCourses';
import Suporte from '../Suporte/Suporte';
import CreateCourses from '../CreateCourses/CreateCourses';
import ListarCursos from '../ListarCursos/ListarCursos';
import SideMenu from '../SideMenu/SideMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import TopBar from '../TopBar/TopBar';
import {AuthProvider} from "../../auth/AuthContext";
import {CoursesProvider} from '../CreateCourses/CoursesContext';

function Home() {
    const isAuthenticated = !!localStorage.getItem("@Auth:token");
    console.log("logado: " + isAuthenticated)
    if (!isAuthenticated) {
        return <Navigate to="/" replace/>;
    } else {
        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(
            <BrowserRouter>
                <React.StrictMode>
                    <AuthProvider>
                        <CoursesProvider>
                            <div className="container">
                                <SideMenu/>
                                <div className='main'>
                                    <MobileMenu/>
                                    <TopBar/>
                                    <Routes>
                                        <Route path='/cursos' element={<RecommendedCourses/>}/>
                                        <Route path='/meus-cursos' element={<MyCourses/>}/>
                                        <Route path='/suporte' element={<Suporte/>}/>
                                        <Route path='/cadastrar-cursos' element={<CreateCourses/>}/>
                                        <Route path='/listar-cursos' element={<ListarCursos/>}/>
                                    </Routes>
                                </div>
                            </div>
                        </CoursesProvider>
                    </AuthProvider>
                </React.StrictMode>
            </BrowserRouter>
        );
    }
}

export default Home;
