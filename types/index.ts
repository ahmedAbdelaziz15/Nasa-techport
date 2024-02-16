export enum PROJECT_STATUS {
  active = "Active",
  completed = "Completed",
  canceled = "Canceled",
  not_started = "Not Started"
}

export enum CHIP_TYPE {
  primary = "primary",
  success = "success",
  active = "active",
  error = "error",
  default = "default",
}

export type Project = {
  projectId: number;
  statusDescription: PROJECT_STATUS;
  title?: string;
  startDateString?: string;
  endDateString?: string;
}

export type Projects = {
  projects: Project[];
  totalCount: number;
}

export type ContactPerson = {
  contactId: number;
  canUserEdit: boolean;
  firstName: string;
  lastName: string;
  fullName: string;
  fullNameInverted: string;
  primaryEmail: string;
  publicEmail: boolean;
  nacontact: boolean;
  middleInitial?: string;
};

type Country = {
  abbreviation: string;
  countryId: number;
  name: string;
};

type Organization = {
  acronym: string;
  canUserEdit: boolean;
  city: string;
  country: Country;
  countryId: number;
  external: boolean;
  linkCount: number;
  organizationId: number;
  organizationName: string;
  organizationType: string;
  stateTerritory: {
    abbreviation: string;
    country: Country;
    countryId: number;
    name: string;
    stateTerritoryId: number;
  };
  stateTerritoryId: number;
  naorganization: boolean;
  organizationTypePretty: string;
};

type ResponsibleMd = {
  acronym: string;
  canUserEdit: boolean;
  city: string;
  external: boolean;
  linkCount: number;
  organizationId: number;
  organizationName: string;
  organizationType: string;
  naorganization: boolean;
  organizationTypePretty: string;
};


type ParentProgram = {
  acronym: string;
  active: boolean;
  programId: number;
  responsibleMd: ResponsibleMd;
  responsibleMdId: number;
  title: string;
};

type Program = {
  acronym: string;
  active: boolean;
  description: string;
  programId: number;
  parentProgramId: number;
  parentProgram: ParentProgram;
  responsibleMd: ResponsibleMd;
  responsibleMdId: number;
  stockImageFileId: number;
  title: string;
};


type LkuCodeType = {
  codeType: string;
  description: string;
};

type LibraryItemContentType = {
  lkuCodeId: number;
  code: string;
  description: string;
  lkuCodeTypeId: number;
  lkuCodeType: LkuCodeType;
};

type LibraryItem = {
  caption: string;
  file: File;
  files: File[];
  id: number;
  title: string;
  description: string;
  libraryItemTypeId: number;
  projectId: number;
  primary: boolean;
  publishedDateString: string;
  contentType: LibraryItemContentType;
};

type TaxonomyNode = {
  taxonomyNodeId: number;
  taxonomyRootId: number;
  parentNodeId: number;
  level: number;
  code: string;
  title: string;
  definition: string;
  exampleTechnologies: string;
  hasChildren: boolean;
  hasInteriorContent: boolean;
}


export type ProjectDetails = {
  projectId: number;
  acronym: string;
  title: string;
  primaryTaxonomyNodes: TaxonomyNode[];
  additionalTaxonomyNodes: TaxonomyNode[];
  startTrl: number;
  currentTrl: number;
  endTrl: number;
  benefits: string;
  description: string;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  statusDescription: PROJECT_STATUS;
  programDirectors: ContactPerson[];
  programExecutives: ContactPerson[];
  programManagers: ContactPerson[];
  projectManagers: ContactPerson[];
  principalInvestigators: ContactPerson[];
  coInvestigators: ContactPerson[];
  website: string;
  libraryItems: LibraryItem[];
  transitions: [];
  responsibleMd: ResponsibleMd;
  program: {
    acronym: string;
    active: boolean;
    description: string;
    programId: number;
    responsibleMd: ResponsibleMd;
    responsibleMdId: number;
    stockImageFileId: number;
    title: string;
  };
  leadOrganization: Organization;
  supportingOrganizations: Organization[];
  coFundingPartners: Organization[];
  statesWithWork: {
    abbreviation: string;
    country: Country;
    countryId: number;
    name: string;
    stateTerritoryId: number;
  }[];
  lastUpdated: string;
  releaseStatusString: string;
  endDateString: string;
  startDateString: string;
  viewCount: number;
}