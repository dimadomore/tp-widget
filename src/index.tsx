import { h, render } from 'preact';

function MyComponent({ name }: any) {
  return <div>My name is {name}.</div>;
}

const App = () => <MyComponent name="Dima" />;

render(<App />, document.getElementById('root') as Element);
