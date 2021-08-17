<template>
    <div class="container-fluid">
        <div class="text-center">
            <h1 class="display-4">{{ msg }}</h1>
        </div>
        <form>
            <fieldset>
                <legend>Filtro</legend>
                <div class="row">
                    <div class="form-group col-md-2">
                        <select id="cmbUF" class="form-select" aria-label="Default select example">
                            <option value="" selected>Selecione o UF</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <select id="cmbCity" class="form-select selectpicker" aria-label="Default select example">
                            <option value="" selected>Selecione a Cidade</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <select id="cmbRegion" class="form-select" aria-label="Default select example">
                            <option value="" selected>Selecione a Região</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2" style="text-align:right">
                        <!-- Button trigger modal -->
                        <button type="button" id="btnAdd" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Adicionar Cidade  <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
  name: 'MenuFilter',
    props: {
    msg: String
  }  
}
</script>