import { useState } from 'react';
import ProfileCard from './ProfileCard';

const people = [
  {
    name: 'Peter Zheng',
    avatar: 'https://avatars.githubusercontent.com/u/13799221?v=4',
    description: 'I am a software enigneer',
  },
  {
    name: 'John Doe',
  },
  {
    name: 'Sarah Tyler',
  },
  {
    name: 'Hannah Strickland',
  },
  {
    name: 'Morgan Johnson',
  },
  {
    name: 'Betsy Lucas',
  },
];

function App() {
  const [selectedPerson, setSelectedPerson] = useState(people[2].name);
  return (
    <div className='App'>
      <div className='grid grid-cols-3 gap-2 p-4'>
        {people.map((person, index) => (
          <ProfileCard
            key={index}
            {...person}
            setSelectedPerson={setSelectedPerson}
          />
        ))}
      </div>

      <h1 className='text-center text-6xl font-extrabold font-mono mt-10'>
        {selectedPerson}
      </h1>
    </div>
  );
}

export default App;
