const userEntry = require('../models/user.js')

const randomCode = ()=>{
  let code = "", picks = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890-_"
  let length = 9
  for(var i=0;i<length;i++){
    code += picks.charAt(Math.floor(Math.random() * picks.length))
  }
  console.log(code)
  return code
}

exports.addUser = (req,res)=>{
  
  let username = req.body.username
  
  if(username){
    userEntry.find({username: username},(err,data)=>{
      if(err) return res.send(err)
      if(data.length === 0){
        let id = randomCode()
        userEntry.create({_id:id, username: username})
        return res.json({_id:id, username: username})
      }
      return res.json('username already taken')
    })
  }
  else{return res.json('Invalid username')}
}

exports.getAllUsers = (req,res)=>{
  userEntry.find({},{'__v': 0},(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
}