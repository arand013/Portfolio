import React, { useState } from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [categories] = useState([
    { name: 'Work', description: 'Projects and Past experience' },
    { name: 'Resume', description: 'Link to Resumer here' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <About></About>
          <Projects></Projects>
        </div>
      </main>
    </div>
  );
}

export default App;