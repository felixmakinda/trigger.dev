import type { LogLevel } from "@trigger.dev/core";
import { Logger } from "@trigger.dev/core";
import { sensitiveDataReplacer } from "./sensitiveDataReplacer";
import { singleton } from "~/utils/singleton";

export const logger = new Logger(
  "webapp",
  (process.env.APP_LOG_LEVEL ?? "debug") as LogLevel,
  ["examples", "output", "connectionString", "payload"],
  sensitiveDataReplacer
);

export const workerLogger = new Logger(
  "worker",
  (process.env.APP_LOG_LEVEL ?? "debug") as LogLevel,
  ["examples", "output", "connectionString"],
  sensitiveDataReplacer
);
