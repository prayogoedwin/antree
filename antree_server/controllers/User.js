import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';


const bcrypt = bcryptjs;

export const getAllUsers = async (req, res) => {

    try {
        const user = await User.findAll({
            where:{
                deleted_at: null
            }
        });
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
        res.json({message: error.message});
    }
    
}

export const getUserById = async (req, res) => {

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

export const updateUser = async (req, res) => {

    try {

        const user = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        const user_d = await user.findAll({
            where: {
                id: req.params.id
            }
        });

        res.json({
           'status' : 1,
           'message': 'Success',
           'data': user_d[0]
         });
    } catch (error) {
        res.json({
            'status' : 0,
            'message': error.message,
            'data': user_d[0]
          });
        res.json({message: error.message});
    }
    
}


export const createUser = async (req, res) => {

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

export const deleteUser = async (req, res) => {

    try {
        const user = await User.destroy({
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

export const softDeleteUser = async (req, res) => {

    try {

        const user = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        res.json({
           'status' : 1,
           'message': 'Success',
           'data': null
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