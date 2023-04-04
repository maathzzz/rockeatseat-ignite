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
          <Post name="Victoria" avatar="https://github.com/victoriacassolo.png"/>
          <Post name="Daniel" avatar="https://github.com/danielneris.png"/>
        </main>
      </div>
    </div>
  )
}

export default App
