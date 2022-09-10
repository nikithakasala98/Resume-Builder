var resumeDao = require('../../src/dao/resumeDao');
var resume = require('../models/resumeModel');
var hub = require('hub');
var logger = hub.logger;

//Saving the resume

var saveResume = (module.exports.saveResume = (data, userId, req) =>{
  return new Promise((resolve, reject)=>{
    const resumeData  = new resume({
      userId: userId,
      basicInfo: data.basicInfo,
      workExp: data.workExp,
      projects: data.projects,
      education: data.education,
      achievements: data.achievements,
      summary: data.summary,
      others: data.others
    })
    return resumeDao.saveResume(resumeData);
  }).then(response =>{
    console.log("saved resume successfully", response)
  }).catch(err =>{
    logger.error('Error in saving resume', err);
  })
})