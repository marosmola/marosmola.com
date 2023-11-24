import Sharect from 'sharect';

Sharect.config({
    facebook: true,
    twitter: true,
    twitterUsername: 'marosmola',
    backgroundColor: '#ffa726',
    iconColor: '#fff',
    selectableElements: ['.document']
}).init();

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Sharect)
})