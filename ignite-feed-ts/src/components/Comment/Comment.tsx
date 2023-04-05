import { Avatar } from '../Avatar/Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'; 
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        })
    }

    const dateNow = new Date()
    const publishedDateRelativeToNow = formatDistanceToNow(dateNow, {
        locale: ptBR, 
        addSuffix: true,
      })

    function handleDeleteComment(){
        onDeleteComment(content);
    }

  return (
  <div className={styles.comment}>
    <Avatar hasBorder={false} src="https://github.com/maathzzz.png" alt=""/>  
    <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Matheus de A. Favero</strong>
                    <time title="hoje" dateTime='2022-04-03'> {publishedDateRelativeToNow} </time>
                </div>
                <button onClick={handleDeleteComment} title="Deletar Comentário">
                    <Trash size={24}/>
                </button>
            </header>
            <p> {content} </p>
        </div>
        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />
                Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
    </div>
  </div>
  );
}