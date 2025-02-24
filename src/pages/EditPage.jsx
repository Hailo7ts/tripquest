import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import { Client, Databases, Account, Query } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67b4caef0022e7a2957f'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

const databases = new Databases(client);

const EditPage = () => {

  //initialize state to post selected
    const [post, setPost] = useState({
      title: '',
      author: '',
      image: '',
      content: '',
      stars: 0,
    });
  
    let { id } = useParams();
    let navigate = useNavigate();


  const updatePost = async() =>{
     //stop refresh after form submit
     //event.preventDefault()
    const postToBeUpdated = await databases.updateDocument(
        "67b4cb6b003afaace9da",
        "67b4cb720036748189d6",
        `${id}`,
        { "title": post.title,
          "author" : post.author,
          "image" : post.image,
          "content" : post.content,
        }
    );
    console.log(postToBeUpdated)
  }

    //console.log(id)

  //fetch post by id
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
  
  //set values of post to input values
  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  //
  const handleSubmit = async e => {
    e.preventDefault();
    await updatePost(post)
    navigate('/');
  };


    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Edit Pin!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>

                <div className="bg-[#b6866e] card lg:card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={post.image}
                      alt="Album" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.content}</p>
                    <span>{post.author}</span>                    
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <form onSubmit={handleSubmit} className="card-body">

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" onChange={handleChange} required />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Author</span>
                    </label>
                    <input type="text" name="author" placeholder="Author" className="input input-bordered" onChange={handleChange} required />              
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered" onChange={handleChange} required />              
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Content</span>
                    </label>
                    <input type="textarea" name="content" placeholder="Content" className="input input-bordered" onChange={handleChange} required />              
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating 1-5</span>
                    </label>
                    <input type='number' name="stars" placeholder="Rating" className="input input-bordered" onChange={handleChange} required />              
                  </div>

                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Update</button>
                  </div>
                </form>

              </div>
            </div>
        </div>
    )
}

export default EditPage;
