import React from 'react';
import Header from './components/shared/Header/Header.jsx'
import './App.css';
import TodoManager from './components/shared/TodoManager/TodoManager.jsx';
import Footer from './components/shared/Footer/Footer'


function App() {
  return (
    <div className="container">
      <p>Hello from APP</p>
      <Header />
      <TodoManager />
      <Footer />
    </div>
  );
}

export default App;
