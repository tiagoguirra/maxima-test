'use strict'

module.exports = (req,res,next)=>{
    
    req.input = function(inputKey){
        return req.body[inputKey]
    }
    req.all = function(){     
        return {...req.body}
    }
    req.paginate = normalizePaginate(req.query)
    
    next()
}

const normalizePaginate = (query) =>{
    let { page, sortBy, descending, rowsPerPage } = query,
    paginate = {}

    let limit = Number((rowsPerPage * 1) || 20),
    offset = (((page * 1) || 1) - 1) * limit,
    sort = {}    
    if (sortBy) {
        sort[sortBy] = (String(descending) === 'true') ? 1 : -1
    }
    if (rowsPerPage) {
        paginate = { limit, offset, sort }
    }
    return paginate
}