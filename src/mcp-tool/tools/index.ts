import { BuiltinToolName, BuiltinTools } from './en/builtin-tools';
import { BuiltinTools as BuiltinToolsZh } from './zh/builtin-tools';
import { ToolName as GenToolName, GenTools as GenToolsEn, ProjectName as GenProjectName } from './en/gen-tools';
import { GenTools as GenToolsZh } from './zh/gen-tools';

export type ToolName = GenToolName | BuiltinToolName;
export type ProjectName = GenProjectName;

export const AllTools = [...GenToolsEn, ...BuiltinTools];
export const AllToolsZh = [...GenToolsZh, ...BuiltinToolsZh];
