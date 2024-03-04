const User = require('../models/userModel');
class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async update(userId, data) {
        try {
            const user = await User.findByIdAndUpdate(userId, data, { new: true });
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const user = await User.findByIdAndRemove(id);
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserRepository;