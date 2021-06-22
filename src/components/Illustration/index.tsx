import Image from 'next/image'

import styles from './Illustration.module.scss';

export function Illustration() {
  return (
    <aside className={styles.illustration} >
      <Image
        src="/illustration.svg"
        alt="Ilustração simbolizando perguntas e respostas"
        width="313px"
        height="403px"
      />
      <strong>Crie salas de Q&amp;A ao vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo real</p>
    </aside>
  )
}