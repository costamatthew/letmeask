import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

export const Home = () => {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustração" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Logo Let me Ask" />
          <button>
            <img src={googleIconImg} alt="Google Icon" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
        </div>
        <form>
          <input type="text" placeholder="Digite o código da sala" />
        </form>
        <button type="submit"> Entrar na sala </button>
      </main>
    </div>
  );
};
