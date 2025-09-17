// Creates a tentative session and booking (unpaid)
export async function createTentativeSessionAndBooking({
  userId,
  providerId,
  startTime,
  amountCad,
  description,
}: {
  userId: string;
  providerId: string;
  startTime: string;
  amountCad: number;
  description?: string;
}): Promise<string> {
  // Insert into sessions table
  const { data: session, error: sessionError } = await supabase
    .from("sessions")
    .insert({
      user_id: userId,
      provider_id: providerId,
      start_time: startTime,
      status: "tentative",
    })
    .select()
    .single();
  if (sessionError) throw sessionError;

  // Insert into bookings table (unpaid)
  const { error: bookingError } = await supabase.from("bookings").insert({
    session_id: session.id,
    amount_cad: amountCad,
    description,
    paid: false,
  });
  if (bookingError) throw bookingError;

  return session.id;
}
import { supabase } from "@/lib/supabase";

export type ProviderFilters = {
  language?: string;
  category?: string;
  maxPrice?: number;
};

export async function getProviders(filters: ProviderFilters = {}) {
  let query = supabase
    .from("providers")
    .select(
      `id, name, price, category, languages, profile:profiles(id, avatar_url, bio)`
    );

  if (filters.language) {
    query = query.contains("languages", [filters.language]);
  }
  if (filters.category) {
    query = query.eq("category", filters.category);
  }
  if (filters.maxPrice) {
    query = query.lte("price", filters.maxPrice);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}
