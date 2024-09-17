import React from 'react';
import styles from './page.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <button>Gmail</button>
          <button>Imagens</button>
          <button>Fazer login</button>
        </div>
      </div>
      <div className={styles.search}>
        <div className={styles.logoImage}>
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" />
        </div>
        <input type="text" placeholder="Pesquisar no Google" />
        <div className={styles.buttonsContainer}>
          <button className={styles.searchButton}>Pesquisa Google</button>
          <button className={styles.searchButton}>Estou com sorte</button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.links}>
          <a href="#">Sobre</a>
          <a href="#">Publicidade</a>
          <a href="#">Negócios</a>
          <a href="#">Como funciona a Pesquisa</a>
        </div>
        <div className={styles.links}>
          <a href="#">Privacidade</a>
          <a href="#">Termos</a>
          <a href="#">Configurações</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
