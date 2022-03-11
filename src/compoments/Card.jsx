import React from "react";
import { useEffect, useState } from "react";
import api from "../service/api";

export default function Card(){
   const [listaUsuario, setlistaUsuario] = useState();
   const [loading, setLoading] = useState(true);

   
   useEffect(() => {
       api
         .get("https://fakerapi.it/api/v1/custom?_quantity=20&_locale=pt_BR&id=counter&foto=image&primeiroNome=firstName&ultimoNome=lastName&user=word&email=email&site=website")
         .then((response) =>{
            console.log(response.data.data)
            setlistaUsuario(response.data.data)
            setLoading(false)
            console.log(loading)
            })
         .catch((err) => {
           console.error("ops! ocorreu um erro" + err);
         });
         return function cleanup(){
            
        }
     }, []);
     
        return (
            <div>
            { (!loading)?
            <div className="div_exibicao">
                {listaUsuario.map((item)=>{
                   return (
                    <section className="section_card">
                        <img className="img_card" src={item.foto}/>
                        <div className="conteudo_card">
                            <div className="descricao_card">
                                <h3>{item.primeiroNome} {item.ultimoNome}</h3><br/>
                                <p >Usuario: <strong>{item.user}</strong></p>
                                <p >Email: <strong>{item.email}</strong></p><br/>
                                <p ><a href="#" className="link_card">{item.site}</a></p>
                            </div>
                            
                        </div>
                    </section>

                   )
                })}
            </div>:<div>carregando...</div>}
            </div>
        )
     

        
}