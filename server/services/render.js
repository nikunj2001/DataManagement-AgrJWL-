const axios = require('axios')
exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/users').then(response=>{
        console.log(response);
    res.render('index.ejs',{users:response.data});
    }).catch(err=>{
        res.send(err);
    })
}
exports.addRoutes=(req,res)=>{
    res.render('add_user.ejs');
}
exports.updateRoutes=(req,res)=>{
    res.render('update_user.ejs');
}
