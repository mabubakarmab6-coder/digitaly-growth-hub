DROP POLICY "Anyone can submit an inquiry" ON public.inquiries;

CREATE POLICY "Anyone can submit an inquiry"
ON public.inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (consent = true);