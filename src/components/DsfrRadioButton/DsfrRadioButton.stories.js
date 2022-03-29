
import DsfrRadioButton from './DsfrRadioButton.vue'

export default {
  component: DsfrRadioButton,
  title: 'Composants/Boutons radio/Boutons radio - DsfrRadioButtons',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    options: {
      control: 'object',
      description: 'Tableau d’objets : chaque objet contient les props à passer à `DsfrRadioButton` - *N.B. : Ne fait pas partie du composant',
    },
    label: {
      control: 'text',
      description: 'Label du bouton radio',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur de la case cochée',
    },
    onChange: { action: 'changed' },
    img: {
      control: 'text',
      description: 'Permet d\'ajouter une image au composant',
    },
  },
}

export const RadioButton = (args, { argTypes }) => ({
  components: { DsfrRadioButton },
  data () {
    return args
  },
  template: `
    <DsfrRadioButton
      v-for="option of options"
      :modelValue="modelValue"
      v-bind="option"
      @update:modelValue="updateCheckedValue($event)"
    />
  `,
  methods: {
    updateCheckedValue (val) {
      if (val === this.modelValue) {
        return
      }
      this.onChange(val)
      this.modelValue = val
    },
  },
})
RadioButton.args = {
  dark: false,
  modelValue: '3',
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
      name: 'Choix',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
      name: 'Choix',
    },
    {
      label: 'Valeur 3',
      value: '3',
      name: 'Choix',
    },
  ],
}

export const RichRadioButton = (args, { argTypes }) => ({
  components: { DsfrRadioButton },
  data () {
    return args
  },
  template: `
    <DsfrRadioButton
      v-for="option of options"
      :modelValue="modelValue"
      v-bind="option"
      @update:modelValue="updateCheckedValue($event)"
    />
  `,
  methods: {
    updateCheckedValue (val) {
      if (val === this.modelValue) {
        return
      }
      this.onChange(val)
      this.modelValue = val
    },
  },
})
RichRadioButton.args = {
  dark: false,
  modelValue: '3',
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
      name: 'Choix',
      img: 'http://placekitten.com/150/200',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
      name: 'Choix',
      img: 'http://placekitten.com/200/250',
    },
    {
      label: 'Valeur 3',
      value: '3',
      name: 'Choix',
      img: 'http://placekitten.com/250/350',
    },
  ],
}
