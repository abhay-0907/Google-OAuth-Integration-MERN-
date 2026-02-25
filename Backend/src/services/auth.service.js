import 'dotenv/config'
import { UserModel } from "../models/User.Model.js";
import jwt from "jsonwebtoken"
import axios from 'axios'
import oAuth2Client from "../utils/googleConfig.js";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuthLoginService = async (code)=>{

  // 1️⃣ Exchange code for tokens
  const googleRes = await oAuth2Client.getToken(code);
  console.log("Tokens:", googleRes.tokens);
  oAuth2Client.setCredentials(googleRes.tokens);

  // 2️⃣ Get user info from Google
  const userRes = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
  );

  const { email, name, picture } = userRes.data;

  // 3️⃣ Check if user exists
  let user = await UserModel.findOne({ email });

  if (!user) {
    user = await UserModel.create({
      name,
      email,
      image: picture,
    });
  }

  // 4️⃣ Generate JWT
  const token = jwt.sign(
    { _id: user._id, email },
    "super_secret_test_string", 
    { expiresIn: "1h" } 
  );
  
  console.log("--- JWT SUCCESS! ---");

  return {
    user,
    token,
  };
};