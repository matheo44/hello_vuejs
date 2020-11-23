const App = {
  data() {
    return {
      message: "hello world !",
      images: [
        {key: 'image1', URL_image1: 'src/jh.png'},
        {key: 'image2', URL_image2: 'src/kartus.jpg'},
        {key: 'image3', URL_image3: 'src/manchot_empreur.jpg'}
    ],
    selected: 'false'
    }
  }
}

Vue.createApp(App).mount('#App')