const availableFields = [
  {
    label: 'Field set',
    icon: 'field-set',
    default: {
      field: 'container',
      label: 'Content',
      children: [],
    },
    settings: [
      {
        type: 'input',
        label: 'Label',
        model: 'label',
      },
    ],
  },
  {
    label: 'Input',
    icon: 'input',
    default: {
      field: 'input',
      label: 'Text',
      placeholder: 'Enter text here',
      note: '',
      name: '',
      maxlength: '',
    },
    settings: [
      {
        type: 'input',
        label: 'Label',
        model: 'label',
      },
      {
        type: 'input',
        label: 'Placeholder',
        model: 'placeholder',
      },
      {
        type: 'input',
        label: 'Note',
        model: 'note',
      },
      {
        type: 'input',
        label: 'Name',
        model: 'name',
      },
      {
        type: 'input',
        label: 'Character count',
        model: 'maxlength',
      },
    ],
  },
  {
    label: 'WYSIWYG',
    icon: 'wysiwyg',
    default: {
      field: 'wysiwyg',
      label: 'Text',
      editSource: false,
    },
    settings: [
      {
        type: 'input',
        label: 'Label',
        model: 'label',
      },
      {
        type: 'checkbox',
        label: 'Enable Source',
        model: 'editSource',
      },
    ],
  },
  {
    label: 'Dropdown',
    icon: 'dropdown',
    default: {
      field: 'dropdown',
      label: 'Select',
    },
    settings: [
      {
        type: 'input',
        label: 'Label',
        model: 'label',
      },
    ],
  },
  // {
  //   label: 'Date Picker',
  //   icon: 'date-picker',
  //   default: {
  //     field: 'date-picker',
  //     label: 'Content',
  //   },
  // },
  {
    label: 'Checkbox',
    icon: 'checkbox',
    default: {
      field: 'checkbox',
      label: 'Default Label',
    },
    settings: [
      {
        type: 'input',
        label: 'Label',
        model: 'label',
      },
    ],
  },
  {
    label: 'Radio',
    icon: 'radio',
    default: {
      field: 'radio',
      label: 'Default',
      value: 'default',
    },
    settings: [
      {
        type: 'input',
        label: 'Label',
        model: 'label',
      },
    ],
  },
  // {
  //   label: 'Selector',
  //   icon: 'selector',
  //   default: {
  //     field: 'select',
  //     label: 'Select',
  //   },
  // },
  // {
  //   label: 'Browser',
  //   icon: 'browser',
  //   default: {
  //     field: 'browser',
  //     label: 'Content',
  //   },
  // },
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
      label: 'Image',
    },
    settings: [
      {
        type: 'input',
        label: 'Label',
        model: 'label',
      },
    ],
  },
  {
    label: 'File Library',
    icon: 'file-library',
    default: {
      field: 'file-library',
      label: 'File',
    },
    settings: [
      {
        type: 'input',
        label: 'Label',
        model: 'label',
      },
    ],
  },
]

export const getAvailableFieldByFieldName = (fieldName) =>
  availableFields.find((field) => field.default.field === fieldName)

export default availableFields
