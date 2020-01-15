const openDBConnection = require('../openConection');

export async function insertUser(name, email, country) {
    const db = openDBConnection();
    try {
        let query = await db.query('INSER INTO users VALUES (?, ?, ?, ?, ?)', 
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

export async function updateUser(name, email, country) {
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