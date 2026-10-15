// lib/sermons.js (server only: checks the public folder on disk)
import fs from 'node:fs';
import path from 'node:path';
import { filled } from '../content/siteContent';

// Return a sermon link only when it points somewhere real: a placeholder
// video ID or a notes/audio file not yet uploaded to /public is hidden.
export function sermonHref(href) {
  if (!filled(href) || href.includes('YOUR_')) return null;
  if (href.startsWith('/')) {
    const file = path.join(process.cwd(), 'public', href);
    return fs.existsSync(file) ? href : null;
  }
  return href;
}

export function sermonSpeaker(sermon) {
  return filled(sermon.speaker);
}
