// import React from 'react';
import Image1 from '../images/blog1/Image.png';
import Image2 from '../images/blog2/Image.png';
import Image3 from '../images/blog3/Image.png';
import Tag from "../images/instagram/tag 1.svg";
import User from "../images/instagram/user_3 1.svg";
import Arrow from "../images/instagram/Arrow.svg"
const newsItems = [
  {
    date: '18 Nov',
    tag:Tag,
    category: 'Food',
    user:User,
    author: 'By Admin',
    comments: 65,
    title: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
    image: Image1,
    readMoreIcon:Arrow,

  },
  {
    date: '29 Jan',
    tag:Tag,
    category: 'Food',
    user:User,
    author: 'By Admin',
    comments: 65,
    title: 'Eget lobortis lorem lacinia. Vivamus pharetra semper.',
    image: Image2,
    readMoreIcon:Arrow,
  },
  {
    date: '21 Feb',
    tag:Tag,
    category: 'Food',
    user:User,
    author: 'By Admin',
    comments: 65,
    title: 'Maecenas blandit risus elementum mauris malesuada.',
    image: Image3,
    readMoreIcon:Arrow,
  },
];

// ... (your imports)

// ... (your imports)

const LatestNews = () => {
  return (
    <div className="flex flex-col items-center px-5">
      <div className="text-black text-center text-3xl font-semibold leading-10 whitespace-nowrap">
        Latest News
      </div>
      <div className="self-stretch w-full mt-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {newsItems.map((newsItem, index) => (
            <div key={index} className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="relative flex-col overflow-hidden relative flex min-h-[324px] w-full pl-6 pr-16 pt-12 pb-6 items-start max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  src={newsItem.image}
                  className="absolute h-full w-full object-cover object-center inset-0"
                  alt="News Image"
                />
                <div className="relative items-stretch rounded bg-white bg-opacity-80 flex flex-col h-[58px] mt-48 px-5 py-3.5 max-md:mt-10">
                  <div className="flex gap-2 text-black text-center text-xl font-medium leading-8 whitespace-nowrap">
                    
                    {newsItem.date}
                  </div>
                 
                </div>
              </div>
              <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex flex-col p-6 rounded-none border-solid items-start max-md:max-w-full max-md:px-5">
                <div className="items-stretch self-stretch flex gap-4 pr-20 max-md:pr-5">
                  {/* Author image goes here */}
                 
                  <div className="flex justify-between gap-1 items-start">
                  <img
                      loading="lazy"
                      src={newsItem.tag}
                      className="w-4 h-4"
                      alt="User Icon"
                    />
                    <div className="text-neutral-600 text-sm leading-5 self-stretch grow whitespace-nowrap">
                      {newsItem.category}
                    </div>
                    <img
                      loading="lazy"
                      src={newsItem.user}
                      className="aspect-square object-contain object-center w-5 h-5 overflow-hidden shrink-0 max-w-full rounded-full"
                      alt="User Icon"
                    />
                    <div className="text-neutral-600 text-sm leading-5 self-stretch grow whitespace-nowrap">
                      {newsItem.author}
                    </div>
                  </div>
                  <div className="items-center flex justify-between gap-1">
                    {/* Comment icon goes here */}
                    <div className="text-stone-500 text-sm leading-5 self-stretch grow whitespace-nowrap">
                      {newsItem.comments} Comments
                    </div>
                  </div>
                </div>
                <div className="text-orange-500 text-lg font-medium leading-7 self-stretch mt-2">
                  {newsItem.title}
                </div>
                <div className="items-stretch flex gap-3 mt-5 rounded-[43px]">
                  <div className="text-orange-500 text-base font-semibold leading-5">
                    Read More
                  </div>
                  {/* Read more icon goes here */}
                  <img
                    loading="lazy"
                    src={newsItem.readMoreIcon}
                    className="aspect-[1.15] object-contain object-center w-[15px] h-[15px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                    alt="Read More Icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;


