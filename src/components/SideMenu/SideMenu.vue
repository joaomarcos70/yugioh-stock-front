<template>
  <div>
    <v-navigation-drawer permanent app>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Albuquerque</v-list-item-title>
            <v-list-item-subtitle>Conectado</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="menuClick(item)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city", path:"/home" },
        { title: "Minhas Cartas", icon: "mdi-account", path:"/collection" },
        { title: "Wants", icon: "mdi-account-group-outline", path:"/wants"},
      ],
    };
  },
  methods: {
    menuClick(view) {
      this.$router.push(view.path)
    },
  },
};
</script>