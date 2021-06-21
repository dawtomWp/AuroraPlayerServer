import styled, {css} from 'styled-components';

const Button = styled.button`
    background: ${({theme})=>theme.textColor};
    border: 3px solid ${({theme})=>theme.textColor};
    text-transform: uppercase;
    cursor: pointer;
    width:170px;
	height: 40px;
	font-size: 17px;
    border-radius:30px;
    transition: all .4s;
    &:hover {
        background:white;
        color: ${({theme})=>theme.textColor};
    }

    ${({secondary}) => secondary && css`
    
    `}
`

export default Button;