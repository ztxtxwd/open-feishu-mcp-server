import { docxBuiltinToolName, docxBuiltinTools } from './docx/builtin';
import { imBuiltinToolName, imBuiltinTools } from './im/buildin';

export const BuiltinTools = [...docxBuiltinTools, ...imBuiltinTools];

export type BuiltinToolName = docxBuiltinToolName | imBuiltinToolName;
