const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Roles = {
    admin: 'admin',
    user: 'user',
};

//Create Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: [Roles.user, Roles.admin],
        default: Roles.user,
    }
}, {
    timestamps: true,
    toJson: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
});

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    try {
        bcrypt.hash(user.password, 10, function(err, hash) {
            if (err) {
                throw err;
            }
            user.password = hash;
            return next();
        });
    } catch (e) {
        return next(e);
    }
});

userSchema.methods = {
    comparePassword: function(password) {
        const user = this;
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (isMatch) {
                    resolve(true);
                } else {
                    reject(err);
                }
            });
        });
    },
    createToken: function() {
        const user = this;
        return jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: 60 * 120,
        });
    },
}

//Create Model
const User = mongoose.model('User', userSchema);

//Export
module.exports = {
    userSchema,
    User,
    Roles,
}