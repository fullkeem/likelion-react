import { Stack } from './component';
import './38-stack-layout-component.module.css';
import { useId, useState } from 'react';

export default function Exercise() {
  return (
    <Stack vertical gap={0} my={20}>
      <Stack vertical gap={4}>
        <h2>폼컨트로 II</h2>
        <p>멀티 체크박스 활용해 피자 주문 폼을 제작</p>
      </Stack>
      <Form />
    </Stack>
  );
}

const PIZZA = {
  types:
    '밀라노 스폰티니 피자, 시찰리아 칼초네 피자, 시카고 피자, 하와이안 피자'.split(
      ', '
    ),
  toppings: '새우, 고구마, 감자, 올리브, 페페로니'.split(', '),
};

const INITIAL_ORDER = {
  type: PIZZA.types[PIZZA.types.length - 1],
  toppings: [],
  isAllToppings: false,
};

function Form() {
  // 주문 폼 상태(like a snapshot) 선언
  const [orderState, setOrderState] = useState(INITIAL_ORDER);

  const handleChangePizzaType = (e) => {
    const { value } = e.target;

    const nextOrderState = {
      ...orderState,
      type: value,
    };

    setOrderState(nextOrderState);
  };

  const handleChangeAllToppings = (e) => {
    setOrderState({
      ...orderState,
      isAllToppings: e.target.checked,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    console.log(orderState);
  };

  const handleCancel = () => {
    setOrderState(INITIAL_ORDER);
  };

  return (
    <form onSubmit={handleOrder} onReset={handleCancel}>
      <h3>피자 타입을 선택하세요.</h3>
      {PIZZA.types.map((pizzaType) => (
        <FormChecker
          key={pizzaType}
          name="type"
          value={pizzaType}
          checked={orderState.type === pizzaType}
          onChange={handleChangePizzaType}
        >
          {pizzaType}
        </FormChecker>
      ))}
      <h3>피자 토핑을 추가합니다.</h3>
      <FormChecker
        checkbox
        checked={orderState.isAllToppings}
        onChange={handleChangeAllToppings}
      >
        전체선텍
      </FormChecker>
      {PIZZA.toppings.map((topping) => (
        <FormChecker key={topping} checkbox name="topping" value={topping}>
          {topping}
        </FormChecker>
      ))}
    </form>
  );
}

function FormChecker({
  as: Component = 'div',
  checkbox = false,
  children,
  ...restProps
}) {
  const id = useId();
  const type = checkbox ? 'checkbox' : 'radio';

  return (
    <Component>
      <input type={type} id={id} {...restProps} />
      <label htmlFor={id}>{children}</label>
    </Component>
  );
}
