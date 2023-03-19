import { celebrate, Joi, Segments } from 'celebrate'

export const validDeleteProject = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
})
