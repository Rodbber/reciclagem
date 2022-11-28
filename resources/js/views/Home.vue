<template>
  <div class="px-5 py-2 h-full">
    <div
      class="
        border
        rounded-lg
        h-2/3
        pb-2
        bg-gradient-to-b
        from-emerald-700
        to-green-400
        flex flex-col
      "
    >
        <div class="flex flex-col md:flex-row-reverse justify-center items-center">
          <div class="w-1/4">
            <img
              src="https://www.islington.gov.uk:443/-/media/images/page-icons/recycling-and-rubbish/rubbishrecyclingintro.svg?la=en&amp;hash=003A55019FDDC295E2A839C6F5C957A6EDA92B98"
              alt="Bin and recycling box icon"
            />
          </div>
          <h1 class="text-xl font-bold text-white">
            Recicle e torne o mundo <br />
            um lugar cada vez melhor!
          </h1>
        </div>
      <div
        class="
          flex flex-col
          items-center
          md:flex-row md:justify-center md:items-end
        "
      >
        <div class="pb-2 md:pb-0 md:mr-5">
          <v-btn class="" to="/lista" elevation="2">
            <div>
              <h3>Lista de coleta</h3>
            </div>
            <v-icon color="green darken-2"> mdi-list-box </v-icon>
          </v-btn>
        </div>
        <div class="pb-2 md:pb-0">
            <v-btn to="/nova" elevation="2">
          <div class="flex items-center space-x-2">
            <div>
              <h3>Nova coleta</h3>
            </div>
            <div class="flex">
              <v-icon color="black"> mdi-plus </v-icon>
              <div class="w-10">
                <img
                  class=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFlUlEQVR4nO2abWiWVRjHf8/appUzKZhZNira6AWSgjJKCIKiFqWwlAgC8UNaZMuoJC1IGG0V9qX84hdJK63o9YNEQYFjTc2U6AXDipwuyuYsXCXb8u7Ddc7O/XLOfZ/n2bPN6vzh4jnPebnezn2d67rP80BAQEBAQEBAQEBAQMD/EKWpVqACfAzMBw4DvxR8Hp8iHQGIFJU7VjQnKoN2AQ15QibyCSgycLy4HJgNzHV8NgHTgbeBuyZBnwzK2alKqAgXAQNq7toq2VQWJjoEfHAzMAr8Ddxum1DjyehUhE/4tiAOqAFeAZonVCOFeqAH/50qAWuQU3sA6CB/Y35QfBfkzDkHeDemw3fq8ysKDsVqYDXlxWoH2fjuyJnfqeZscIzfCBxScwaBNmAGYnwEvMUEHv4XAEP4O2AhcBIYAVoVjSAx2wo0Aven1lyp+B4BamP9tcA65JGPgG4kE2g0A8co81BcCRwku0Np+gnoQlJOBLxBsQNagN/UnEdi/U+ovgHga9V+ILVW7+Zt6nsTYnCEOGAdSedotCLO1Q7Oxb0WQ33oOJKLixzwpBrflupP8/sSeRLiWKvGNiOP+KD6fggJgTzotcfIORRrgG8x3nfFjFZyQay9OjWWh7uR+LTxjIDPyBoPcDEmdPTcd5DDrwgl4EO1Zrdr0h1qwvfAaTnM4kbqdr1lLD0/Qmp6n8PoHuwnd6/i8xfZEHGhFngKGHboN4ZP1GB7AUObA2xj6T5N1xXwX4PZ3bSzHlJj7xXw0GjGOO2kQz8ArsbESFHOLNcBq0g6YL2F53TkCQS4BBPfq1LzzkUOvBPArBwdS0gm0dnpIHCTQz9AKqYIeC6HqUa5DtAZ5Rn1+YGFZ5cae1Z91+H4o2WujuVlDv3mANtjumwBzsrRj7lIfIwgOV3jTGAnyd1L53ofB/yu+lqAyywKz0d2dVS1UXMjJGWmsUyNfWQZW4x5GRpA3gjjsDpAe/+1VP8m3MbvcDC0CXg9hw/AvpzxrRYjZyGH4CgSErpvS2zdduRJSCOj3wxMvF0T61+q+oaAKyyMXAxtDjgbcW66WsxzwBDwqlpr462Lr3Yktvti61ZgzzSX2vRbSXJHQQzWyi612+00ODfNOKBDYAS41lPWYtU+ijndP8Vd5CzEhGJCvwNkva9pk4fy1XAAmDDs8pR1OsagYaTSs5XBNcDTJFNgQj+X8b3IIViEajkgngZ9Zb1MMnOkMRN4X80ZBR6z6Zd3ovvA5cDJpG8serVgXqqOAre4bLQxrAceBvYAf5wCBvrQvJhNd2LC4wvkHSJtL3VIRZZmtJf83G+j+AFaKTSvBmAj2ZhN00Y1d4P63kU23reRDeMxB8SNjxuwWfUdAG4FzvA0IH4d5qJuDwdo+hN4EbhBGdqAvH2+hNQA6fmHyca7LRWOOeBX1bg+Nng+cqKeAC4EpgHLkfQyiMRSD3Af5u3PZYCLfBywF7gKeFy1h5FQ3Ifk/Xmq38Y/Hu95cqwKLVd9bypn7M4xZCdwno1xkWCP8SbMvYSN9ij9NBqRC5QIuTWy3SVk5NgU2qr62pGflyKkwmrDPIaLgP1qrJf8ewCXgXnj0zDG+8qGpBNst0kZPXwe1z6knl4P/Az0I7ezszGlZ7Xp0SrJdjlhzAHdHkzagBcs/Z2YUrTatGuSZOdCvxw1INfQEXJY6jvAfqTKisj+FO0lwAK9Tl9bVSJboxG5V3QZv8NWM8eh7wNLmFRSQzKt6LbL2EqcAOKAunHKPkLyzbZs6Jy+CHux1AksUe2e1Fqf0HLuDOb+rhLZVcMKJWA/chA9j/wI0o9UXHMwP0P53sz64sEplD2GOkwM9SGHzkxFS2IKfE62IBovakmm4AmRXRRD/zWk7S39m/8fEBAQEBAQEBAQEBAQEFAp/gHdzpD2CBY4zgAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </div>
        </v-btn>
        </div>

      </div>
    </div>
  </div>
</template>
