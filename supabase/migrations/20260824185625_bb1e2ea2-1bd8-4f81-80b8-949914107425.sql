CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  challenges TEXT[] NOT NULL DEFAULT '{}',
  outcomes TEXT[] NOT NULL DEFAULT '{}',
  company_name TEXT NOT NULL,
  business_categories TEXT[] NOT NULL DEFAULT '{}',
  online_links TEXT[] NOT NULL DEFAULT '{}',
  business_description TEXT,
  pain_points TEXT,
  full_name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  country TEXT NOT NULL,
  timeline TEXT,
  budget_allocated TEXT,
  budget_range TEXT,
  additional_context TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.inquiries TO anon;
GRANT INSERT ON public.inquiries TO authenticated;
GRANT ALL ON public.inquiries TO service_role;

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry" ON public.inquiries
FOR INSERT TO anon, authenticated
WITH CHECK (
  consent = true
  AND char_length(company_name) BETWEEN 1 AND 200
  AND char_length(full_name) BETWEEN 1 AND 200
  AND char_length(work_email) BETWEEN 3 AND 255
  AND char_length(country) BETWEEN 1 AND 100
  AND coalesce(char_length(business_description), 0) <= 5000
  AND coalesce(char_length(pain_points), 0) <= 5000
  AND coalesce(char_length(additional_context), 0) <= 5000
  AND array_length(online_links, 1) IS DISTINCT FROM 0
);