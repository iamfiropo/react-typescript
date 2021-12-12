type StatusProps = {
  status: 'loading' | 'success' | 'error' // union
}

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === 'loading') {
    message = 'loading';
  } else if (props.status === 'success') {
    message = 'success';
  } else if (props.status === 'error') {
    message = 'error';
  }
  
  return (
    <div>Status - {message}</div>
  )
}