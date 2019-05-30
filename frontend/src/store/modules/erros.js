import { ERRORS_SHOW } from "../actions/errors";
import VueOnToast from "vue-on-toast";

const state = {};
const getters = {};

const actions = {
    [ERRORS_SHOW]: ({ commit, dispatch }, errors) => {        
        if (errors != null && errors.data != null) {
           
           
            if (errors.data.data != null) {
                errors.data.data.map(message =>
                    VueOnToast.ToastService.pop(
                        "error",
                        errors.data.message,
                        message
                    )
                );
            } else if (
                errors.data.message != null ||
                !errors.data.message.isEmpty()
            ) {
                VueOnToast.ToastService.pop(
                    "error",
                    errors.data.message
                );
            } else {
                VueOnToast.ToastService.pop("error", errors.status);
            }                   
        } else {
            // console.log(errors);
            VueOnToast.ToastService.pop(
                "error",
                "Erro na aplicação",
                "Ocorreu um erro inesperado"
            );
        }
    }
};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};
