<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet" />
    <div id="app">
      <v-app id="inspire">
        <v-app-bar app style="height: 75px;">
          <v-row id="barra">
            <v-toolbar-title id="olho">De olho no pacote</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-col>
              <v-text-field
                :rules="[rules.required, rules.min]"
                name="input-10-2"
                label="Usuario/e-mail"
                hint="minimo 8 caracteres"
                class="input-group--focused"
                v-model="login"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                :rules="[rules.required, rules.min]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-2"
                label="Senha"
                hint="minimo 8 caracteres"
                class="input-group--focused"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                v-model="passwordLogin"
              ></v-text-field>
            </v-col>
            <v-col :lg="1">
              <v-btn color="primary">Entrar</v-btn>
            </v-col>
          </v-row>
        </v-app-bar>
        <v-content>
          <v-container fluid fill-height style>
            <v-col class="caminhao">
                <h1>
                  Acompanhe todas as suas entregas
                  <br />em tempo real!
                </h1>
            </v-col>
            <v-col>
              <v-layout align-center justify-center>
                <v-flex>
                  <v-card>
                    <v-toolbar color="primary" dark flat>
                      <v-toolbar-title>CADASTRO RÁPIDO</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <v-form>
                        <v-text-field label="Nome de usuário" name="name" 
                        type="text" v-model="usuario"></v-text-field>
                        <v-text-field label="E-mail" name="email" 
                        type="text" v-model="email"></v-text-field>
                        <v-text-field
                          id="Senha"
                          label="Senha"
                          name="password"
                          type="password"
                          hint="minimo 8 caracteres"
                          :rules="[rules.required, rules.min]"
                          v-model="passwordOne"
                        ></v-text-field>
                        <v-text-field
                          id="Senha2"
                          label="Confirmar senha"
                          name="password"
                          type="password"
                          hint="minimo 8 caracteres"
                          :rules="[rules.required, rules.min]"
                          v-model="passwordTwo"
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary">CADASTRAR</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-col>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      showPassword: false,
      password: "Password",
      rules: {
        required: value => !!value || "Campo obrigatório.",
        min: v => v.length >= 8 || "Minimo 8 caracteres"
      }
    };
  }
};
</script>
<style>
#barra {
  margin: auto;
}

#olho {
  font-size: 36px;
  margin-top: 10px;
  font-family: "Anton", sans-serif;
}

.caminhao {
  background-image: url("../assets/caminhao.png");
  background-size: contain;
  background-position: center;
  height: 100%;
}
</style>