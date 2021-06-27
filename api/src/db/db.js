const Sequelize = require("sequelize");
const config = require('config');

const UserModel = require("../models/user");
const UserTypeModel = require("../models/userType");
const ProjectModel = require("../models/project");
const SkillModel = require("../models/skill");
const CategoryModel = require("../models/category");
const ApplicationModel = require("../models/application");
const NewsModel = require("../models/news");
const StudentDetailsModel = require("../models/studentDetails");


const conn = new Sequelize(config.get('dbConfig.mysql.db'),config.get('dbConfig.mysql.user'), config.get('dbConfig.mysql.password'),config.get('dbConfig.mysql.sequelizeOpt') );

// Tablas en BD
const User = UserModel(conn,Sequelize);
const UserType = UserTypeModel(conn,Sequelize);
const Project = ProjectModel(conn,Sequelize);
const Skill = SkillModel(conn,Sequelize);
const Category = CategoryModel(conn,Sequelize);
const Application = ApplicationModel(conn,Sequelize);
const News = NewsModel(conn,Sequelize);
const StudentDetails = StudentDetailsModel(conn,Sequelize);