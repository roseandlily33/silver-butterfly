import styled from 'styled-components';

export const MainContent = styled.main`
        display: flex;
        flex-direction:column;
        margin: 0.5em;
        height: 55vh;
        width: 40%;
        h4{
            color: ${({theme}) => theme.colors.purple};
            background-color:rgba(246, 245, 242, 0.7);
            border-radius: ${({theme}) => theme.colors.borderRadius};
            padding: 0.2em;
        }
    @media screen and (max-width: 750px){
        width: 95%;
        height: 30vh;
        justify-content: center;
    }
`;

export const PlaylistContainerScroll = styled.section`
    overflow-x: scroll;
    max-height: 40vh;
`;



 