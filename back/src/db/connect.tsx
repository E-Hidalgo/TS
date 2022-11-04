import mongoose from "mongoose";


//? ASYNC AWAIT PROMISE PIM PAM
mongoose.connect( "mongodb://localhost:27017/meweb", {
})
  .then((db) => console.log(`DB connected`))
  .catch((err) => console.log(err));
