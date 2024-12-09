  <template>

    <header>
        <span class="link" v-for="page in pages" :key="page.path">
            <router-link :to="page.path">{{ page.title }}</router-link>
        </span>
    </header>

  </template>
  
  <script> 

  export default {
    name: 'RouterHeader',
    setup() {

      const pages = [
          {
              title: "Main",
              path: "/"
          },
          {
              title: "RemoteList",
              path: "/remote-list"
          },
      ]

      return {
          pages
      }
    }    
  }

  </script>
  
  <style scoped>

  header {
    text-align: left;  
    padding: 10px 7px;
    background-color: aquamarine;
  }

  .link {
    margin-right: 15px;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  </style>
  