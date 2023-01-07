import mongoose from "mongoose";
const Connection = async () => {
  try {
    const URL =
      "mongodb+srv://dheeraj_05:dheeraj@0511@cluster0.d1i4dqi.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("done it");
  } catch (error) {
    console.log("error occured ", error);
  }
};
export default Connection;


// mongodb+srv://dheeraj_05:<password>@cluster0.d1i4dqi.mongodb.net/?retryWrites=true&w=majority