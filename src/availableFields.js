const availableFields = [
  {
    label: 'Field set',
    icon: 'field-set',
    default: {
      field: 'container',
      label: 'Content',
      children: [],
    },
  },
  {
    label: 'Input',
    icon: 'input',
    default: {
      field: 'input',
      label: 'Content',
    },
  },
  {
    label: 'WYSIWYG',
    icon: 'wysiwyg',
    default: {
      field: 'wysityg',
      label: 'Content',
    },
  },
  {
    label: 'Dropdown',
    icon: 'dropdown',
    default: {
      field: 'dropdown',
      label: 'Content',
    },
  },
  {
    label: 'Date Picker',
    icon: 'date-picker',
    default: {
      field: 'date-picker',
      label: 'Content',
    },
  },
  {
    label: 'Checkbox',
    icon: 'checkbox',
    default: {
      field: 'checkbox',
      label: 'Content',
    },
  },
  {
    label: 'Radio',
    icon: 'radio',
    default: {
      field: 'radio',
      label: 'Content',
    },
  },
  {
    label: 'Selector',
    icon: 'selector',
    default: {
      field: 'select',
      label: 'Content',
    },
  },
  {
    label: 'Browser',
    icon: 'browser',
    default: {
      field: 'browser',
      label: 'Content',
    },
  },
  {
    label: 'Repeater',
    icon: 'repeater',
    default: {
      field: 'repeater',
      label: 'Content',
    },
  },
  {
    label: 'Media Library',
    icon: 'media-library',
    default: {
      field: 'media-library',
      label: 'Content',
    },
  },
  {
    label: 'File Library',
    icon: 'file-library',
    default: {
      field: 'file-library',
      label: 'Content',
    },
  },
]

export const getAvailableFieldByFieldName = (fieldName) =>
  availableFields.find((field) => field.default.field === fieldName)

export default availableFields