const withAuth = (req, res, next) => {
    // if user is not logged in, redirect request to login route
    
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;