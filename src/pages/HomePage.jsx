import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Client, Databases, Account, ID} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67b4caef0022e7a2957f'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

const databases = new Databases(client);

const HomePage = (user) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {      
      const allPosts = await databases.listDocuments(
          "67b4cb6b003afaace9da",
          "67b4cb720036748189d6",
      );

      setPosts(allPosts.documents);

    };
    
    fetchPosts();
    
  }, []);

  

  return (
    <div className="flex flex-wrap gap-5 mt-10 mb-10 justify-center">
  
    {posts.map((post) => (            
          
      <div className="card bg-base-100 w-1/5 h-[32rem] shadow-xl duration-500 hover:scale-105 hover:bg-[#8c7768] overflow-hidden" key={post.$id}>
          
        <Link to={`/posts/${post.$id}`} className=''>
          <img
            src={post.image} 
            alt={post.title} 
            className=" w-full h-4/5 object-cover"
          />
            
          <div className="card-body h-full">

            <h2 className="card-title">{post.title}</h2>

            <div className='justify-items-end justify-end'>
              <h4>{post.author}</h4>
            </div>

          </div>
        </Link>
      </div>
          
    ))}
    
  </div>
  );
  
};

export default HomePage;

