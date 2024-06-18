const Home = require('../model/Home');

module.exports.mostrar = (req, res) => {
    Home.find({}, (error) =>{
       return res.render('index')
    })
}
