-- Migration: Clean historical "/start" entries from inquiries table
-- Eliminates artificial redirect paths from analytics and lead capture storage.

UPDATE public.inquiries
SET source_page = '/'
WHERE source_page = '/start' 
   OR source_page LIKE '/start?%' 
   OR source_page LIKE '%/start';
