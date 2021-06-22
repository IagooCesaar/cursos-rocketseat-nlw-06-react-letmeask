import Image from 'next/image'
import React from 'react';
import { Button } from '../components/Button'
import { Illustration } from '../components/Illustration'

import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Illustration />

      <main>
        <div className={styles.mainContent}>
          <Image
            src="/logo.svg"
            alt="Letmeask"
            width="154.2px"
            height="69px"
          />
          <button className={styles.createRoom}>
            <Image
              src="/google-icon.svg"
              alt="Logo do Google"
              width="24px"
              height="24px"
            />
            <span>Crie sua sala com o Google</span>
          </button>
          <div className={styles.separator}>ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}
