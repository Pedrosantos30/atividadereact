import { useRef, useState } from "react"
import {v4} from 'uuid'
import { AddButton, Container, Product, TrashButton } from "./styles"

function projeto() {
  const [produtos, setProdutos] = useState([])

  const inputRef = useRef();

  function botao() {
    console.log(v4())
    setProdutos([ {id: v4(), nome: inputRef.current.value}, ...produtos])
    inputRef.current.value =''
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="produtos..." ref={inputRef} />
      <AddButton onClick={botao}>Adicionar</AddButton>

      {produtos.map( (produto) => (
        <Product key={produto.id}>
        <p>{produto.nome}</p>
        <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
        </Product>
        ) )}
    </Container>
  );
}

export default projeto;
