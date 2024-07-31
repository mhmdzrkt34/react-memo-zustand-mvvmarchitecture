import HomeViewProps from "./HomeViewProps";

import HomeModelView from "../../modelviews/HomeModelView";
import PostModel from "../../models/PostModel";
import PostComponent from "../../Components/PostComponent/PostComponent";
import { useEffect } from "react";

import "./HomeView.css";

const HomeView:React.FC<HomeViewProps>=()=>{

    useEffect(()=>{


        HomeModelView.fetchPosts();
    },[]);




    return(


        PostsListner()
    );



};


export default HomeView;



const PostsListner=()=>{


    const posts:PostModel[] | null=HomeModelView.store(state=>state.posts);




    if(posts==null){

        return (

            <h1>is loading</h1>
        )


    };


    return (

        <div className="posts-container">


            {posts.map((item,index)=>{


               return (


                <PostComponent key={index} post={item}/>
               )

                
            })}


            <button onClick={HomeModelView.deleteClick}>Delete</button>
        </div>
    );




}