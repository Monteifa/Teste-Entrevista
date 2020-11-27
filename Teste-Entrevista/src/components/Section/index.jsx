import React, { useState, useEffect } from 'react';

import Carousel from '../Carousel';
import { emailValidation, telValidation } from '../../utils/formValidation';

import './styles.css';

export default function Section() {
  const [inputName, setInputName] = useState('');
  const [submitedName, setSubmitedName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [submitedEmail, setSubmitedEmail] = useState('');
  const [inputTel1, setInputTel1] = useState('');
  const [submitedTel1, setSubmitedTel1] = useState('');
  const [inputTel2, setInputTel2] = useState('');
  const [submitedTel2, setSubmitedTel2] = useState('');

  const [emailValidated, setEmailValidated] = useState(true);
  const [tel1Validated, setTel1Validated] = useState(true);
  const [tel2Validated, setTel2Validated] = useState(true);

  const [images, setImages] = useState();

  useEffect(() => {
    fetch('https://picsum.photos/v2/list').then((response) => {
      response.json().then((data) => setImages(data));
    });
  }, []);

  function handleSubmit() {
    if (
      inputName.length > 0 &&
      inputEmail.length > 0 &&
      inputTel1.length > 0 &&
      emailValidated &&
      tel1Validated &&
      tel2Validated
    ) {
      setSubmitedName(inputName);
      setInputName('');
      setSubmitedEmail(inputEmail);
      setInputEmail('');
      setSubmitedTel1(inputTel1);
      setInputTel1('');
      !inputTel2
        ? setSubmitedTel2('Não informado')
        : setSubmitedTel2(inputTel2);
      setInputTel2('');

      alert('Candidatura enviada com sucesso');
    }
  }

  function handleValidationSubmit(event) {
    event.preventDefault();

    setEmailValidated(emailValidation(inputEmail));

    setTel1Validated(telValidation(inputTel1));

    if (inputTel2) {
      setTel2Validated(telValidation(inputTel2));
    }
    handleSubmit();
  }

  return (
    <div className='container'>
      <div className='box-container input-box'>
        <h1>Venha trabalhar na Docket</h1>
        <p>
          Preencha o formulário e venha trabalhar em uma das startups mais
          desejadas do Brasil!
        </p>

        <h3>Dados Pessoais</h3>

        <form onSubmit={handleValidationSubmit}>
          <label htmlFor='nome'>Nome Completo:</label>
          <input
            type='text'
            id='nome'
            placeholder='Seu nome completo'
            onChange={(event) => setInputName(event.target.value)}
            value={inputName}
          />

          <label htmlFor='email'>E-mail:</label>
          <input
            type='text'
            id='email'
            placeholder='seunome@sobrenome.com.br'
            onChange={(event) => setInputEmail(event.target.value)}
            value={inputEmail}
            className={!emailValidated ? 'error' : ''}
          />
          {!emailValidated && <span>E-mail inválido</span>}

          <div className='tel-container'>
            <div className='tel-item'>
              <label htmlFor='tel-1'>Telefone 1:</label>
              <input
                type='tel'
                id='tel-1'
                placeholder='(88) 8888-8888'
                onChange={(event) => setInputTel1(event.target.value)}
                value={inputTel1}
                className={!tel1Validated ? 'error' : ''}
              />
              {!tel1Validated && <span>Telefone inválido</span>}
            </div>
            <div className='tel-item'>
              <label htmlFor='tel-2'>Telefone 2:</label>
              <input
                type='tel'
                id='tel-2'
                placeholder='(88) 8888-8888'
                onChange={(event) => setInputTel2(event.target.value)}
                value={inputTel2}
                className={!tel2Validated ? 'error' : ''}
              />
              {!tel2Validated && <span>Telefone inválido</span>}
            </div>
          </div>
          <input type='submit' value='Enviar' className='button' />
        </form>
      </div>

      <div className='box-container receive-box'>
        <h1>Ficha do candidato</h1>
        {submitedName ? (
          <form>
            <label htmlFor='nome'>Nome Completo:</label>
            <input type='text' id='nome' value={submitedName} readOnly />

            <label htmlFor='email'>E-mail:</label>
            <input type='email' id='email' value={submitedEmail} readOnly />

            <label htmlFor='tel-1'>Telefone 1:</label>
            <input type='tel' id='tel-1' value={submitedTel1} readOnly />

            <label htmlFor='tel-2'>Telefone 2:</label>
            <input type='tel' id='tel-2' value={submitedTel2} readOnly />
          </form>
        ) : (
          <p>
            Preencha o formulário e clique em "Enviar" após conferir
            atentamente.
          </p>
        )}

        <h4 className={submitedName ? 'fix-position' : 'position'}>
          Seus projetos:
        </h4>

        <Carousel submitedName={submitedName} images={images} />
      </div>
    </div>
  );
}
