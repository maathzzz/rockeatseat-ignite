import React from 'react'
import styles from './Post.module.css';

export function Post() {

  const dataNow = new Date().toLocaleDateString('pt-BR')

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/86098429?v=4'/>
          <div className={styles.authorInfo}>
              <strong> Matheus de Amorim Favero </strong>
              <span> Web Developer </span>
          </div>
        </div>

        <time title={dataNow} dateTime='2022-04-03'> Publicado há 1h </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong> Deixe seu Feedback!</strong>

        <textarea placeholder="Deixe um comentário..."/>

        <button type="submit">Comentar</button>
      </form>
    </article>
  )
}
