import mongoose from "mongoose"


async function conectaBd(){
  await mongoose.connect
  ("mongodb+srv://devronaldooliveira:batatinha123%@cluster0.brmpcif.mongodb.net/sua_basede_dados")
}


export default conectaBd