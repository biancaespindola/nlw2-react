import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
        <header>
          <img src="https://avatars2.githubusercontent.com/u/32000570?s=460&u=adfa9594cc2ab602ee2db920b062c8a9c2b9e659&v=4" alt="Bianca Espindola"/>
          <div>
            <strong>Bianca Espíndola</strong>
            <span>História</span>
          </div>
        </header>
        <p>
          Entusiasta da história do Brasil e do mundo.
          <br /><br />
          Apaixonada por contar a história baseada em fatos de maneira divertida e envolvente. Defende sempre que nos anais da civilização não há vilões e moçinhos, são todos seres humanos em busca de poder.
        </p>
        <footer>
          <p>
            Preço/hora
            <strong>R$ 20,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </button>
        </footer>
      </article>
  );

}

export default TeacherItem;
