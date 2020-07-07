import React from 'react';
import styled from '@emotion/styled';

function Progresso({ categoria, completo }){
    const _categoria = categoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const ProgressoStyled = styled.div`
        height: 100px;
        margin: 50;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 9999;
        transition: all 1s ease-in-out;

        .fillerStyles{
            width: ${completo}%;
            background-color: ${props => props.theme.colors[_categoria]};
            border-radius: inherit;
            text-align: right;
            transition: all 1s ease-in-out;
        }

        .labelStyles{
            padding: 5px;
            color: 'white';
            font-weight: 'bold';
        }
    `;

    return (
        <ProgressoStyled>
            <div className="fillerStyles">
                <span className="labelStyles"></span>
            </div>
        </ProgressoStyled>
    );
};

export default Progresso;