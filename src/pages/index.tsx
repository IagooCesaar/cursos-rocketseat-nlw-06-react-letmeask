import Image from 'next/image'

import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.pageAuth}>
      <aside>
        <Image
          src="/illustration.svg"
          alt="Ilustração simbolizando perguntas e respostas"
          width="313px"
          height="403px"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div>
          <Image
            src="/logo.svg"
            alt="Letmeask"
            width="313px"
            height="403px"
          />
          <button>
            <Image
              src="/google-icon.svg"
              alt="Logo do Google"
              width="400px"
              height="100vh"
            />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  )
}
