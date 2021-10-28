import express from 'express';
import {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    softDeleteRole,
    deleteRole
} from '../controllers/Role.js';

const router = express.Router();

router.get('/', getAllRoles);
router.post('/', createRole);
router.get('/:id', getRoleById);
router.patch('/:id', updateRole);
router.patch('/softdel/:id', softDeleteRole);
router.delete('/:id', deleteRole);

export default router;