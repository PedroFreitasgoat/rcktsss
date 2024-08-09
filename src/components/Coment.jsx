import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Coment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Coment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }


    return (
        <div className={styles.coment}>
            <Avatar hasBorder={false} src="https:/github.com/mariaemf.png" alt="" />

            <div className={styles.comentBox}>
                <div className={styles.comentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maria cabeçuda</strong>
                            <time title='7 de Agostto ás 16:42h' datetime="2024-08-07 16:42:00">Cercad de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}