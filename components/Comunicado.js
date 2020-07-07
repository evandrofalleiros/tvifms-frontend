import Fundo from 'components/Fundo';
import Titulo from 'components/Titulo';
import Mensagem from 'components/Mensagem';
import SaibaMais from 'components/SaibaMais';
import styled from '@emotion/styled';

function Comunicado({ comunicado }){
    const { API_URL } = process.env;

    return (
        <ComunicadoStyled className="comunicado">
            <Fundo 
                img={API_URL + comunicado.midia.url} />
            <Titulo 
                titulo={comunicado.titulo} 
                categoria={comunicado.categoria.nome || ''}/>
            <Mensagem 
                descricao={comunicado.descricao}/>
            
            {
                comunicado.saibaMais && 
                <SaibaMais 
                    url={comunicado.saibaMais} />
            }
            
        </ComunicadoStyled>
    )
}

const ComunicadoStyled = styled.div`

`

export default Comunicado;
