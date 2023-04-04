import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Comment({ content }) {
  return (
  <div className={styles.comment}>
    <Avatar hasBorder={false} src="https://github.com/hilariox.png"/>  
    <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Daniel</strong>
                    <time title="hoje" dateTime='2022-04-03'> Publicado há 1h </time>
                </div>
                <button title="Deletar Comentário">
                    <Trash size={20}/>
                </button>
            </header>
            <p> {content} </p>
        </div>
        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
    </div>
  </div>
  );
}