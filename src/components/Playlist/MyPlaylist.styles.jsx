import styled from 'styled-components';

export const MyPlaylistContainer = styled.section`
    border: 5px solid blue;
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    input{
        border: none;
        border-bottom: 2px solid var(--pink);
        padding: 1rem;
        background-color: var(--lightCream);
        border-radius: 10px;
    }
    @media screen and (max-width: 750px){
        border: 1px solid orange;
        width: 95%;
        height: 30vh;
    }
`;