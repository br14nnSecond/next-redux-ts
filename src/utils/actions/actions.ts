"use server";

import { revalidatePath } from "next/cache";

export default function (url: string) {
  revalidatePath(`http://localhost:3000${url}`);
}
