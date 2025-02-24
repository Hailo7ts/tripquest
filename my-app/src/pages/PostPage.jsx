import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router";
import { Client, Databases, Account, Query } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67b4caef0022e7a2957f'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

const databases = new Databases(client);

const PostPage = () => {

  const [post, setPost] = useState({
    title: '',
    author: '',
    image: '',
    content: '',
    stars: 0,
  });


  let { id } = useParams();

  //console.log(id) -> id
  
 

  useEffect(() => {

    const fetchPost = async () => {

      
        const res = await databases.listDocuments(
          "67b4cb6b003afaace9da",
          "67b4cb720036748189d6",
          [
              Query.equal('$id', [`${id}`])
          ]
        )
        //console.log(res) //obj{[0]:{props}}
        
        setPost(res.documents[0]);

    };

    fetchPost();
  }, []);
 
  

  const handleDelete = async (id) => {
    try {
      //delete post
      const result = await databases.deleteDocument(
        "67b4cb6b003afaace9da",
        "67b4cb720036748189d6",
        `${id}`,
    );
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  

  return (
    <div className='container justify-self-center m-8' key={id}>
      <div className="bg-[#b6866e] card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={post.image} 
            alt={post.title}  />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.content}</p>
          <span>{post.author}</span>
          <span>{post.stars}</span>
          <div className="card-actions justify-end">
            <Link to={`/posts/edit/${id}`} className="btn btn-primary"> Edit </Link>
            <Link to={`/`} onClick={() => handleDelete(id)} className="btn btn-primary">Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PostPage;