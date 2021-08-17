<template>
  <div class="margin-home">
    <div class="row">
        <div class="md-12">
            <MenuFilter msg='Cadastro e Cidades'/>
            <ModalRegister/>
            <TabelRegisterCity/>
        </div>
    </div>
  </div>
</template>

<script>
import ModalRegister from '../components/Modal_Register.vue'
import TabelRegisterCity from '../components/Table_Register_City.vue'
import MenuFilter from '../components/Menu_Filter.vue'

export default {
  name: 'Home',
  components: {
    ModalRegister, 
    TabelRegisterCity,
    MenuFilter
  }
}
</script>
