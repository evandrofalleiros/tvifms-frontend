import QRCode from 'qrcode.react';
import styled from '@emotion/styled';

function SaibaMais({ url }){
    return (
        <SaibaMaisStyled>
            <p>Saiba mais</p>
            <QRCode value={url} className="qrcode" />
        </SaibaMaisStyled>
    )
}

const SaibaMaisStyled = styled.div`
    background: white;
    border-radius: 2px 2px 0 0;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    bottom: 0;
    padding: 2rem;
    position: fixed;
    right: 2rem;
    z-index: 9999;

    > p{
        color: rgba(0,0,0,0.7);
        font-weight: bold;
        letter-spacing: 3px;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
`

export default SaibaMais;