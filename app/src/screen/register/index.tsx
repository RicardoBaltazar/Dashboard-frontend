import styled from './styled.module.scss';

const pageRegister = () => {
    return (
        <>
            <section className={styled.section}>
                <div className={styled.card}>
                    <div className={styled.headerCard}>
                        <p>Empresas/CADASTRAR EMPRESAS</p>
                        <button>SALVAR</button>
                    </div>
                    <form className={styled.form}>
                        <div>
                            <label htmlFor="">Nome Da Empresa</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Cnpj</label>
                            <input type="number" />
                        </div>
                        <div>
                            <label htmlFor="">Cidade/UF</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">CEP</label>
                            <input type="number" />
                        </div>
                        <div>
                            <label htmlFor="">Data de Abertura</label>
                            <input type="date" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default pageRegister;