import { CanActivate, ExecutionContext } from "@nestjs/common";

export class RoleGaurd implements CanActivate{
        private rolePassed:String


        constructor(role:string){
            this.rolePassed=role
        }
    canActivate(context: ExecutionContext): boolean  {

              
        const ctx=context.switchToHttp();
        const request:any=ctx.getRequest<Request>();
        const pram=request.params;
        console.log(typeof(pram.id))
        
           
        return this.rolePassed==request.user.id

        
    }

}


