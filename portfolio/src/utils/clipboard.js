/**
 * Safely copy text to clipboard with error catching.
 * Returns true on success, false on failure (e.g. denied permissions).
 */
export async function copyToClipboard(text) {
  if (!navigator?.clipboard?.writeText) {
    return false;
  }
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

