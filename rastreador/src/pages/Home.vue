<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app style="height: 75px;">
        <v-row id="barra">
          <col />
          <v-toolbar-title id="olho">De olho no pacote</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-col>
            <v-text-field name="code" label="Código de rastreamento" v-model="code"></v-text-field>
          </v-col>

          <v-col>
            <v-text-field name="product" label="Nome da encomenda" v-model="product"></v-text-field>
          </v-col>
          <v-col :lg="2">
            <v-btn color="primary" @click="add">Registrar</v-btn>
          </v-col>
        </v-row>
      </v-app-bar>
      <v-content style="margin-top: 30px;">
        <div>
          <div>
            <div class="text-center d-flex pb-4">
              <v-btn @click="all">Expandir todos</v-btn>
              <v-btn @click="none">Comprimir todos</v-btn>
            </div>
            <v-row justify="center">
              <v-expansion-panels v-model="panel" multiple>
                <v-expansion-panel v-for="(item,i) in tracking" :key="i">
                  <v-expansion-panel-header>
                    <v-col>{{tracking[i].code}}</v-col>
                    <v-col>{{tracking[i].product}}</v-col>
                    <v-col>{{receba[i].localState}}</v-col>
                    <v-col>{{receba[i].description}}</v-col>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <ul v-for="(items,index) in receba[i].data" :key="index">
                      <v-card style="margin: 10px;">
                        <div style="margin-left: 30px">
                          <li>Data: {{i}}</li>
                          <li>Data: {{ receba[i].data[index].date }}</li>
                          <li>Horário: {{ receba[i].data[index].time }}</li>
                          <li>Localização {{ receba[i].data[index].localState }}</li>
                          <li>Descrição: {{ receba[i].data[index].description }}</li>
                        </div>
                      </v-card>
                    </ul>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>
          </div>
        </div>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import Code from "../service/codes";

export default {
  mounted() {
    this.acc();
  },

  methods: {
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
    },
    // Reset the panel
    none() {
      this.panel = [];
    },
    add() {
      this.tracking.push({
        favorite: false,
        status: this.code,
        name: this.product
      });
    },
    acc() {
      for (let index = 0; index < this.tracking.length; index++) {
        const element = this.tracking[index];
        Code.listar(element.code).then(resposta => {
          this.receba[index] = resposta;
        });
      }
    }
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function

      tracking: [
        { code: "LX008580575US", product: "Placa de video" },
        { code: "PX426417452BR", product: "Capinha de celular" },
        { code: "PX303344961BR", product: "tua mãe" }
      ],
      panel: [],
      items: 5,
      receba: [],
      codeOne: [{ codexd: "LX008580575US" }, { codexd: "PX426417452BR" }]
    };
  }
};
</script>
<style>
</style>