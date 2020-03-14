import request from "./index";

const UserServices = {
    //测试用
    test() {
        console.log(2);
        request.get("/api").then(data => {
            console.log(data);
        })
    },
    //注册接口
    register({userName,password}) {
        return request.post("/api/user/register",{userName: userName,password: password});
    },
    //登录接口
    login({userName,password}) {
        return request.post("/api/user/login",{userName: userName,password: password});
    }
}


export default UserServices;