import { Name } from './person.types';

type PersonListProps = {
  names: Name[]
}

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {
        names.map((name, key) => (
          <h2 key={key}>{name.first} {name.last}</h2>
        ))
      }
    </div>
  )
}