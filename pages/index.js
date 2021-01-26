import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>QR</title>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      </Head>

      <style jsx>{`
        
        body{
            font-family: 'Montserrat', sans-serif;
            margin:0;
            padding: 0;
        }
        
        header{
            align-items: center;
            border-bottom: 0.15px solid black;
            display: flex;
            justify-content: center;
        }
        
        main{
            align-items: center;
            display: flex;
            justify-content: center;
        }
        
        main img{
            max-width: 1000px;
            width: 100%;
        }
        
        footer{
            align-items: center;
            display: flex;
            justify-content: space-around;
            padding: 10px;
        }
        
        .wpp{
            font-size: 20px !important;
            font-weight: 900;
        }
        
        .whatsapp-button{
            color: green;
            display: flex;
            flex-direction: row;
            text-decoration: none;
        }
        
        .whatsapp-button i{
            font-size: 40px;
        }
        
        .whatsapp-button p{
            flex-direction: column !important;
            font-size: 14px;
            margin: 0 15px;
        }
        
        @media only screen and (min-width: 1000px){
            main{
                padding: 20px 0;
            }
        }
      `}</style>

      <header>
        <h1>Logo</h1>
      </header>
      <main>
          <img src="http://www.opiniao.com.br/wp/wp-content/uploads/2019/04/cardapio-opiniao-2019-3-724x1024.jpg"/>
      </main>
      <footer>
          <p>Contate-nos pelo telefone: (11) 99999-9999</p>
          <a class="whatsapp-button" href="" target="_blank">
              <i class="fab fa-whatsapp"></i>
              <div>
                  <p>NOS CHAME NO</p>
                  <p class="wpp">WHATSAPP</p>
              </div>
          </a>
      </footer>

     
    </div>
  )
}
