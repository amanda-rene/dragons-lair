module.exports = {
    usersOnly: (req, res) => {
        if(!req.session.user) {
            return res.status(401).send('Login plz');
        }
        next();
    },

    adminsOnly: (req, res) => {
        if(!req.admin.user.isAdmin) {
            return res.status(403).send(`You're not an admin!`);
        }
        next();
    }
}