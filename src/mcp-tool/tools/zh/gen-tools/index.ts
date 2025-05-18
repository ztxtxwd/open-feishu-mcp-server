import { acsV1Tools, acsV1ToolName } from './zod/acs_v1';
import { adminV1Tools, adminV1ToolName } from './zod/admin_v1';
import { ailyV1Tools, ailyV1ToolName } from './zod/aily_v1';
import { apaasV1Tools, apaasV1ToolName } from './zod/apaas_v1';
import { applicationV5Tools, applicationV5ToolName } from './zod/application_v5';
import { applicationV6Tools, applicationV6ToolName } from './zod/application_v6';
import { approvalV4Tools, approvalV4ToolName } from './zod/approval_v4';
import { attendanceV1Tools, attendanceV1ToolName } from './zod/attendance_v1';
import { authV3Tools, authV3ToolName } from './zod/auth_v3';
import { authenV1Tools, authenV1ToolName } from './zod/authen_v1';
import { baikeV1Tools, baikeV1ToolName } from './zod/baike_v1';
import { baseV2Tools, baseV2ToolName } from './zod/base_v2';
import { bitableV1Tools, bitableV1ToolName } from './zod/bitable_v1';
import { boardV1Tools, boardV1ToolName } from './zod/board_v1';
import { calendarV4Tools, calendarV4ToolName } from './zod/calendar_v4';
import { cardkitV1Tools, cardkitV1ToolName } from './zod/cardkit_v1';
import { compensationV1Tools, compensationV1ToolName } from './zod/compensation_v1';
import { contactV3Tools, contactV3ToolName } from './zod/contact_v3';
import { corehrV1Tools, corehrV1ToolName } from './zod/corehr_v1';
import { corehrV2Tools, corehrV2ToolName } from './zod/corehr_v2';
import { docsV1Tools, docsV1ToolName } from './zod/docs_v1';
import { docxV1Tools, docxV1ToolName } from './zod/docx_v1';
import { driveV1Tools, driveV1ToolName } from './zod/drive_v1';
import { driveV2Tools, driveV2ToolName } from './zod/drive_v2';
import { ehrV1Tools, ehrV1ToolName } from './zod/ehr_v1';
import { eventV1Tools, eventV1ToolName } from './zod/event_v1';
import { helpdeskV1Tools, helpdeskV1ToolName } from './zod/helpdesk_v1';
import { hireV1Tools, hireV1ToolName } from './zod/hire_v1';
import { hireV2Tools, hireV2ToolName } from './zod/hire_v2';
import { humanAuthenticationV1Tools, humanAuthenticationV1ToolName } from './zod/human_authentication_v1';
import { imV1Tools, imV1ToolName } from './zod/im_v1';
import { imV2Tools, imV2ToolName } from './zod/im_v2';
import { lingoV1Tools, lingoV1ToolName } from './zod/lingo_v1';
import { mailV1Tools, mailV1ToolName } from './zod/mail_v1';
import { mdmV1Tools, mdmV1ToolName } from './zod/mdm_v1';
import { minutesV1Tools, minutesV1ToolName } from './zod/minutes_v1';
import { momentsV1Tools, momentsV1ToolName } from './zod/moments_v1';
import { okrV1Tools, okrV1ToolName } from './zod/okr_v1';
import { opticalCharRecognitionV1Tools, opticalCharRecognitionV1ToolName } from './zod/optical_char_recognition_v1';
import { passportV1Tools, passportV1ToolName } from './zod/passport_v1';
import { payrollV1Tools, payrollV1ToolName } from './zod/payroll_v1';
import { performanceV1Tools, performanceV1ToolName } from './zod/performance_v1';
import { performanceV2Tools, performanceV2ToolName } from './zod/performance_v2';
import { personalSettingsV1Tools, personalSettingsV1ToolName } from './zod/personal_settings_v1';
import { reportV1Tools, reportV1ToolName } from './zod/report_v1';
import { searchV2Tools, searchV2ToolName } from './zod/search_v2';
import { securityAndComplianceV1Tools, securityAndComplianceV1ToolName } from './zod/security_and_compliance_v1';
import { sheetsV3Tools, sheetsV3ToolName } from './zod/sheets_v3';
import { speechToTextV1Tools, speechToTextV1ToolName } from './zod/speech_to_text_v1';
import { taskV1Tools, taskV1ToolName } from './zod/task_v1';
import { taskV2Tools, taskV2ToolName } from './zod/task_v2';
import { tenantV2Tools, tenantV2ToolName } from './zod/tenant_v2';
import { translationV1Tools, translationV1ToolName } from './zod/translation_v1';
import { vcV1Tools, vcV1ToolName } from './zod/vc_v1';
import { verificationV1Tools, verificationV1ToolName } from './zod/verification_v1';
import { wikiV1Tools, wikiV1ToolName } from './zod/wiki_v1';
import { wikiV2Tools, wikiV2ToolName } from './zod/wiki_v2';
import { workplaceV1Tools, workplaceV1ToolName } from './zod/workplace_v1';
export type ToolName =
  | acsV1ToolName
  | adminV1ToolName
  | ailyV1ToolName
  | apaasV1ToolName
  | applicationV5ToolName
  | applicationV6ToolName
  | approvalV4ToolName
  | attendanceV1ToolName
  | authV3ToolName
  | authenV1ToolName
  | baikeV1ToolName
  | baseV2ToolName
  | bitableV1ToolName
  | boardV1ToolName
  | calendarV4ToolName
  | cardkitV1ToolName
  | compensationV1ToolName
  | contactV3ToolName
  | corehrV1ToolName
  | corehrV2ToolName
  | docsV1ToolName
  | docxV1ToolName
  | driveV1ToolName
  | driveV2ToolName
  | ehrV1ToolName
  | eventV1ToolName
  | helpdeskV1ToolName
  | hireV1ToolName
  | hireV2ToolName
  | humanAuthenticationV1ToolName
  | imV1ToolName
  | imV2ToolName
  | lingoV1ToolName
  | mailV1ToolName
  | mdmV1ToolName
  | minutesV1ToolName
  | momentsV1ToolName
  | okrV1ToolName
  | opticalCharRecognitionV1ToolName
  | passportV1ToolName
  | payrollV1ToolName
  | performanceV1ToolName
  | performanceV2ToolName
  | personalSettingsV1ToolName
  | reportV1ToolName
  | searchV2ToolName
  | securityAndComplianceV1ToolName
  | sheetsV3ToolName
  | speechToTextV1ToolName
  | taskV1ToolName
  | taskV2ToolName
  | tenantV2ToolName
  | translationV1ToolName
  | vcV1ToolName
  | verificationV1ToolName
  | wikiV1ToolName
  | wikiV2ToolName
  | workplaceV1ToolName;
export type ProjectName =
  | 'acs'
  | 'admin'
  | 'aily'
  | 'apaas'
  | 'application'
  | 'approval'
  | 'attendance'
  | 'auth'
  | 'authen'
  | 'baike'
  | 'base'
  | 'bitable'
  | 'board'
  | 'calendar'
  | 'cardkit'
  | 'compensation'
  | 'contact'
  | 'corehr'
  | 'docs'
  | 'docx'
  | 'drive'
  | 'ehr'
  | 'event'
  | 'helpdesk'
  | 'hire'
  | 'human_authentication'
  | 'im'
  | 'lingo'
  | 'mail'
  | 'mdm'
  | 'minutes'
  | 'moments'
  | 'okr'
  | 'optical_char_recognition'
  | 'passport'
  | 'payroll'
  | 'performance'
  | 'personal_settings'
  | 'report'
  | 'search'
  | 'security_and_compliance'
  | 'sheets'
  | 'speech_to_text'
  | 'task'
  | 'tenant'
  | 'translation'
  | 'vc'
  | 'verification'
  | 'wiki'
  | 'workplace';
export const GenTools = [
  ...acsV1Tools,
  ...adminV1Tools,
  ...ailyV1Tools,
  ...apaasV1Tools,
  ...applicationV5Tools,
  ...applicationV6Tools,
  ...approvalV4Tools,
  ...attendanceV1Tools,
  ...authV3Tools,
  ...authenV1Tools,
  ...baikeV1Tools,
  ...baseV2Tools,
  ...bitableV1Tools,
  ...boardV1Tools,
  ...calendarV4Tools,
  ...cardkitV1Tools,
  ...compensationV1Tools,
  ...contactV3Tools,
  ...corehrV1Tools,
  ...corehrV2Tools,
  ...docsV1Tools,
  ...docxV1Tools,
  ...driveV1Tools,
  ...driveV2Tools,
  ...ehrV1Tools,
  ...eventV1Tools,
  ...helpdeskV1Tools,
  ...hireV1Tools,
  ...hireV2Tools,
  ...humanAuthenticationV1Tools,
  ...imV1Tools,
  ...imV2Tools,
  ...lingoV1Tools,
  ...mailV1Tools,
  ...mdmV1Tools,
  ...minutesV1Tools,
  ...momentsV1Tools,
  ...okrV1Tools,
  ...opticalCharRecognitionV1Tools,
  ...passportV1Tools,
  ...payrollV1Tools,
  ...performanceV1Tools,
  ...performanceV2Tools,
  ...personalSettingsV1Tools,
  ...reportV1Tools,
  ...searchV2Tools,
  ...securityAndComplianceV1Tools,
  ...sheetsV3Tools,
  ...speechToTextV1Tools,
  ...taskV1Tools,
  ...taskV2Tools,
  ...tenantV2Tools,
  ...translationV1Tools,
  ...vcV1Tools,
  ...verificationV1Tools,
  ...wikiV1Tools,
  ...wikiV2Tools,
  ...workplaceV1Tools,
];
