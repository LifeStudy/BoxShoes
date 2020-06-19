import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

const img =
  'https://images.unsplash.com/photo-1514723432099-9f0d4906e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUTO</th>
            <th>PRODUTO</th>
            <th>PRODUTO</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={img} alt="IMaGEM" />
            </td>
            <td>
              <strong>Tênis</strong>
              <span>R$ 45,95</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#006371" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#006371" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$85,65</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#006371" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">FINALIZAR PEDIDO</button>
        <Total>
          <span>TOTAL: </span>
          <strong>R$ 1256,22</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
