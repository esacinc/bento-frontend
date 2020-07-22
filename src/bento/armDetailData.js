import gql from 'graphql-tag';

// -------------- Case ID area configurations --------------
const caseHeader = {
  label: 'Case ID',
  dataField: 'subject_id',
};

// --------------- Data panel configuration --------------
const leftPanelSubsections = [
  // Each object here represents a subsection in the panel
  {
    sectionHeader: 'Program',
    sectionDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    properties: [
      {
        label: 'Assigned to Program',
        dataField: 'program_acronym',
        // valueLink property specify URL value should link to
        // space holder "{}" will be replaced by actual value in the dataField
        linkUrl: '/program/{}',
        // labelLinkUrl property specify URL label should link to
        // labelLinkUrl: '/programs',
      },
      {
        label: 'Arm',
        dataField: 'study_acronym',
        linkUrl: '/study/{}',
      },
      {
        label: 'Arm Description',
        dataField: 'study_name',
      },
    ],
  },
  {
    sectionHeader: 'Demographics',
    // sectionDesc: 'Demographic Related Info',
    properties: [
      {
        label: 'Gender',
        dataField: 'gender',
      },
      {
        label: 'Race',
        dataField: 'race',
      },
      {
        label: 'Ethnicity',
        dataField: 'ethnicity',
      },
      {
        label: 'Age At Enrollment',
        dataField: 'age_at_index',
      },
      {
        label: 'Menopause Status',
        dataField: 'menopause_status',
      },
      {
        label: 'Vital Status',
        dataField: 'vital_status',
      },
      {
        label: 'Cause Of Death',
        dataField: 'cause_of_death',
      },
    ],
  },
  {
    sectionHeader: 'Diagnosis',
    // sectionDesc: 'Diagnosis Related Info',
    properties: [
      {
        label: 'Diagnosis',
        dataField: 'disease_type',
      },
      {
        label: 'Diagnosis Subtype',
        dataField: 'disease_subtype',
      },
      {
        label: 'Tumor Grade',
        dataField: 'tumor_grade',
      },
      {
        label: 'Tumor Grade (mm)',
        dataField: 'tumor_largest_dimension_diameter',
      },
      {
        label: 'ER Status',
        dataField: 'er_status',
      },
      {
        label: 'PR Status',
        dataField: 'pr_status',
      },
      {
        label: 'Nuclear Grade',
        dataField: 'nuclear_grade',
      },
      {
        label: 'Recurrence Score',
        dataField: 'recurrence_score',
      },
    ],
  },
];

const rightPanelSubsections = [
  {
    sectionHeader: 'Treatment',
    // sectionDesc: 'Treatment Related Info',
    properties: [
      {
        label: 'Primary Surgical Procedure',
        dataField: 'primary_surgical_procedure',
      },
      {
        label: 'Chemotherapy Regimen Group',
        dataField: 'chemotherapy_regimen_group',
      },
      {
        label: 'Chemotherapy Regimen',
        dataField: 'chemotherapy_regimen',
      },
      {
        label: 'Endocrine Therapy Type',
        dataField: 'endocrine_therapy_type',
      },
    ],
  },
  {
    sectionHeader: 'Follow Up',
    // sectionDesc: 'Follow Up Related Info',
    properties: [
      {
        label: 'Is Disease Free',
        dataField: 'dfs_event_indicator',
      },
      {
        label: 'Is Recurrence Free',
        dataField: 'recurrence_free_indicator',
      },
      {
        label: 'Is Distant Recurrence Free',
        dataField: 'distant_recurrence_indicator',
      },
      {
        label: 'Disease Free Event Type',
        dataField: 'dfs_event_type',
      },
      {
        label: 'Recurrence Event Type',
        dataField: 'first_recurrence_type',
      },
      {
        label: 'Days to Progression',
        dataField: 'days_to_progression',
      },
      {
        label: 'Days to Recurrence',
        dataField: 'days_to_recurrence',
      },
    ],
  },
];

// --------------- File table configuration --------------

const tableConfig = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  title: 'ASSOCIATED FILES',
  // Field name for files data, need to be updated only when using a different GraphQL query
  filesField: 'files',
  // Value must be one of the 'dataField's in fileTableColumns
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Columns
  columns: [
    {
      dataField: 'file_name',
      header: 'File Name',
    },
    {
      dataField: 'file_type',
      header: 'File Type',
    },
    {
      dataField: 'association',
      header: 'Association',
    },
    {
      dataField: 'file_description',
      header: 'Description',
    },
    {
      dataField: 'file_format',
      header: 'Format',
    },
    {
      dataField: 'file_size',
      header: 'Size',
      // set formatBytes to true to display file size (in bytes) in a more human readable format
      formatBytes: true,
    },
  ],
};

// --------------- GraphQL query configuration --------------

// query name, also used as root of returned data
const dataRoot = 'armDetail';
// Primary ID field used to query a case
const armIDField = 'study_acronym';
// GraphQL query to retrieve detailed info for a case
const GET_ARM_DETAIL_DATA_QUERY = gql`
  query armDetail($study_acronym: String) {
    armDetail(study_acronym: $study_acronym) {
      study_acronym
      study_name
      study_type
      study_full_description
      num_subjects
      diagnoses {
        group
        subjects
      }
      files {
        file_name
        file_type
        file_description
        file_format
        file_size
        file_id
        md5sum
      }
    }
  }
`;

export {
  caseHeader,
  dataRoot,
  armIDField,
  leftPanelSubsections,
  rightPanelSubsections,
  tableConfig,
  GET_ARM_DETAIL_DATA_QUERY,
};
