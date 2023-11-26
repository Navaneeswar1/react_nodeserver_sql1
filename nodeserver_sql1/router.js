const router=require('express').Router();

const{Users}=require('./usertable');

const getallusers=async(req,res)=>
{
    const users=await Users.findAll({});
    res.json(users);
};

const getuser=async(req,res)=>
{
    const id=req.params.userid;
    const user=await Users.findByPk(id);
    res.send(user);
}

const saveUser=async(req,res)=>
{
    const data=req.body;
    const newcreateduser=await Users.create(data);
    res.json(newcreateduser);
}

const deleteUser=async(req,res)=>
{
    const id=req.params.id;
    const deletedCount=await Users.destroy({where:{id:id}});
    res.json(deletedCount);
};

const updateUser=async(req,res)=>
{
    const data=req.body;
    const updateObject={...data};
    delete updateObject.id;
    const updatedCount=await Users.update(updateObject,{
        where:{id:data.id}
    })
    res.json(updatedCount);
};

const login=(req,res)=>
{
    const data=req.body;
    if(data.username=='admin'&&data.password=='admin'){
        res.json({token:'thiismytoken'});
    }else{
        res.status(406).send("Invalid Credential");
    }
};

router.post("/auth/login",login);

router.get("/users",getallusers);

router.get("/users/:userid",getuser);

router.post("/users",saveUser);

router.delete("/users/:id",deleteUser);

router.put("/users",updateUser);

module.exports=router;