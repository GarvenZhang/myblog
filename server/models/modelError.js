/**
 * 模型错误类，用于操作数据库错误时返回
 * @param {Number} status - HTTP status
 * @param {String} msg - error tips
 */
class ModelError extends Error {
  constructor (status, msg) {
    super(msg)
    this.name = this.constructor.name
    this.status = status
  }
}

const otherError = (method, e) => {
  console.error('UNHANDLED EXCEPTION', method, e.stack === undefined ? e.message : e.stack)
}

const sqlError = e => {
  switch (e.code) { // just use default MySQL messages for now
    case 'ER_BAD_NULL_ERROR':
    case 'ER_DUP_ENTRY':
    case 'ER_ROW_IS_REFERENCED_2':
    case 'ER_NO_REFERENCED_ROW_2':
      throw new ModelError(403, e.message); // Forbidden
    case 'ER_BAD_FIELD_ERROR':
      throw new ModelError(500, e.message); // Internal Server Error for programming errors
    default:
      otherError('Team.update', e);
      throw new ModelError(500, e.message); // Internal Server Error for uncaught exception
  }
}

module.exports = sqlError
