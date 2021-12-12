type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {
  // default props // messageCount = 0
  const { messageCount = 0, name, isLoggedIn } = props;

  return (
    <div>
      <h2>
        {
          isLoggedIn 
          ? 
          `Welcome ${name}! You have ${messageCount} unread messages` 
          :
          'Welcome guest'
        }
      </h2>
    </div>
  )
}