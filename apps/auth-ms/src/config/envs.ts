import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  SECRET: string;
  PORT: number;
}

// validador de esquema:

const envVarsSchema: joi.ObjectSchema<EnvVars> = joi
  .object({
    PORT: joi.number().required(),
    SECRET: joi.string().required(),
  })
  .unknown(true); // para demas variables

const { error, value } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  secret: envVars.SECRET,
  port: envVars.PORT,
};
