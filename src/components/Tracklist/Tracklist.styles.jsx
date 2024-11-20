import styled from 'styled-components';

export const EachSongContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.5em;
      padding: 0.5em;
      border: ${({theme}) => theme.colors.border};
      border-radius: ${({theme}) => theme.colors.borderRadius};
      background-color: rgba(240, 239, 238, 0.5);
    .songLeft{
      display: flex;
      gap: 1em;
      align-items: center;
      color: ${({theme}) => theme.colors.purple};
  }
`;