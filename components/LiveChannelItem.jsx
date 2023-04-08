import Image from 'next/image';
import React from 'react';
import { useRouter } from "next/router";

const LiveChannelItem = ({ img, profile_img, title, user, game, }) => {
  const router = useRouter();

  const handleItemClick=()=>{
    console.log("Item clicked");
    router.push('/abc');
  };
  return (
    <div className='p-2 w-full ' onClick={handleItemClick}>
      <Image className="cate-img" src={img} alt='/' width='555' height='315' />
      <div className='flex pt-2'>
        <div className='pr-2'>
          <Image
            src={profile_img}
            alt='/'
            width='60'
            height='60'
            className='rounded-full'
          ></Image>
        </div>
        <div>
          <p className='text-sm font-bold'>{title}</p>
          <p className='text-sm text-gray-500'>{user}</p>
          <p className='text-sm text-gray-500'>{game}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveChannelItem;
