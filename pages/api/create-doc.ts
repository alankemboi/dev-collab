import { NextApiRequest, NextApiResponse } from "next";
import { supabaseClient } from "src/utility/supabaseClient";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Create a variable called data, which uses the Supabase client to fetch all countries from the database.
  // The data variable is a Supabase response object, which contains an array of countries.
  const data = supabaseClient.from("countries").select("*");
  // Send the data variable to the client.
  res.status(200).json({
    countries: data,
  });
}
