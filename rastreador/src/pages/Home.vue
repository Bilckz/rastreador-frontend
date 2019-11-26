<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app style="height: 75px;">
        <v-row id="barra">
          <col />
          <v-toolbar-title id="olho">De olho no pacote</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-col>
            <v-text-field name="code" label="Código de rastreamento" v-model="codeRegister"></v-text-field>
          </v-col>

          <v-col>
            <v-text-field name="product" label="Nome da encomenda" v-model="productRegister"></v-text-field>
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
            <v-row v-if="loading">
              <div style="margin: auto; height: 200px">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </div>
            </v-row>
            <v-row justify="center" v-else>
              <v-expansion-panels v-model="panel" multiple>
                <v-expansion-panel v-for="(item,i) in receba" :key="i">
                  <v-expansion-panel-header>
                    <v-col>{{tracking[i].code}}</v-col>
                    <v-col>{{tracking[i].product}}</v-col>
                    <v-col>{{receba[i].data[0].localState}}</v-col>
                    <v-col>{{receba[i].data[0].description}}</v-col>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <ul v-for="(prop,index) in receba[i].data" :key="index">
                      <v-card style="margin: 10px;">
                        <div style="margin-left: 30px">
                          <li>Data: {{ prop.date }}</li>
                          <li>Horário: {{ prop.time }}</li>
                          <li>Localização {{ prop.localState }}</li>
                          <li>Descrição: {{ prop.description }}</li>
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
  async created() {
    await this.getCodes();
  },

  methods: {
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
    },
    none() {
      this.panel = [];
    },
    add() {
      this.tracking.push({
        code: this.codeRegister,
        product: this.productRegister
      });
    },
    async getCodes() {
      const promises = this.tracking.map(async (element, index) => Code.listar(element.code)
          .then(resposta => {
            this.receba[index] = resposta;

          })
      );
      await Promise.all(promises);
      this.loading = false;
    },
  },
  data() {
    return {
      tracking: [
        { code: "LX008580575US", product: "Placa de video" },
        { code: "PX426417452BR", product: "Capinha de celular" },
        { code: "PX303344961BR", product: "Mouse e teclado" }
      ],
      panel: [],
      items: 5,
      receba: [],
      codeRegister: "",
      productRegister: "",
      loading: true
    };
  }
};
</script>
<style>
</style>