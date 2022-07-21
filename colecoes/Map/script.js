function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const USUARIOS = new Map();

USUARIOS.set('Murilo', 'Admin');
USUARIOS.set('Caique', 'Admin');
USUARIOS.set('Jardel', 'Admin');
USUARIOS.set('Guilherme', 'User');

console.log(getAdmins(USUARIOS));
