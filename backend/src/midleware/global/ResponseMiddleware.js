module.exports = (req,res,next)=>{
    res.success = function(message,data=null,status = 200){
        return res.status(status).json({
            'success':true,
            'message':message,
            'data':data
        });
    }
    res.error = function(message,data = null,status = 400){        
        return res.status(status).json({
            'success':false,
            'message':message,
            'error':data
        });
    }
    next()
}