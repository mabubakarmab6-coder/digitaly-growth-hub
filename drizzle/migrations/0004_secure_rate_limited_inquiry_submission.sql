CREATE OR REPLACE FUNCTION public.submit_inquiry(
  _id uuid,
  _full_name text,
  _work_email text,
  _company_name text,
  _selected_service text,
  _business_and_challenge text,
  _source_service text,
  _source_page text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF (
    SELECT count(*)
    FROM public.inquiries
    WHERE lower(work_email) = lower(_work_email)
      AND created_at > now() - interval '1 hour'
  ) >= 3 THEN
    RAISE EXCEPTION 'Inquiry rate limit exceeded';
  END IF;

  INSERT INTO public.inquiries (
    id,
    full_name,
    work_email,
    company_name,
    country,
    selected_service,
    additional_context,
    source_service,
    source_page,
    consent
  ) VALUES (
    _id,
    _full_name,
    _work_email,
    _company_name,
    '',
    _selected_service,
    NULLIF(_business_and_challenge, ''),
    NULLIF(_source_service, ''),
    NULLIF(_source_page, ''),
    true
  );
END;
$$;

REVOKE ALL ON FUNCTION public.submit_inquiry(uuid, text, text, text, text, text, text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.submit_inquiry(uuid, text, text, text, text, text, text, text) TO anon, authenticated, service_role;
REVOKE INSERT ON public.inquiries FROM anon, authenticated;
GRANT ALL ON public.inquiries TO service_role;

COMMENT ON FUNCTION public.submit_inquiry(uuid, text, text, text, text, text, text, text) IS 'Validates submission frequency per work email and stores global inquiry popup data without exposing inquiry rows.';