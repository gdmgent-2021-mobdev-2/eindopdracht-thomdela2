const ValidationError = require("../errors/ValidationError");
const { User } = require("../models/User");

class UserController {

    getUserResponse = (user) => {
        return {
            user: {
                email: user.email,
                name: user.name,
                role: user.role,
                _id: user._id,
            },
            token: user.createToken(),
        }
    }

    register = async (req, res, next) => {
        try {
            const user = new User(req.body);
            const u = user.save();
            res.status(200).json(user);
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    login = async (req, res, next) => {
        const { user } = req;
        res.status(200).json(this.getUserResponse(user));
    };

    getUsers = async (req, res, next) => {
        try {
            const users = await User.find().lean().select(['name', 'email', 'role']).exec();
            res.status(200).json(users);
        } catch (e) {
            next(e);
        }
    };
}

module.exports = UserController;
