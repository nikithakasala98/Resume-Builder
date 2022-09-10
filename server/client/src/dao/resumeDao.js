const mongoose = require('mongoose');
var hub = require('hub');
var logger = hub.logger;

module.exports.saveResume = (resumeData) =>{
  return new Promise((resolve,reject) =>{
    resumeData.save(function(err, result){
      if(err){
        logger.error('Error while Saving Resume Data')
        reject(err)
      }else{
        logger.info('Resume Data Saved Successfully')
        resolve(result)
      }
    })
  })
}