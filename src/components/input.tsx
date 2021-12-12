type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }
  
  // return <input value={props.value} onChange={props.handleChange} />
  return <input value={props.value} onChange={handleInputChange} />

}