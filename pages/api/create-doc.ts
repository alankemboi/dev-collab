import { NextApiRequest, NextApiResponse } from "next";
import { supabaseClient } from "src/utility/supabaseClient";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const data = supabaseClient.from("countries").select("*");
  console.log(data);
  res.status(200).json({
    message: "Hello World",
  });
}
