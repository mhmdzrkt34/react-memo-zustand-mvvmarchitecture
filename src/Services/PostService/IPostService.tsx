import { AxiosResponse } from "axios";

interface IPostService {



    fetchPosts:()=>Promise<AxiosResponse>;




}

export default IPostService;