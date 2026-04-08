# GenAIClass

A small browser-based study helper app built for class submission.

## What it does

This app helps a student turn rough notes into:
- a concise summary
- flashcards
- quiz questions
- action items

It runs entirely in the browser with no backend required.

## Features

- Paste notes into a text area
- Generate a summary
- Create flashcards from bullet points or sentences
- Build a short quiz from the provided notes
- Extract action items based on lines that contain verbs like `do`, `finish`, `review`, or `submit`
- Includes sample class notes so the app works immediately after download

## Tech

- HTML
- CSS
- Vanilla JavaScript

## Run locally

Because this is a static app, you can open `index.html` directly in your browser.

For a cleaner local setup, you can also use a lightweight server such as:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Files

- `index.html` - app structure
- `styles.css` - styling
- `app.js` - client-side logic

## Notes

This project intentionally uses deterministic text-processing logic instead of a paid API so it can be graded and run anywhere.
