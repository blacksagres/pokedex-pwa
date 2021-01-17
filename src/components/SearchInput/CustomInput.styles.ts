import { styled } from "../../stitches.config";

export const CustomInput = styled('input', {
    boxSizing: 'border-box',
    borderRadius: '1rem',
    padding: '1rem',
    width: '100%',
    
    backgroundColor: '$almost-white',

    display: 'block',

    margin: '0 auto',

    border: '2px solid black',
    outline: 'none',

    md: {
        width: '30rem',
    }
});