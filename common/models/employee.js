'use strict';

module.exports = function(Employee) {
Employee.create=function(data,cb)
{
    if(!data)
    {
        let err={
            message:"No data is present"
        }
        cb(err);
    }else{
        data.Name='Rajesh';
        let msg={
            message:"Success"
        }
        cb(null,data);
    }
    
}
Employee.remoteMethod('create', {
    accepts: {arg:'data', type: 'string'},
    returns: {arg: 'data', type: 'object',root:true},
    http: {path: '/add', verb: 'post'}
});

    
};
