import styled from '@emotion/styled';

function Mensagem({ descricao }){
    return (
        <MensagemStyle>
            <p className="texto-mensagem">{descricao}</p>
        </MensagemStyle>
    ) 
}

const MensagemStyle = styled.div`
    align-items: center;
    background: ${props => props.theme.colors.translucidWhite};
    border-radius: 2px;
    color: ${props => props.theme.colors.black};
    display: flex;
    flex: 1;
    font-size: 3rem;
    justify-content: center;
    padding: 4rem;
    width: 82vw;

    position: absolute;
    left: 7.25rem;
    top: 29rem;
    z-index: 9999;
`

export default Mensagem;