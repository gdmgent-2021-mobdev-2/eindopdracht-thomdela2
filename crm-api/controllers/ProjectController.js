const { Project } = require("../models/Project");
const NotFoundError = require("../errors/NotFoundError");
const ValidationError = require("../errors/ValidationError");

class ProjectController {

    getProjects = async (req, res, next) => {
        try {
            const projects = await Project.find().populate('client').exec();
            res.status(200).json(projects);
        } catch (e) {
            next(e);
        }
    }

    getProjectById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const project = await Project.findById(id).populate('client').exec();
            if (project) {
                res.status(200).json(project);
            }
            next(new NotFoundError());
        } catch (e) {
            next(e);
        }
    }

    createProject = async (req, res, next) => {
        try {
            const project = new Project(req.body);
            const p = project.save();
            res.status(200).json(project);
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    updateProjectById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const project = await Project.findById(id).exec();
            if (project) {
                project.overwrite(req.body);
                const p = await project.save();
                res.status(200).json(project);
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    deleteProjectById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const project = await Project.findById(id).exec();
            if (project) {
                await project.remove();
                res.status(200).json({});
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e);
        }
    }

}

module.exports = ProjectController;