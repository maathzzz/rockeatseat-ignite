import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post'

import viteLogo from '/vite.svg'
import styles from './App.module.css';
import './global.css'


function App() {

  return (
    <div className="App">
      <Header />
      
      <div className={styles.wrapper}> 
        <Sidebar />
        <main>
          <Post 
            name="Matheus de Amorim Favero" 
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem maxime eos accusantium." 
          />
          <Post 
            name="Mano Hilas" 
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem maxime eos accusantium." 
          />
        </main>
      </div>
    </div>
  )
}

export default App
