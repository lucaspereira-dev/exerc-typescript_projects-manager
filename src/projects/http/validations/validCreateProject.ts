import { celebrate, Joi, Segments } from 'celebrate'

export const validCreateProject = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    owner: Joi.string().required(),
  }),
})
