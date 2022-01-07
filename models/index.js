const User = require('./User');
const Post = require('./Posts');
const Comment = require('./Comments');


// User has many posts -- deleting a user will delete their posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// Post has many comments -- deleting a post, deletes comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// User has many comments -- deleting a user, deletes their comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = { User, Post, Comment }; 