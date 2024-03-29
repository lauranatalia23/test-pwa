import styled from 'styled-components';

export const ButtonContainer = styled.button`
font-size:1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => 
    props.cart? "var(--mainYellow)":"var(--lightBlue)"};
color: ${props => 
    props.cart? "var(--mainYellow)":"var(--lightBlue)"};
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2 rem 0.5rem 0.2rem 0;
`;