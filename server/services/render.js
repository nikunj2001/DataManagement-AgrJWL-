const axios = require('axios')
exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/users').then(response=>{
    res.render('index.ejs',{users:response.data});
    }).catch(err=>{
        res.send(err);
    })
}
exports.add_user=(req,res)=>{
    res.render('add_user.ejs');
}
exports.update_user=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}}).then(userData=>{
            res.render('update_user.ejs',{user:userData.data});

    }).catch(err=>{
        res.send(err);
    })
}
