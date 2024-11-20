import styled from 'styled-components';


export const SearchResultsContainer = styled.section`
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    gap: 1em;
    margin: 1em;
    height: 25vh;
`;
export const EachResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0.5em;
    height: 100%;
    justify-content: space-between;
    border: ${({theme}) => theme.colors.border};
    border-radius: ${({theme}) => theme.colors.borderRadius};
   // background-color: hsla(34, 47%, 87%, 0.7);
   background-color: rgba(246, 245, 242, 0.5);
    color: ${({theme}) => theme.colors.purple};
    img{
        width: 70%;
        border-radius: ${({theme}) => theme.colors.borderRadius};
    }
`;
