import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

const img =
  'https://images.unsplash.com/photo-1514723432099-9f0d4906e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

function Home() {
  return (
    <ProductList>
      <li>
        <img src={img} alt="imagem" />
        <strong>Tenis</strong>
        <span>R$ 120,88</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={img} alt="imagem" />
        <strong>Tenis</strong>
        <span>R$ 120,88</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={img} alt="imagem" />
        <strong>Tenis</strong>
        <span>R$ 120,88</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={img} alt="imagem" />
        <strong>Tenis</strong>
        <span>R$ 120,88</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={img} alt="imagem" />
        <strong>Tenis</strong>
        <span>R$ 120,88</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
