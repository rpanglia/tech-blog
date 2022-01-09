const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'jesscrozi',
        email: 'jessicacrozie@outlook.com',
        password: 'password123'
    },
    {
        username: 'anthonyg',
        email: 'grouseeanth@outlook.com',
        password: 'password123'
    },
    {
        username: 'jordanhuggs',
        email: 'jhuggs@outlook.com',
        password: 'password123'
    },
    {
        username: 'weisemann23',
        email: 'gregweisemann@outlook.com',
        password: 'password123'
    },
    {
        username: 'sgill',
        email: 'sunnygill@gmail.com',
        password: 'password123'
    },
    {
        username: 'jessdhillon',
        email: 'jessicadhillon@gmail.com',
        password: 'password123'
    },
    {
        username: 'georgiaa',
        email: 'georgiehepler@hotmail.com',
        password: 'password123'
    },
    {
        username: 'billsmithers',
        email: 'smithbill@hotmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;