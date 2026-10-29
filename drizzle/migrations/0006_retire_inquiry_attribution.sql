UPDATE public.inquiries SET source_page = NULL, source_service = NULL WHERE source_page IS NOT NULL OR source_service IS NOT NULL;
COMMENT ON COLUMN public.inquiries.source_page IS 'DEPRECATED: visitor tracking removed; no longer populated';
COMMENT ON COLUMN public.inquiries.source_service IS 'DEPRECATED: visitor tracking removed; no longer populated';