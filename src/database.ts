import * as mongoose from "mongoose";

const uri  = `mongodb://127.0.0.1:27017/di_db`
  
export const connectt = () => {
  return new Promise(function (fulfill, reject){
    return mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        poolSize: 10,
        useFindAndModify: true
      },
      (err: any) => {
        if (err) {
          reject(err)
        } else {
          console.log("Successfully Connected!");
          fulfill()
        }
      }
    );
  })
}

export const disconnect = ()  => {
  console.log(process.env.NODE_ENV)
    if(process.env.NODE_ENV.toString() == "test"){
      return mongoose.connection.db.dropDatabase().then(() => {
        return mongoose.disconnect()
      
      })
    }
  else{
    return mongoose.disconnect()
  }
}

export default mongoose;
