<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep `/services/GEO` as the canonical GEO service URL and use it for every internal link, because TanStack Router treats case-only route variants as conflicting matches.
- Keep one root-mounted inquiry provider that intercepts `/start` fallback links, because every public CTA must open the same accessible inquiry dialog.
- Forward enquiries to Google Apps Script only inside the existing server submission pipeline, retaining stored rows and owner notifications and reusing submission IDs for unchanged retries, because browser CORS and partial delivery must not erase answers or duplicate local records.
- Keep the dedicated Paid Marketing content in its own data module and page component composed within the existing route shell, because its approved narrative differs from generic service templates without requiring shared design or integration changes.
