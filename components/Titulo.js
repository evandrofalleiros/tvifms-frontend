import styled from '@emotion/styled';

function Titulo({ titulo, categoria }){
    const _categoria = categoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const TituloStyled = styled.header`
        .categoria{
            background: ${props => props.theme.colors[_categoria]};
            border-radius: 2px;  
            color: white; 
            font-size: 2rem;
            font-style: italic;
            left: 2rem;
            text-transform: uppercase;
            font-weight: bold;
            padding: 2rem;
            position: absolute;
            top: 4rem;        
            z-index: 9999;
        }

        .categoria:after{
            background: inherit;
            border-radius: 2px;     
            display: block;
            content: ".";
            height: 100%;
            position: absolute;
            right: -300px;
            text-indent: -9999px;
            top: 0;
            transform: skew(45deg);
            width: 400px;
            z-index: -1;
        }

        h1{
            border-radius: 2px;
            background: rgba(10,10,10,0.89);
            color: ${props => props.theme.colors.translucidWhite}; 
            font-size: 5rem;
            left: 4rem;
            line-height: 1;
            padding: 3rem 4rem 5rem 3rem;
            position: absolute;
            text-transform: uppercase;
            top: 9rem;
            width: 79vw;       
            z-index: 9999;
        }    
    `

    return (
        <TituloStyled>
            <h1>{titulo}</h1>
            <p className="categoria">#{categoria}</p>
        </TituloStyled>
    ) 
}



export default Titulo;