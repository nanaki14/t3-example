// src/pages/api/todos.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const todos = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.todo.findMany();
  res.status(200).json(examples);
};

export default todos;
