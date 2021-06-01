var Userdb = require('../model/model')

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty"});
        return;
    }
    const user = new Userdb({
        name:req.body.name,
        phone:req.body.phone,
        address:req.body.address,
        debit:req.body.debit,
        credit:req.body.credit,
        advance:req.body.advance,
        loan:req.body.loan,
        liability:req.body.liability,
        remark:req.body.remark,
    })
    user.save(user)
    .then(data=>{
        res.send(data)
        res.redirect('/add-user')
    }).catch(err=>{
        res.status(500).send({message:err.message||'Some error occured while entering data'})
    })
}
exports.find=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id).then(data=>{
            if(!data){
                res.status(404).send({message:"Noy found user with id"+id})
            }else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:"Error returiving user with id"+id})
        })
    }else{

    }
    Userdb.find().then(user=>{
        res.send(user)
    }).catch(err=>{
        res.status(500).send({message:err.message||'Error occured while printing data'})
    })

}
exports.update=(req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"Data to update cannot be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(data=>{
        if(!data){
            return res.status(404).send({message:`Cannot update user with ${id}. Maybe user not found`})
        }else{
            res.send(data);
        }
    }).catch(err=>{
        res.status(500).send({message:'Error in updating data'})
    })
}
exports.delete=(req,res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id).then(data=>{
        if(!data){
            res.status(404).sned({message:"Cannot delete the slected data.Maybe id is wrong"})
        }else{
            res.send({
                message:"User Deleted"
            })
        }

    }).catch(err=>{
        res.status(500).send({message:"Could not delete user with given id"})
    })
}