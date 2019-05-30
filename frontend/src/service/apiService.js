import { create } from 'apisauce';

const url = process.env.VUE_APP_ROOT_API;

const api = create({
    baseURL: url,
});

api.addAsyncRequestTransform((request) => async () => {    
    request.headers['Access-Control-Allow-Origin'] = '*';    
});

api.addResponseTransform((response) => {
    if (response.status<200 || response.status>300) throw response;    
});

export default api;
