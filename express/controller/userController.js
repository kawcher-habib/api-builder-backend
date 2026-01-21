class Users{
    constructor(name, age, password){
        this.name = name;
        this.age = age;
        this.password = password;
    }

    index(req, res){
        res.sand("Hello");
    }


    show(req, res){
        console.log("Hi");
    }

    creat(req, res){

    }

    store(req, res){

    }

    edit(req, res){

    }

    update(req, res){

    }

    destory(req, res){

    }
}

module.exports = new Users();