const mongoose = require("mongoose");

const ResumeDetailsScehma = new mongoose.Schema(
  {
    userId: String,
    basicInfo: [{type: mongoose.Schema.Types.Mixed}],
    workExp: [{type: mongoose.Schema.Types.Mixed}],
    projects: [{type: mongoose.Schema.Types.Mixed}],
    education: [{type: mongoose.Schema.Types.Mixed}],
    achievements: [{type: mongoose.Schema.Types.Mixed}],
    summary: [{type: mongoose.Schema.Types.Mixed}],
    others: [{type: mongoose.Schema.Types.Mixed}],
  },
  {
    collection: "resumeData",
  }
);

mongoose.model("resumeData", ResumeDetailsScehma);
