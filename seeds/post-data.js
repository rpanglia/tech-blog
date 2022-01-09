const { Post } = require('../models');

const postdata = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        post_content: 'Aenean at fringilla turpis. Pellentesque at congue ex, eu molestie odio. Quisque et massa semper, vulputate purus id, rutrum urna. Morbi ultricies magna leo, vel venenatis mi fringilla sit amet. Mauris at quam eu eros luctus viverra sit amet id massa. Nunc sodales nisl ac diam lacinia ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus feugiat est, condimentum condimentum purus maximus ac.',
        user_id: 8
    },
    {
        title: 'Sed eleifend libero in massa luctus, eu tristique est ornare.',
        post_content: 'Proin et enim sodales, volutpat quam quis, varius est. Maecenas blandit sem in mollis pulvinar. Aliquam aliquam risus id aliquam ullamcorper. Donec sed gravida nunc, posuere accumsan felis.',
        user_id: 6
    },
    {
        title: 'Sed sed massa libero.',
        post_content: 'Curabitur sollicitudin fringilla volutpat.',
        user_id: 1
    },
    {
        title: 'Aenean at fringilla turpis.',
        post_content: 'Et pharetra pharetra massa massa. Arcu non odio euismod lacinia at. Nunc sodales nisl ac diam lacinia ullamcorper.',
        user_id: 4
    },
    {
        title: 'Vestibulum scelerisque id odio tempus mattis.',
        post_content: 'Fusce condimentum pretium elementum. Ut ac purus at est feugiat tempor mollis fermentum purus. Donec volutpat elit non tellus scelerisque cursus.',
        user_id: 7
    },
    {
        title: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        post_content: 'Phasellus eu vulputate purus. In hac habitasse platea dictumst. In et fringilla tellus. Pellentesque convallis hendrerit odio id egestas.',
        user_id: 3
    },
    {
        title: 'Quisque et massa semper, vulputate purus id, rutrum urna.',
        post_content: 'AdipiscinMorbi ultricies magna leo, vel venenatis mi fringilla sit amet. Mauris at quam eu eros luctus viverra sit amet id massa. Nunc sodales nisl ac diam lacinia ullamcorper.',
        user_id: 1
    },
    {
        title: 'Ultricies integer quis auctor elit sed vulputate mi.',
        post_content: 'Donec luctus gravida risus, vel dignissim nisi consectetur et. Mauris rhoncus mi sem, et porttitor neque pharetra ac.',
        user_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;