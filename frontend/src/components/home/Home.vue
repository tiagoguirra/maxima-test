<template>
  <div>
    <div class="section-header">
      <h2>Analizador de palíndromo</h2>
    </div>
    <div class="container">
      <div class="card-blank space-top">
        <form class="content-form" @submit.prevent="onSubmit">
          <div class="display-flex">
            <div
              class="form-group mr_10"
              :class="{ 'form-group--error': $v.form.first_word.$error }"
            >
              <input
                class="form__input"
                v-model.trim="$v.form.first_word.$model"
                type="text"
                placeholder="Primeira palavra"
              >
              <span
                class="error"
                v-if="$v.form.first_word.$error && !$v.form.first_word.required"
              >A primeira palavra é obrigatória</span>
            </div>
            <div
              class="form-group mr_10"
              :class="{ 'form-group--error': $v.form.second_word.$error }"
            >
              <input
                class="form__input"
                v-model.trim="$v.form.second_word.$model"
                type="text"
                placeholder="Segunda palavra"
              >
              <span
                class="error"
                v-if="$v.form.second_word.$error && !$v.form.second_word.required"
              >A segunda palavra é obrigatória</span>
            </div>

            <button type="submit" class="btn-default btn-default-white btn-analize">Analizar</button>
          </div>
        </form>
        <div class="table-section">
          <h3>Últimas palavras analizadas</h3>
        </div>        
        <Search v-on:searchBy="onSearch" v-on:clear="onClearSearch" placeholder="Buscar últimas palavras analizadas"/>      
        <TableFlex :tableHeader="['Primeira palavra','Segunda palavra','São palíndromos']">
          <template slot="list">
            <div v-for="item in getPalindromos" :key="item.id">
              <p>{{item.first_word}}</p>
              <p>{{item.second_word}}</p>
              <p>{{item.isPalindromo?'Sim':'Não'}}</p>              
            </div>
          </template>
        </TableFlex>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  PALINDROMO_FETCH,
  PALINDROMO_ANALIZE
} from "@/store/actions/palindromo";
import { required } from "vuelidate/lib/validators";
import TableFlex from "@/components/template/TableFlex";
import Search from "@/components/template/Search";
export default {
  name: "Home",
  components:{TableFlex,Search},
  data: () => ({
    form: {
      first_word: "",
      second_word: ""
    },
    filter:""
  }),
  validations: {
    form: {
      first_word: {
        required
      },
      second_word: {
        required
      }
    }    
  },
  computed: {
    ...mapGetters(["getPalindromos"])
  },
  methods: {
    ...mapActions({ fetch: PALINDROMO_FETCH, analize: PALINDROMO_ANALIZE }),
    onSearch(search){
      this.filter = search
      this.getData()
    },
    onClearSearch(){
      this.filter = ""
      this.getData()
    },
    getData() {
        this.fetch(`?filter=${this.filter}`)
    },
    onSubmit() {
      this.$v.$touch();
      if(!this.$v.$invalid){
        let _this = this;
        this.analize(this.form).then(resp=>{          
          if(resp.palindromo.isPalindromo){
            this.$swal(`As palavras ${this.form.first_word} e ${this.form.second_word} são palíndromo!`)
          }else{
            this.$swal(`As palavras ${this.form.first_word} e ${this.form.second_word} não são palíndromo!`)
          }
          this.form = {
            first_word:"",
            second_word:""
          }
          this.$v.$reset()
          this.filter = ""
          this.getData()
        })
      }
    }
  },
  mounted() {    
    this.getData();
  }
};
</script>

<style scoped>
.btn-analize {
  min-width: 150px;
}
.table-section {
  width: 100%;
  padding: 50px 15px 5px 15px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dbd9d1;
}
</style>