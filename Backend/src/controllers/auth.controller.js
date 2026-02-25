import 'dotenv/config'
import {googleAuthLoginService} from '../services/auth.service.js'
export const googleAuthLoginController = async (req,res)=>{
    try {
        const { code } = req.query;

        if (!code) {
            return res.status(400).json({
                success: false,
                message: "Authorization code missing",
            });
        }

        const result = await googleAuthLoginService(code);

        return res.status(200).json({
        success: true,
        ...result,
        });
    } 
    catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }
}