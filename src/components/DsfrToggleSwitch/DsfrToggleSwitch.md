# Information contextuelle et Infobulle - DsfrTooggleSwitch

## 🌟 Introduction

Le `DsfrToggleSwitch` est un composant Vue versatile, conçu pour permet à l’utilisateur de faire un choix entre deux états opposés (activé / désactivé).

🏅 La documentation sur **les interrupteurs** sur le [DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants/interrupteur)

## 🛠️ Props

| Nom            | Type      | Défaut                  | Obligatoire | Description                                                               |
|----------------|-----------|-------------------------|:-----------:|---------------------------------------------------------------------------|
| `hint`         | `string`  |                         |             | Texte d'information complémentaire affiché en dessous de l'interrupteur   |
| `label`        | `string`  | `false`                 |             | Texte du label associé à l'interrupteur                                   |
| `labelLeft`    | `boolean` | `false`                 |             | Permet d'afficher le label à gauche de l'interrupteur                     |
| `borderBottom` | `boolean` | `false`                 |             | Affiche une bordure sous l'interrupteur et le label                       |
| `inputId`      | `string`  | `getRandomId('toggle')` |             | Identifiant unique pour l'infobulle. Utilisé pour l'accessibilité.        |

## 📡 Évenements

`DsfrToggleSwitch` émet l'événement suivant :

| Nom                  | type         | Description                                                  |
|----------------------|--------------| -------------------------------------------------------------|
| `update:modelValue`  | *`boolean`*  | Est émis lorsque la valeur de l'interrupteur change          |

## 🧩 Slots

Aucun slot n'est prévu dans ce composant. Le contenu est entièrement basé sur les props.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="300px">
  <DsfrToggleSwitch label="Label action interrupteur" />
</Story>

<<< docs-demo/DsfrToggleSwitch.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrToggleSwitch.vue
<<< DsfrToggleSwitch.types.ts

:::

<script setup lang="ts">
import DsfrToggleSwitch from './docs-demo/DsfrToggleSwitch.vue'
</script>
