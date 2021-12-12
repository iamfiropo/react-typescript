import './App.css';
import { Button } from './components/button';
import { Container } from './components/container';
import { Box } from './components/context/box';
import { ThemeContextProvider } from './components/context/theme-context';
import { UserContextProvider } from './components/context/user-context';
import { Greet } from './components/greet';
import { Heading } from './components/heading';
import { Input } from './components/input';
import { Oscar } from './components/oscar';
import { Person } from './components/person';
import { PersonList } from './components/person-list';
import { DomRef } from './components/ref/dom-ref';
import { MutableRef } from './components/ref/mutable-ref';
import { Counter } from './components/class/counter';
import { User } from './components/state/user';
import { Status } from './components/status';
import { Private } from './components/auth/private';
import { Profile } from './components/auth/profile';
import { List } from './components/generics/list';
import { RandomNumber } from './components/restriction/random-number';
import { Toast } from './components/template-literals/toast';
import { CustomButton } from './components/html/button';
import { Text } from './components/polymorphic/text';

function App() {
  const name = {
    first: "Ropo",
    last: "Olatujoye"
  }

  const personList = [
    {
      first: "Ropo",
      last: "Olatujoye"
    },
    {
      first: "Josh",
      last: "Too Funny"
    },
    {
      first: "Kate",
      last: "Rice"
    }
  ]

  return (
    <div className="App">
      <Status status='loading' />
      <Heading>This life</Heading>
      <Oscar>
        <Heading>Yes it is</Heading>
      </Oscar>
      <Greet name='Ropo' messageCount={90} isLoggedIn={true}/>
      <Person name={name} />
      <PersonList names={personList} />
      <Button handleClick={(event, id) => (console.log('Button clicked', event, id))}/>
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem'}} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter message='Count the counter' />
      <Private isLoggedIn={true} component={Profile}/>
      {/* <List 
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
       />
      <List items={[1,2,3]} onClick={(item) => console.log(item)}
       /> */}
      <List 
        items={[
          {
            id: 1,
            first: 'Ropo',
            last: 'Olatujoye'
          },
          {
            id: 2,
            first: 'Peace',
            last: 'Kent',
          },
          {
            id: 3,
            first: 'Shaw',
            last: 'Lay'
          }
        ]}
        onClick={(item) => console.log(item)}
       />
       <RandomNumber value={10} isPositive />
       <RandomNumber value={10} isNegative />
       <RandomNumber value={10} isZero />
       <Toast position='left-center' />
       <CustomButton variant='primary' onClick={() => console.log('Clicked')}>Primary Button</CustomButton>
       <Text as='h1' size='lg'>Heading</Text>
       <Text as='p' size='md'>Paragraph</Text>
       <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
