<template>
  <div class="icon">
    <template v-if="name === 'field-set'">
      <svg
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 1H18V4H1V1ZM0 5V4V1V0H1H18H19V1V4V5V16V17H18H1H0V16V5ZM18 5V16H1V5H18Z"
          fill="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'input'">
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.5 0L4.5 16M9 15.5L0 15.5M9 0.5L0 0.499999" stroke="white" />
      </svg>
    </template>
    <template v-else-if="name === 'wysiwyg'">
      <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0231214 0H14.2775L14.3006 4.77457H13.6185C13.395 3.07129 12.7553 1.91908 11.6994 1.31792C11.106 0.986513 10.2197 0.805395 9.04046 0.774566V13.237C9.04046 14.1079 9.19075 14.6859 9.49133 14.9711C9.79961 15.2563 10.4355 15.3988 11.3988 15.3988V16H2.95954V15.3988C3.88439 15.3988 4.49711 15.2563 4.79769 14.9711C5.10597 14.6782 5.26012 14.1002 5.26012 13.237V0.774566C4.10405 0.805395 3.21773 0.986513 2.60116 1.31792C1.46821 1.93449 0.828516 3.08671 0.682081 4.77457H0L0.0231214 0Z"
          fill="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'dropdown'">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 0.5H0.5V1V17V17.5H1H17H17.5V17V1V0.5H17H1ZM1.5 16.5V1.5H16.5V16.5H1.5ZM13.6761 7.5L9.08803 12.088L4.5 7.5H13.6761Z"
          fill="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'date-picker'">
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.5 7V4H1.5V18H18.5V4H14.5V7H13.5V4H6.5V7H5.5ZM13.5 3H6.5V0H5.5V3H1H0.5V3.5V18.5V19H1H19H19.5V18.5V3.5V3H19H14.5V0H13.5V3Z"
          fill="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'checkbox'">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 0.5H0.5V1V17V17.5H1H17H17.5V17V1V0.5H17H1ZM1.5 16.5V1.5H16.5V16.5H1.5ZM8.03033 12.0303L14.0303 6.03033L12.9697 4.96967L7.5 10.4393L5.53033 8.46967L4.46967 9.53033L6.96967 12.0303L7.5 12.5607L8.03033 12.0303Z"
          fill="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'radio'">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9ZM9 0.5C4.30558 0.5 0.5 4.30558 0.5 9C0.5 13.6944 4.30558 17.5 9 17.5C13.6944 17.5 17.5 13.6944 17.5 9C17.5 4.30558 13.6944 0.5 9 0.5ZM9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13Z"
          fill="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'selector'">
      <svg
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 1H18V4H1V1ZM0 5V4V1V0H1H18H19V1V4V5V8V9V12V13V16V17H18H1H0V16V13V12V9V8V5ZM1 8V5H18V8H1ZM1 9V12H18V9H1ZM18 13H1V16H18V13Z"
          fill="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'browser'">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5ZM7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C9.25304 14.5 10.8556 13.8556 12.0836 12.7907L16.6464 17.3536L17.3536 16.6464L12.7907 12.0836C13.8556 10.8556 14.5 9.25304 14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5Z"
          fill="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'repeater'">
      <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 0.5H0.5V1V11V11.5H1H17H17.5V11V1V0.5H17H1ZM1.5 10.5V1.5H16.5V10.5H1.5ZM19.5 4V13.5H4V14.5H20H20.5V14V4H19.5Z"
          fill="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'media-library'">
      <svg
        width="20"
        height="13"
        viewBox="0 0 20 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.49095 4.98191C6.86667 4.98191 7.98191 3.86667 7.98191 2.49095C7.98191 1.11524 6.86667 0 5.49095 0C4.11524 0 3 1.11524 3 2.49095C3 3.86667 4.11524 4.98191 5.49095 4.98191ZM12.1675 2.4808L19.0957 12.2308L0.904358 12.2285L5.13301 6.2621L7.67076 9.28502L12.1675 2.4808Z"
          fill="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'file-library'">
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.5H13C13.2761 0.5 13.5 0.723858 13.5 1V12.1727L8.34366 17.5H1C0.723858 17.5 0.5 17.2761 0.5 17V1C0.5 0.723858 0.723858 0.5 1 0.5Z"
          stroke="white"
        />
      </svg>
    </template>
    <template v-else-if="name === 'setting'">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5.60034H10.3795L12.9387 3.04028L10.9598 1.06128L8.39966 3.62048V0H5.6004V3.62048L3.04028 1.06128L1.05952 3.04028L3.61877 5.60034H0V8.39966H3.62048L1.06133 10.9597L3.04028 12.9387L5.6004 10.3795V14H8.39966V10.3812L10.9598 12.9404L12.9387 10.9597L10.3795 8.39966H14V5.60034ZM7 9.10034C5.84045 9.10034 4.89966 8.1604 4.89966 7C4.89966 5.83955 5.84045 4.89966 7 4.89966C8.15955 4.89966 9.1004 5.83955 9.1004 7C9.1004 8.1604 8.15955 9.10034 7 9.10034Z"
          fill="#6A26D9"
        />
      </svg>
    </template>
    <template v-else-if="name === 'trash'">
      <svg
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.51515 0H9.48485V3.05455H12V4.58182H0V3.05455H2.51515V0ZM4.15152 3.05455H7.84848V1.52727H4.15152V3.05455Z"
          fill="#6A26D9"
        />
        <path
          d="M2.18182 14C1.57933 14 1.09091 13.5441 1.09091 12.9818V5.85455H10.9091V12.9818C10.9091 13.5441 10.4207 14 9.81818 14H2.18182Z"
          fill="#6A26D9"
        />
      </svg>
    </template>
    <template v-else-if="name === 'link'">
      <svg
        width="20"
        height="10"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0H12V2H15C16.6542 2 18 3.3457 18 5C18 6.6543 16.6542 8 15 8H12V10H15C17.75 10 20 7.75 20 5C20 2.25 17.75 0 15 0Z"
          fill="white"
        />
        <path
          d="M2 5C2 3.3457 3.34576 2 5 2H8V0H5C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10H8V8H5C3.34576 8 2 6.6543 2 5Z"
          fill="white"
        />
        <path d="M14 4H6V6H14V4Z" fill="white" />
      </svg>
    </template>
    <template v-else>
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.5H13C13.2761 0.5 13.5 0.723858 13.5 1V12.1727L8.34366 17.5H1C0.723858 17.5 0.5 17.2761 0.5 17V1C0.5 0.723858 0.723858 0.5 1 0.5Z"
          stroke="white"
        />
      </svg>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
svg {
  display: block;
}
</style>
