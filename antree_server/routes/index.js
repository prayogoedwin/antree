import express from 'express';
import {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    softDeleteRole,
    deleteRole,
} from '../controllers/Role.js';

import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    softDeleteUser,
    deleteUser
} from '../controllers/User.js';

import {
    signIn,
    signUp,
} from '../controllers/Auth.js';



const router = express.Router();

//route auth
router.post('/login/', signIn);
router.post('/register/', signUp);

//route crud role
router.get('/role', getAllRoles);
router.post('/role', createRole);
router.get('/role/:id', getRoleById);
router.patch('/role/:id', updateRole);
router.patch('/role/softdel/:id', softDeleteRole);
router.delete('/role/:id', deleteRole);

//route crud user
router.get('/user/', getAllUsers);
router.post('/user/', createUser);
router.get('/user/:id', getUserById);
router.patch('/user/:id', updateUser);
router.patch('/user/softdel/:id', softDeleteUser);
router.delete('/user/:id', deleteUser);

export default router;