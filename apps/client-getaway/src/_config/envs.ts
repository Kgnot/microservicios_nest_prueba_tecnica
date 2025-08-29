import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  TASKS_MICROSERVICE_HOST: string;
  TASKS_MICROSERVICE_PORT: number;
  // section AUTH
  AUTH_MICROSERVICE_HOST: string;
  AUTH_MICROSERVICE_PORT: number;
  // section HISTORY-TASK
  HISTORY_TASK_MICROSERVICE_HOST: string;
  HISTORY_TASK_MICROSERVICE_PORT: number;
}

// validate schema

const envVarsSchema: joi.ObjectSchema<EnvVars> = joi
  .object({
    PORT: joi.number().required(),
    TASKS_MICROSERVICE_HOST: joi.string().required(),
    TASKS_MICROSERVICE_PORT: joi.number().required(),
    // section Auth:
    AUTH_MICROSERVICE_HOST: joi.string().required(),
    AUTH_MICROSERVICE_PORT: joi.number().required(),
    // Section History-Task
    HISTORY_TASK_MICROSERVICE_HOST: joi.string().required(),
    HISTORY_TASK_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true); // for any other env vars

const { error, value } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  tasksMicroserviceHost: envVars.TASKS_MICROSERVICE_HOST,
  tasksMicroservicePort: envVars.TASKS_MICROSERVICE_PORT,
  authMicroserviceHost: envVars.AUTH_MICROSERVICE_HOST,
  authMicroservicePort: envVars.AUTH_MICROSERVICE_PORT,
  historyTaskMicroserviceHost: envVars.HISTORY_TASK_MICROSERVICE_HOST,
  historyTaskMicroservicePort: envVars.HISTORY_TASK_MICROSERVICE_PORT,
};
