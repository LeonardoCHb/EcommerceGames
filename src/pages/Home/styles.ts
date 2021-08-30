import styled from 'styled-components'

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 2fr);
    padding: 3rem 10rem 3rem;
    li {
        display: flex;
        flex-direction: column;
        border-radius: 4%;
        padding: 2.5rem;
        margin: 3.8rem;
        max-width: 15rem;
        border: solid 0.01rem;
        color: var(--blue);
        background-color: var(--secondaryColor);
        strong, span {
            padding-top: 1rem;
        }
        button {
            margin-top: 1rem;
	        background-color:#2696e0;
	        border-radius:  1.75rem;
	        border:1px solid #29668f;
	        display:inline-block;
	        cursor:pointer;
	        color:#ffffff;
	        font-family:Arial;
	        padding:1rem 1rem;
	        text-decoration:none;
        }
        button:hover {
        	background-color:#E07026;
        }
    }
`