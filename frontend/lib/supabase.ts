import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://eycmbkgaramyyygbikxq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5Y21ia2dhcmFteXl5Z2Jpa3hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwMTMyMzksImV4cCI6MjAxNzU4OTIzOX0.JpIrWawKW_h3JHQeKP1CEOL6so75e9zDJQFHZkvL_zE"
);
