import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export interface Speaker {
  id: number;
  full_name: string;
  title: string;
  talk_title: string;
  photo_url: string;
  bio_short?: string;
  bio_long?: string;
  organization?: string;
  talk_description?: string;
  social_links?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export const useSpeakers = (limit?: number) => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        setLoading(true);
        let query = supabase.from("speakers").select("*");

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) throw error;
        setSpeakers(data || []);
      } catch (err: any) {
        console.error("Error fetching speakers:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, [limit]);

  return { speakers, loading };
};

export const useSpeaker = (id: string) => {
  const [speaker, setSpeaker] = useState<Speaker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpeaker = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("speakers")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setSpeaker(data);
      } catch (err: any) {
        console.error("Error fetching speaker:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSpeaker();
    }
  }, [id]);

  return { speaker, loading, error };
};
