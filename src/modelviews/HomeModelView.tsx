import { create } from "zustand";
import PostModel from "../models/PostModel";
import IPostService from "../Services/PostService/IPostService";
import PostService from "../Services/PostService/PostService";
import axios, { AxiosError, AxiosResponse } from "axios";



type useStoretype={


    posts:PostModel[]|null,

    setPosts:(postsList:PostModel[])=>void;
    
}


const useStore=create<useStoretype>((set)=>({

    posts:null,
    setPosts:(postsList:PostModel[])=>set((state)=>({

        posts:postsList



    })) 

})
);




class HomeModelView {




    private static instance:HomeModelView;

     public store!:typeof useStore;
    
     public postService!:IPostService;

    public constructor(){

        if(!HomeModelView.instance){

            this.store=useStore;
            this.postService=new PostService();

            HomeModelView.instance=this;


            
        }

        return HomeModelView.instance;


    }


    async fetchPosts():Promise<void>{


        try{


            let postsList:PostModel[];


            let responce:AxiosResponse=await this.postService.fetchPosts();


            let responceData:{[key:string]:any}[]=responce.data

            postsList=responceData.map((item)=>{
                return PostModel.fromJson(item);

                
            });

            this.store.getState().setPosts(postsList);


            



        }catch(error){

            if(axios.isAxiosError(error)){

            }


        }
    }

    deleteClick():void{

       



        let posts:PostModel[]=HomeModelView.instance.store.getState().posts!;

        let index:number=posts.findIndex(item=>item.id==100);

        posts[index]={...posts[index],body:"hey"};


        HomeModelView.instance.store.setState({posts:[...posts]});


        

        
    }

    





}

const instance:HomeModelView=new HomeModelView();


export default instance;