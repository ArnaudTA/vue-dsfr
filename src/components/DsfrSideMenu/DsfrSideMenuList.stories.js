import DsfrSideMenu from './DsfrSideMenu.vue'
import DsfrSideMenuList from './DsfrSideMenuList.vue'

function toggleExpandedForMenuWithId (menuItems, id) {
  menuItems.forEach(menuItem => {
    if (menuItem.id === id) {
      menuItem.expanded = !menuItem.expanded
      return
    }
    if (menuItem.menuItems) {
      toggleExpandedForMenuWithId(menuItem.menuItems, id)
    }
  })
}

export default {
  component: DsfrSideMenuList,
  title: 'Composants/Menu latéral/2 - Liste de menu - DsfrSideMenuList',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    headingTitle: {
      control: 'text',
      description: 'Titre de la rubrique (c’est le titre du menu latéral)',
    },
    buttonLabel: {
      control: 'text',
      description: 'Label associé au bouton en état responsive dont le rôle est de déplier le side menu',
    },
    id: {
      control: 'text',
      description: 'id du menu',
    },
    collapsable: {
      control: 'boolean',
      description: 'Permet que le menu soit dépliable (`true`) ou statique (`false` ou `undefined`)',
    },
    expanded: {
      control: 'boolean',
      description: 'Permet de plier (`false`) ou déplier (`true`) le menu',
    },
    menuItems: {
      control: 'object',
      description: `Tableau d'objets, chacun contenant 4 propriétés:
  - \`id\`: identifiant unique d'item de menu
  - \`to\`: URL complète pour un lien externe, ou chaîne de caractère ou objet à donner à \`to\` de \`router-link\` (ou nuxt-link) pour un lien interne
  - \`text\`: texte du menu
  - \`active\`: indique que l’item de menu correspond à la page courante
      `,
    },
  },
}

export const MenuLateral = (args, { argTypes }) => ({
  components: {
    DsfrSideMenu,
    DsfrSideMenuList,
  },

  data () {
    return {
      ...args,
    }
  },

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },

  methods: {
    toggleExpand (id) {
      toggleExpandedForMenuWithId(this.menuItems, id)
    },
  },

  template: `
    <DsfrSideMenu
      :heading-title="headingTitle"
      :buttonLabel="buttonLabel"
    >
      <DsfrSideMenuList
        :menu-items="menuItems"
        @toggle-expand="toggleExpand"
      />
    </DsfrSideMenu>
  `,
})
MenuLateral.args = {
  dark: false,
  buttonLabel: 'Dans cette rubrique',
  headingTitle: 'Titre de la rubrique',
  menuItems: [
    {
      id: 11,
      to: '/rubrique-1',
      text: 'Premier titre de niveau 1',
    },
    {
      id: 12,
      to: '/rubrique-2',
      text: 'Deuxième titre de niveau 1',
      active: true,
      menuItems: [
        {
          id: 21,
          to: '/rubrique-2/sous-rubrique-1',
          text: 'Premier titre de niveau 2',
        },
        {
          id: 22,
          to: '/rubrique-2/sous-rubrique-2',
          text: 'Deuxième titre de niveau 2',
          active: true,
          menuItems: [
            {
              id: 31,
              to: '/rubrique-2/sous-rubrique-2/sous-sous-rubrique-1',
              text: 'Premier titre de niveau 3',
            },
            {
              id: 32,
              to: '/rubrique-2/sous-rubrique-2/sous-sous-rubrique-2',
              text: 'Deuxième titre de niveau 3',
              active: true,
            },
          ],
        },
      ],
    },
  ],
}
