class PostModel {



    userId:number;

    id:number;
    title:string;
    body:string;



    public constructor(userId:number, id:number, title:string, body:string){


        this.userId = userId;

        this.id = id;

        this.title = title; 

        this.body = body;   
    }



    public static fromJson(jsonData:{[key:string]:any}):PostModel{


        return new PostModel(jsonData["userId"],jsonData["id"],jsonData["title"],jsonData["body"]);



    }


}

export default PostModel;