// This is a Route which used to insert items actions.

import { prisma } from "@/db/db";
import { redirect } from "next/navigation";
import Link from "next/link";

// server function
async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length == 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">New Task</h1>
      </header>

      {/* // calling server function which is createTodo ind the form action*/}
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-200 bg-transparent rounded px-2 py-1 outline-none
          focus-within:border-slate-100"
        />
        <div className="flex gap-2 justify-end">
          {/* Cancel button */}
          <Link
            href=".."
            className="border border-indigo-500/100
            text-slate-200 px-2 py-1 rounded
            hover:bg-indigo-500
            focus-within:bg-slate-700 outline-none
            bg-indigo-700"
          >
            Cancel
          </Link>
          {/* Create button */}
          <button
            type="submit"
            className="border border-indigo-500/100 text-slate-200 px-2 py-1 rounded hover:bg-indigo-500
          focus-within:bg-slate-700 outline-none bg-indigo-700"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
