import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
})


const Label = styled('p')({
    // color: '#b9bbbe',
    fontWeight: '600',
    fontSize: '16px',
    width: '100%'
})

const Input = styled('input')({
    flexGrow: 1,
    height: '40px',
    border: '1px solid black',
    borderRadius: '5px',
    color: '#dcddde',
    background: '#23272a',
    margin: 0,
    fontSize: '16px',
    padding: '0 5px',
    width: '100%'
})

const InputWithLabel = (props) => {
    const { value, setValue, label, type, placeholder, className } = props;

    const handleValueChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <>
            <Wrapper>
                <Label className={className}>{label}</Label>
                <Input value={value} 
                       onChange={handleValueChange}
                       type={type}
                       placeholder={placeholder}
                />
            </Wrapper>
        </>
    )
}

export default InputWithLabel