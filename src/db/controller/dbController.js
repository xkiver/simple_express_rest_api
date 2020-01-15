const { openDBConnection } = require('../openConection');

async function insertUser(name, email, country) {
    const db = openDBConnection();
    try {
        let query = await db.query('INSERT INTO users VALUES (?, ?, ?, ?, ?)', 
        [
            email, 
            name, 
            country, 
            new Date(), 
            undefined
        ]);
        if(query) {
            return {
                succesfull: true
            }
        } else {
            return {
                succesfull: false
            }
        }
    } catch (err) {
        console.log(err);
        return {
            succesfull: false, 
            error: err
        }
    } finally {
        await db.close();
    }  
}

async function updateUser(name, email, country) {
    const db = openDBConnection();
    try {
        let query = await db.query(`UPDATE users 
                                            SET nombre = COALESCE(?, nombre),
                                                nacionalidad = COALESCE(?, nacionalidad),
                                                updated_at = ?
                                            WHERE email = ?`, 
        [
            name, 
            country, 
            new Date(), 
            email
        ])
        if(query) {
            return {
                succesfull: true
            }
        } else {
            return {
                succesfull: false
            }
        }
    } catch (err) {
        console.log(err);
        return {
            succesfull: false, 
            error: err
        }
    } finally {
        await db.close();
    }  
}

module.exports.insertUser = insertUser;
module.exports.updateUser = updateUser;