const mongoose = require('mongoose');

var resumeSchema = mongoose.Schema({
  userId: Number,
  basicInfo: [{type: mongoose.Schema.Types.Mixed}],
	workExp: [{type: mongoose.Schema.Types.Mixed}],
	projects: [{type: mongoose.Schema.Types.Mixed}],
	education: [{type: mongoose.Schema.Types.Mixed}],
	achievements: [{type: mongoose.Schema.Types.Mixed}],
	summary: [{type: mongoose.Schema.Types.Mixed}],
	others: [{type: mongoose.Schema.Types.Mixed}],
})

module.exports = mongoose.model('resume', resumeSchema)