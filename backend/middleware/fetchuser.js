var jwt = require('jsonwebtoken');

const JWT_SECRET = 'Kiranisgood$girl';


const fetchuser = (req, res, next)=>{

    // GET THE USER FROM THE JWT TOKEN AND ADD ID TO REQUEST OBJECT
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({error:  "Please authenticate using a valid token"})
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();  
    } catch (error) {
       res.status(401).send({error:  "Please authenticate using a valid token"}) 
    }

    
}


module.exports = fetchuser;