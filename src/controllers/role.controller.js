// External Modules:
import createError from 'http-errors'

// Internal Modules:
import GlobalUtils from '../utils/global.utils.js'
import RoleService from '../services/role.service.js'
import RoleConst from './../consts/role.const.js'

// Initialize Module
const RoleController = {}

RoleController.create = async (req, res, next) => {
  try {
    // Check If Roles is already Available no roles will be inserted else inserted
    let existedRoles = await RoleService.count()
    if (existedRoles) next(createError(500, 'Roles Already Existed!'))
    let data = await RoleService.create(RoleConst.rolesData)
    let response = GlobalUtils.fromatResponse(
      data,
      'Roles Created Successfully!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

RoleController.findOneById = async (req, res, next) => {
  try {
    let data = await RoleService.findOneById(req.params.id)
    let response = GlobalUtils.fromatResponse(
      data,
      'Single Blog Fetch Success!'
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

RoleController.find = async (req, res, next) => {
  try {
    let result = await RoleService.find(req.query)
    let response = GlobalUtils.fromatResponse(
      result?.data,
      'All Blogs Fetch success',
      result?.meta
    )
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

RoleController.updateOneById = async (req, res, next) => {
  try {
    let id = req.params.id
    let data = req.body
    let result = RoleService.updateOneById(id, data)

    let response = GlobalUtils.fromatResponse(result, 'Blog Update Success!')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

RoleController.deleteOneById = async (req, res, next) => {
  try {
    let id = req.params.id
    let result = RoleService.deleteOneById(id)
    let response = GlobalUtils.fromatResponse(result, 'Blog Delete Success')
    res.status(200).json(response)
  } catch (error) {
    next(createError(500, error))
  }
}

export default RoleController
