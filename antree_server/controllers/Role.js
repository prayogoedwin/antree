import Role from '../models/roleModel.js';

export const getAllRoles = async (req, res) => {

    try {
        const role = await Role.findAll({
            where:{
                deleted_at: null
            }
        });
        res.json({
           'status' : 'success',
           'message': 'List Data Role',
           'data': role
         });
    } catch (error) {
        res.json({
            'status' : 'error',
            'message': error.message,
            'data': null
          });
        res.json({message: error.message});
    }
    
}

export const getRoleById = async (req, res) => {

    try {
        const role = await Role.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json({
           'status' : 'success',
           'message': 'List Data Role',
           'data': role[0]
         });
    } catch (error) {
        res.json({
            'status' : 'error',
            'message': error.message,
            'data': null
          });
        res.json({message: error.message});
    }
    
}

export const updateRole = async (req, res) => {

    try {

        const role = await Role.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        const role_d = await Role.findAll({
            where: {
                id: req.params.id
            }
        });

        res.json({
           'status' : 'success',
           'message': 'Berhasil Update Data',
           'data': role_d[0]
         });
    } catch (error) {
        res.json({
            'status' : 'error',
            'message': error.message,
            'data': role_d[0]
          });
        res.json({message: error.message});
    }
    
}


export const createRole = async (req, res) => {

    try {
        const role = await Role.create(req.body);
        res.json({
            'status' : 'success',
            'message': 'Berhasi Tambah Data',
            'data': role
          });
    } catch (error) {
        res.json({
            'status' : 'error',
            'message': error.message,
            'data': null
          });
    }
    
}

export const deleteRole = async (req, res) => {

    try {
        const role = await Role.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
           'status' : 'success',
           'message': 'Berhasil Hapus Data',
           'data': role[0]
         });
    } catch (error) {
        res.json({
            'status' : 'error',
            'message': error.message,
            'data': null
          });
        res.json({message: error.message});
    }
    
}

export const softDeleteRole = async (req, res) => {

    try {

        const role = await Role.update(req.body, {
            where: {
                id: req.params.id
            }
        });



        res.json({
           'status' : 'success',
           'message': 'Berhasil Hapus Data',
           'data': null
         });
    } catch (error) {
        res.json({
            'status' : 'error',
            'message': error.message,
            'data': null
          });
        res.json({message: error.message});
    }
    
}