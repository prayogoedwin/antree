import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';


const bcrypt = bcryptjs;

export const signIn = async (req, res) => {

    try {
        const user = await User.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json({
           'status' : 1,
           'message': 'Success',
           'data': user[0]
         });
    } catch (error) {
        res.json({
            'status' : 0,
            'message': error.message,
            'data': null
          });
        res.json({message: error.message});
    }
    
}


export const signUp = async (req, res) => {

    try {
        const user = await User.create(
            {
                id: null,
				email: req.body.email,
				nama: req.body.nama,
				password: bcrypt.hashSync(req.body.password, 11),
                role_id: req.body.role_id,
                created_by: req.body.created_by,
			}
        )
        res.json({
            'status' : 1,
            'message': 'Success',
            'data': user
          });
    } catch (error) {
        res.json({
            'status' : 0,
            'message': error.message,
            'data': null
          });
    }
    
}
