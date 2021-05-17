import styled from './styled.module.scss';
import Menu from './components/sidebarMenu';
import Routes from './routes/';

function App() {
  return (
    <div className={styled.App}>
      <Menu />
      <main className={styled.main}>
        <header className={styled.header}>
          header
        </header>
        <section className={styled.section}>
          Início
          <Routes />
        </section>
      </main>
    </div>
  );
}

export default App;
