import viteLogo from '/vite.svg'
import './global.css'
import { Header } from './components/Header'
import { Post } from './components/Post'

function App() {

  return (
    <div className="App">
      <Header />
      
      <h1> Ignite Feed</h1>
      <Post 
        name="Matheus de Amorim Favero" 
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem maxime eos accusantium." 
      />
      <Post 
        name="Mano Hilas" 
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem maxime eos accusantium." 
      />
    </div>
  )
}

export default App
