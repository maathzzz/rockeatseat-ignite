import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post'

import viteLogo from '/vite.svg'
import styles from './App.module.css';
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/victoriacassolo.png",
      name: "Victoria Cassolo",
      role: "Dev Front-end"
    },
    content: [
      {type: 'paragraph', content: 'Bom dia Pessoal 👋',},
      {type: 'paragraph', content: 'Acabei mais um curso de responsividade da Rocketseat 🚀',},
      {type: 'link', content: 'https://www.youtube.com',},  
    ],
    publishedAt: new Date('2023-04-04 11:38:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/danielneris.png",
      name: "Daniel de Souza Neris",
      role: "Head de Desenvolvimento"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare',},
      {type: 'link', content: '#novoprojeto',},   
    ],
    publishedAt: new Date('2023-04-03 12:00:00'),
  },
]


function App() {

  return (
    <div className="App">
      <Header />
      
      <div className={styles.wrapper}> 
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App