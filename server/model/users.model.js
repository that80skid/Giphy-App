const pool = require('../config/mysql.config');
const bcrypt = require("bcrypt");

function signUp(res, username, password) {

     // Check if username already exists
    // If it does, return an error message of some sorts
    pool.query('SELECT * FROM user WHERE user.username = ?', [username], (err, results) => {
        if (err) {
            return res.send({ success: false, msg: 'Something went wrong, please try again later.' })
        }

        if (results.length > 0) {
            return res.send({ success: false, msg: 'Username Already Taken.' })
        }

        // Hash the password
        bcrypt.hash(password, 8, function(err, hashedPassword) {
          if (err) {
            return res.send({ success: false, msg: 'Something went wrong, please try again later.' })
        }
        // Store hash in your password DB.
        // Save it to the database
        // {username: username, password: hashedPassword}
        pool.query('INSERT INTO users (username, password) VALUES (?,?)',[username, hashedPassword], (err) => {
            if (err) {
                return res.send({ success: false, msg: 'Something went wrong, please try again later.' })
            }
            return res.send({ success: true, msg: 'Successfully signed up!' })
        })

    // Send a success response of some sort
    });

    })

}

function login(res, username, password) {
  // Find a user with that username
  pool.query('SELECT * FROM user WHERE user.username = ?', [username], (err, results)=>{
    if(err){
        return res.send({ success: false, msg: 'Something went wrong, please try again later.' })
    }
    if (!results[0]) {
      return res.send({ success: false, msg: 'Username or Password Invald'})
    }
    // See if the HASHED password for that user matches the password they gave us
    bcrypt.compare(password, user.password, (err, matches)=>{
      if(err){
        return res.send({ success: false, msg: 'Something went wrong, please try again later.' })
      }
      if(!matches){
        return res.send({ success: false, msg: 'Username or Password Invalid' })
      }
        return res.send({ success: true, msg: 'Welcome Back!', username: username, id: results[0].id })
    })
  })
}


module.exports.signUp = signUp;
module.exports.login = login;
