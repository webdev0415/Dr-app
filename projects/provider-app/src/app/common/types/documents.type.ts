export type DocumentType = 'discharge' | 'authorization' | 'receipt' | 'sports' | 'summary' | 'questionnaire' | null;

export type DocumentFinalizeFiles = Partial<{ [section in DocumentType]: File }>;
