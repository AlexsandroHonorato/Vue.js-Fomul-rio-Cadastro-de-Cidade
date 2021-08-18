<template>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Cadastro de Cidades</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                         <div class="container-fluid">
                            <div class="row">
                                <div class="mb-3 row">
                                    <label for="ibge" class="col-sm-3 col-form-label">Digite o IBGE</label>
                                    <div class="col-sm-4">
                                        <Field name="ibge"  type="number" class="form-control" :class="{ 'is-invalid': errors.ibge }" id="ibge" v-model.number="city.ibge"  maxlength="7"  placeholder="1100015" />
                                        <div class="invalid-feedback">{{errors.ibge}}</div>
                                    </div>
                                    <label for="uf" class="col-sm-3 col-form-label">Digite a UF</label>
                                    <div class="col-sm-2">
                                        <Field type="text" class="form-control" :class="{ 'is-invalid': errors.uf }" id="uf" name="uf" v-model="city.uf"   maxlength="2" placeholder="SP" />
                                        <div class="invalid-feedback">{{errors.uf}}</div>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="name" class="col-sm-3 col-form-label">Digite o Nome</label>
                                    <div class="col-sm-9">
                                        <Field type="text" class="form-control" :class="{ 'is-invalid': errors.name }"  id="name" name="name" v-model="city.name" maxlength="100" placeholder="São Paulo" />
                                        <div class="invalid-feedback">{{errors.name}}</div>
                                    </div>
                                </div>
                                <div class="mb-4 row">
                                    <label for="lat" class="col-sm-3 col-form-label">Digite a Latitude</label>
                                    <div class="col-sm-3">
                                        <Field type="text" class="form-control" :class="{ 'is-invalid': errors.lat }" id="lat" name="lat" v-model="city.lat" maxlength="20" placeholder="-619.998.238.963" required/>
                                         <div class="invalid-feedback">{{errors.lat}}</div>
                                    </div>
                                    <label for="long" class="col-sm-3 col-form-label">Digite a Latitude</label>
                                    <div class="col-sm-3">
                                        <Field type="text" class="form-control" :class="{ 'is-invalid': errors.long }"  id="long" name="long" v-model="city.long" maxlength="20" placeholder="-119.355.403.048" required/>
                                          <div class="invalid-feedback">{{errors.long}}</div>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="region" class="col-sm-3 col-form-label">Digite a Região</label>
                                    <div class="col-sm-9">
                                        <Field type="text" class="form-control" :class="{ 'is-invalid': errors.region }"  id="region" name="region" v-model="city.region" maxlength="100" placeholder="Metropolitana de So Paulo" required/>
                                         <div class="invalid-feedback">{{errors.region}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                            <div id="divBtnSave" class="row">
                                <button type="submit" id="btnSave" class="btn btn-success">Salvar</button>
                            </div>
                            <div id="divBtnUpdate" class="row" style="display:none">
                                <button type="submit" id="btnUpdate" class="btn btn-info">Alterar</button>
                            </div>
                            <div id="divBtnDelete" class="row" style="display:none">
                                <button type="submit" id="btnDelete" class="btn btn-danger">Deletar</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
//import {http} from '../services/APIServices';


export default {
    components: {
        Form,
        Field       
    },
    data(){
        return{                                    
            city:{
                ibge: null,
                uf: '',
                name: '',
                lat: '',
                long:'',
                region:''
            }
        }
    },
    setup() {
        const schema = Yup.object().shape({
            ibge: Yup.string()
                .required('O campo IBGE é obrigatório'),
            uf: Yup.string()
                .required('O campo UF é obrigatório'),
            name: Yup.string()
                .required('O campo nome é obrigatório'),
            lat: Yup.string()
                .required('O campo latitude é obrigatório'),
            long: Yup.string()
                .required('O campo longitude é obrigatótio'),
            region: Yup.string()
                .required('O campo região é obrigatório')
        
        });
        const onSubmit = values => {
            // display form values on success
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
        }

        return {
            schema,
            onSubmit
        };
    },
    methods:{
           
    }
    
}
</script>