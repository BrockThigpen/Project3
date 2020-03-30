//route to create new player

app.post("/players",async function
 (req,res){
let {username,score}=
  req.body;

//check if the username already exists
const alreadyExisting=await db
.collection("players")
.findone({username:username});

if (alreadyExisting){

  res.send({status:false,msg:"player username already exists"});

  console.log(`Creted Player${username}`);

  res.send({status:true, msg:"player created"});

}





//route to update player scores

app.put("/players", async function(req,res){
  let {username,score}=req.body;

//check if the username already exists

const alreadyExisting=await db
.collection("players")
.findOne({username:username});

if (alreadyExisting){
  //Update player object with username
  await db
  .collection("players")
  .updateOne({username},
  {$set:{username,score}});

  console.log(`Player ${username}score updated to ${score}`);

  res.send({status:true,
  msg:"player score updated"});}
  
  else {

    res.send({status:false,
      msg:"player username not found"});
    };


    //Access the leaderboard

    
    
    
    
    app.get("players",async function
    (req,res){
      //retrieve "lim" from the query string info
      let {lim}=req.query;
      db.collection("players")
      .find()

      //-1 is for descending and 1 is for ascending

    .sort({score:-1})
      //show only [lim]players 
      .limit(lim)
      .toArray(function(err,result){
        if (err)
        res.send({status:false,
          msg:"failed to retrieve players"});
          console.log(Array.from(result));
          res.send({status:true,msg:result});

        })})})})