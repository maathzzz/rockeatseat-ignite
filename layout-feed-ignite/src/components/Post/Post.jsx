import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'; 

import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';

import React, { useState } from 'react'
import styles from './Post.module.css';


export function Post({author, publishedAt, content}) {
  const [ comments, setComments ] = useState([
    // 'Post muito bacana'
  ]) 

  const [ newCommentText, setNewCommentText ] = useState('')

  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit'
  // }).format(publishedAt)

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm",{
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR, 
    addSuffix: true,
  })

  function handleCreateNewComment() {
    // prevenindo o comportamento padrão do html de redirecionar
    event.preventDefault()
    //spread operator copia os valores que já existem na variável comments
    setComments([...comments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    // imutabilidade => as variáveis não sofrem mutação
    const commentWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete;
    })

    setComments(commentWithoutDeletedOne);
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Este campo é obrigatório.');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
              <strong> {author.name} </strong>
              <span> {author.role} </span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} > 
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href={line.content} target="_blank">{line.content}</a></p>;
          }
        })}

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong> Deixe seu Feedback!</strong>
        <textarea 
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentário..."
          onInvalid={handleNewCommentInvalid}
          required={true}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
