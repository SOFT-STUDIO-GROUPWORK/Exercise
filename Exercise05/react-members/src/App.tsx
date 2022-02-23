import { ProfileCard } from "./components";
import PROFILE_DATA from "./ProfileData";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <div className='flex flex-col items-center w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <h1 className='text-4xl text-white p-6'>Group's Members</h1>
        <div className='flex flex-col w-8/12'>
          {PROFILE_DATA.map((profile) => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              id={profile.id}
              description={profile.description}
              imageUrl={profile.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
