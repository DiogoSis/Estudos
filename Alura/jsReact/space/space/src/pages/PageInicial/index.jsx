import Cabecalho from "@/components/Cabecalho";
import Menu from "@/components/Menu";
import styles from "./PaginaInicial.module.scss";
import Banner from "@/components/Banner";
import Rodape from "@/components/Rodape";
import Galeria from "@/components/Galeria";

export default function PaginaInicial(){
  return(
  <>
    <Cabecalho />
    <main className="main">
      <section className={styles.principal} >
        <Menu />
        <Banner />
      </section>
    </main>
    <div>
      <Galeria />
    </div>
    <Rodape />
  </>
  );
}