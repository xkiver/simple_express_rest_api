const User = require('../../models/User');

async function insertUser(name, email, country) {
    const user = new User({
                            name: name, 
                            email: email, 
                            country: country
                        });
    return await user.save();
}

async function updateUser(name, email, country) {
    const user = await User.findOneAndUpdate({ email: email }, {
        name: name, 
        country: country
    })
    return user;
}

async function getAllUsers() {
    const users = await User.find();
    return users;
}

async function getUser(email) {
    const user = await User.findOne({ email: email });
    return user;
}

async function deleteUser(email) {
    try{ 
        const user = await User.findOneAndDelete({ email: email });
        return { status: 'ok' };
    } catch (err) {
        return error;
    } 
}

module.exports.insertUser = insertUser;
module.exports.updateUser = updateUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
module.exports.deleteUser = deleteUser;
