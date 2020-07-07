import styled from '@emotion/styled';

function Fundo({ img }){
    const FundoStyled = styled.div`    
        .overlay-maior{
            background:                 
                ${props => props.theme.colors['gradienteBase']},
                url(${img}) no-repeat center fixed;
            background-size: 150%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        } 

        .overlay-menor{
            background:                 
                ${props => props.theme.colors['gradientePesquisa']},
                url(${img}) no-repeat center fixed;
            background-size: 120%;
            display: block;
            position: absolute;
            top: 20vh;
            right: 0;
            width: 80vw;
            height: 100vh;
            overflow: hidden;
        }          
    `

    return (
        <FundoStyled>            
            <div className="overlay-maior"></div>
            <div className="overlay-menor"></div>
        </FundoStyled>
    ) 
}



export default Fundo;