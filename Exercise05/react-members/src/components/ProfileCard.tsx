import React from "react";
import { Counter } from ".";

class ProfileCardProps {
  name?: string;
  id?: string;
  description?: string;
  imageUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  id,
  description,
  imageUrl,
}: ProfileCardProps) => {
  return (
    <div className='flex flex-col justify-center items-center w-full p-5 rounded-lg border-2 border-black mb-3 bg-gradient-to-r from-blue-50 via-gray-50 to-pink-50'>
      <div className='flex flex-col items-center 2xl:flex-row w-full'>
        {" "}
        <div className='flex flex-row justify-center w-1/3 2xl:order-2'>
          <img src={imageUrl} alt={name} className='w-10/12 rounded-full' />
        </div>
        <div className='w-2/3 flex flex-col items-center 2xl:order-1'>
          <div className='w-full 2xl:w-11/12 flex flex-col'>
            <h2 className='mt-3 mb-5 text-3xl self-center 2xl:self-start font-medium'>
              {name}
            </h2>
            <h3 className='mb-5 text-xl self-center 2xl:self-start font-medium'>
              {id}
            </h3>
            <p className='mb-5 w-full overflow-y-auto max-h-52 text-justify'>
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <Counter />
      </div>
    </div>
  );
};

export default ProfileCard;
