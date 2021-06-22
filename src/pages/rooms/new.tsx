import Image from 'next/image'
import { Button } from '../../components/Button'
import { Illustration } from '../../components/Illustration';

import styles from './NewRoom.module.scss';

export default function NewRoom() {
  return (
    <div className={styles.newRoom}>
      <Illustration />

      <main>
        <div className={styles.mainContent}>
          <Image
            src="/logo.svg"
            alt="Letmeask"
            width="154.2px"
            height="69px"
          />
          <h2>Crie uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Quer entrar um uma sala já existente? <a href="#">Clique aqui</a></p>
        </div>
      </main>
    </div>
  )
}
