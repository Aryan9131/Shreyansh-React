const passport=require('passport');
const PassportJWT=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;

const User=require('../models/User');

const ops={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'Social'
}

passport.use(new PassportJWT(ops, async function(jwt_payload, done){
       try {
          const user=User.findOne({_id:jwt_payload._id});
          if(!user){
             return done(null , false);
          }else{
            return done(null , user);
          }

       } catch (error) {
          console.log("Error in Authenticate user : "+error);
          return done(error , false);
       }
}))

module.exports=passport ;