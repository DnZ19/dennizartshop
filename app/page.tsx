
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export const revalidate = 0;

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const todos = await fetchTodos();
  
  return (
    <main>
      <h1>Stuff static</h1>

      {todos.map((
        todo: { id: Key | null | undefined; 
          title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
        <p key={todo.id}>{todo.title}</p>
      ))}

    </main>
  )
}
