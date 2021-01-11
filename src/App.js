import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter, Route, Redirect} from'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import GetCourses from './hooks/GetCourses';


function App() {
  const { featuredCourses, popularCourses, offerCourses } = GetCourses();

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <div className="main">
      <Route path="/" component={Home} exact/>
      {
        popularCourses.map(course=>(
          <Route path={`/detail/${course.name.replace(/\s/g, '-')}`} render={() => (
            <Detail id={course.id} />)} exact/>
        ))
      }
      {
        offerCourses.map(course=>(
          <Route path={`/detail/${course.name.replace(/\s/g, '-')}`} render={() => (
            <Detail id={course.id} />)} exact/>
        ))
      }
      
    </div>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
