import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import IPostService from "./IPostService";
import { ExecException } from "child_process";

class PostService implements IPostService{

    axiosClient:AxiosInstance;


    public constructor(){

        this.axiosClient = axios.create(

            {
                baseURL:"https://jsonplaceholder.typicode.com/"
            }
        );

       


    }
    async fetchPosts():Promise<AxiosResponse>{

        try{


            let responce:AxiosResponse=await this.axiosClient.get("posts");
            return responce;





        }catch(error){

            throw error;


        }







        
    };


}

export default PostService;