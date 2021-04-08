import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
               <Head>
               <link rel = "shortcut icon" href="favicon.ico" type="image/png"/>
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@700&family=Oswald&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
               

                </Head> 
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}