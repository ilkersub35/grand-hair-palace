import "./globals.css";
import type {Metadata} from "next";
export const metadata:Metadata={title:"Haktan Toptan Saç Satış | Saç Kaynak ve Toptan Koleksiyon",description:"Haktan Toptan Saç Satış örnek ürün koleksiyonu. Ombre, dalgalı, düz ve kıvırcık saç modelleri. Tasarım demosudur; online ödeme aktif değildir.",robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
