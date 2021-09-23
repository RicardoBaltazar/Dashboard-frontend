import styled from './styled.module.scss';
import Menu from './components/sidebarMenu';
import Routes from './routes/';

const App: React.FC = () => {
  return (
    <div className={styled.App}>
      <Menu />
      <main className={styled.main}>
        <header className='shadow bg-white  px-8 flex justify-between	items-center	'>
          <p>Ola Nome</p>
          <button className='w-24 hover:bg-gray-200 py-4'>Sair</button>
        </header>
        <section className={styled.section}>
          <Routes />
        </section>
      </main>
    </div>
  );
}

export default App;
