import styled from '@emotion/styled';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Comunicado from 'components/Comunicado';
import Progresso from 'components/Progresso';
import React, { useEffect, useState } from 'react';

function Home({ comunicados, tempoExibicao }) {
  let _completo = 0;
  const [completo, setCompleto] = useState(0);
  let _indice = 0;
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    var id = setInterval(frame, tempoExibicao / 100);
        
    function frame() {
      _completo++;
      setCompleto(_completo);
    }

    function temporizador() {
      setTimeout(function () {
        _completo = 0;

        _indice < comunicados.length - 1?
          _indice += 1:
          _indice = 0;

        setIndice(_indice);

        temporizador();
      }, tempoExibicao);
    }

    temporizador();
  }, []);  

  return (
    <StyledHome>
      <Head>
        <title>IFMS Comunica</title>
      </Head>

      <Comunicado key={ comunicados[indice].id } comunicado={ comunicados[indice] }/>
      <Progresso categoria={comunicados[indice].categoria.nome} completo={completo}/>

    </StyledHome>
  )
} 

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const resComunicados = await fetch(`${API_URL}/comunicados`);
  const dataComunicados = await resComunicados.json();
  const resTempoExibicao = await fetch(`${API_URL}/tempo-exibicao`);
  const dataTempoExibicao = await resTempoExibicao.json();

  return { 
    props: { 
      comunicados: dataComunicados,
      tempoExibicao: dataTempoExibicao.tempo * 1000
    } 
  }
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  width: 100vw;

  > .comunicado:not(:first-of-type){
    display: none;
  }
`

export default Home;