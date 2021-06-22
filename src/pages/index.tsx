import React from 'react';
import Image from 'next/image'

import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';

import { Button } from '../components/Button'
import { Illustration } from '../components/Illustration'

import styles from './home.module.scss';


export default function Home() {
  const router = useRouter();
  const { signInWithGoogle, isAuthenticated } = useAuth();

  async function handleCreateRoom() {
    if (!isAuthenticated) {
      await signInWithGoogle();
    }
    router.push('/rooms/new')
  }

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
          <button
            className={styles.createRoom}
            onClick={handleCreateRoom}
          >
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
