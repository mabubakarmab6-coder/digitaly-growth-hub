ALTER TABLE public.inquiries
  ADD COLUMN selected_service text,
  ADD COLUMN source_service text,
  ADD COLUMN source_page text;

ALTER TABLE public.inquiries
  ADD CONSTRAINT inquiries_selected_service_length CHECK (selected_service IS NULL OR char_length(selected_service) <= 80),
  ADD CONSTRAINT inquiries_source_service_length CHECK (source_service IS NULL OR char_length(source_service) <= 80),
  ADD CONSTRAINT inquiries_source_page_length CHECK (source_page IS NULL OR char_length(source_page) <= 500);

COMMENT ON COLUMN public.inquiries.selected_service IS 'Service selected in the global inquiry popup.';
COMMENT ON COLUMN public.inquiries.source_service IS 'Service context inferred from the CTA that opened the popup.';
COMMENT ON COLUMN public.inquiries.source_page IS 'Page path where the inquiry popup was opened.';
COMMENT ON COLUMN public.inquiries.challenges IS 'DEPRECATED: retained for historical inquiry records; the global popup uses selected_service.';
COMMENT ON COLUMN public.inquiries.outcomes IS 'DEPRECATED: retained for historical inquiry records.';
COMMENT ON COLUMN public.inquiries.business_categories IS 'DEPRECATED: retained for historical inquiry records.';
COMMENT ON COLUMN public.inquiries.online_links IS 'DEPRECATED: retained for historical inquiry records.';
COMMENT ON COLUMN public.inquiries.business_description IS 'DEPRECATED: retained for historical inquiry records; the global popup uses additional_context.';
COMMENT ON COLUMN public.inquiries.pain_points IS 'DEPRECATED: retained for historical inquiry records; the global popup uses additional_context.';
COMMENT ON COLUMN public.inquiries.country IS 'DEPRECATED: retained as an empty compatibility value for global popup submissions.';
COMMENT ON COLUMN public.inquiries.timeline IS 'DEPRECATED: retained for historical inquiry records.';
COMMENT ON COLUMN public.inquiries.budget_allocated IS 'DEPRECATED: retained for historical inquiry records.';
COMMENT ON COLUMN public.inquiries.budget_range IS 'DEPRECATED: retained for historical inquiry records.';