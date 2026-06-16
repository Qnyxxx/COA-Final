/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type FormType = '016' | '51' | '54' | 'Checks';
export type CategoryType = 'Balance' | 'Received' | 'Issued';

export interface SerialRange {
  id: string;
  serialStart: string;
  serialEnd: string;
  quantity: number;
}

export interface AuditFile {
  id: string;
  formType: FormType;
  title: string;
  date: string;
  amount: number;
  withValues: boolean;
  balanceRanges: SerialRange[];
  receivedRanges: SerialRange[];
  issuedRanges: SerialRange[];
  actualRanges?: SerialRange[];
  // Address descriptors for the folder hierarchy mapping
  addressType?: 'province' | 'city' | 'municipality' | 'brgy';
  provinceName?: string;
  cityName?: string;
  municipalityName?: string;
  brgyName?: string;
  cutoffDate?: string;
  updatedAt?: number;
  // Support for Checks configuration
  checkName?: string;
  checkAccountNumber?: string;
  // Support for multiple forms same year same folder
  formsDetail?: {
    id?: string;
    formType: FormType;
    amount: number;
    withValues: boolean;
    balanceRanges: SerialRange[];
    receivedRanges: SerialRange[];
    issuedRanges: SerialRange[];
    actualRanges?: SerialRange[];
    date?: string;
    cutoffDate?: string;
    checkName?: string;
    checkAccountNumber?: string;
  }[];
}

export interface LogEntry {
  id: string;
  formType: FormType;
  category: CategoryType;
  quantity: number;
  amount: number;
  date: string;
  serialStart: string;
  serialEnd: string;
  remarks: string;
  withValues?: boolean;
}

export interface FormMetadata {
  code: FormType;
  name: string;
  description: string;
  denomination?: number; // Face value if applicable
}

export const FORM_DEFAULTS: Record<FormType, FormMetadata> = {
  '016': {
    code: '016',
    name: 'Accountable Form No. 16 (Certificate)',
    description: 'Used for withholding tax certificates and custody of non-cash values.',
  },
  '51': {
    code: '51',
    name: 'Accountable Form No. 51 (Official Receipt)',
    description: 'General Official Receipt form for tax and revenue collections.',
  },
  '54': {
    code: '54',
    name: 'Accountable Form No. 54 (Cash Ticket / Receipt)',
    description: 'Special receipts for specialized cash collection nodes.',
  },
  'Checks': {
    code: 'Checks',
    name: 'LBP Checks',
    description: 'Land Bank of the Philippines Checks and other local dynamic check disbursements.',
  },
};

export const INITIAL_ENTRIES: AuditFile[] = [];
