
const app= {
    login:false,
    isLogin:function(isLogin){
        if(isLogin!=undefined&&isLogin!=null){
            this.login=isLogin
        }
        return this.login;
    },
    onLaunch:function(){
        
        
    }

}
export default app