import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db/db";
import Link from "next/link";
import { todo } from "node:test";
import React from "react";

//Function for create item
function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  //calling the function
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">Todos/Tasks</h1>
        <Link
          className="border border-slate-300 text-slate-700 px-2 rounded hover:bg-slate-700
          focus-within:bg-slate-700 outline-none"
          href="./new-route"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
// In the last example the key is being spread, which is currently possible, but discouraged in favor of the statically provided key.
// Examples of CORRECT code for this rule:
// [<Hello key="first" />, <Hello key="second" />, <Hello key="third" />];
//// data.map((x) => <Hello key={x.id}>{x}</Hello>);
// Array.from([1, 2, 3], (x) => <Hello key={x.id}>{x}</Hello>);
// <Hello key={id} {...{ id, caption }} />;

// test
// await prisma.todo.create({
//   data: { title: "test", complete: false },
// });
