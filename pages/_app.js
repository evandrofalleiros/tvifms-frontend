import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from 'theme';
import styled from '@emotion/styled';


function MyApp({ Component, pageProps }) {
    return (
        <StyledApp>
            <ThemeProvider theme={theme}>   
                <GlobalStyles /> 
                <Component {...pageProps} />
            </ThemeProvider>
        </StyledApp>
    )
}

const StyledApp = styled.div`
        
`

export default MyApp;