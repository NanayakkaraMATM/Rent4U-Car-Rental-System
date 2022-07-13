import styled from "styled-components";
export default function Input({ type, placeholder,name,value,onChange }) {
  return <StyledInput type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #e99f4e;
    backdrop-filter: blur(12px);
    border-radius: 2rem;
    backdrop-filter: opacity(20%);
  }

  &::placeholder {
    color:black	;
    font-weight: 100;
    font-size: 1rem;
  }
`;