
module.exports ={

  addUser: async (req, res) => {
    console.log(req.body)
    const {username} = req.body
    const db = req.app.get('db')
    let user = await db.add_user({username})
    res.status(200).send(user)
  },
  getNames: async (req, res) => {
    console.log('getnames')
    const db = req.app.get('db')
    let username= await db.get_names()
    console.log(username)
    res.status(200).send(username)
  }

}