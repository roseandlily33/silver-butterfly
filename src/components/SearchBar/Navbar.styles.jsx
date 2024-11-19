import styled from 'styled-components';

export const NavContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
    input{
        width: 17em;
        height: 4em;
        padding: 1em;
        border: var(--border);
        border-radius: var(--borderRadius);
        margin-right: 1rem;
    }

`;
