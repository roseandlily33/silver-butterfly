import styled from 'styled-components';

export const MyPlaylistContainer = styled.section`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    border-left: 5px solid ${({theme}) => theme.colors.darkCream};
    input{
        border: none;
        border-bottom: 2px solid var(--pink);
        padding: 1rem;
        background-color: ${({theme}) => theme.colors.lightCream};
        border-radius: 5px;
    }
    .playlistSong{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid ${({theme}) => theme.colors.pink};
    }
  
    @media screen and (max-width: 750px){
        width: 95%;
        height: 40vh;
        border-left: none;
    }
`;