import React, { useState } from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [categories] = useState([
    { name: 'projects', description: 'Projects and Past experience' },
    { name: 'resume', description: 'Click to see resume here' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>

            <About></About>
            <Projects currentCategory={currentCategory}></Projects>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;