---
description: How to update vocabulary and spelling words every two weeks
---

Use this workflow when it's time to swap out the current words for new ones.

### 1. Prepare Your Media
First, get your new `.wav` files ready. The file names should be the lowercase version of the spelling word (e.g., `galaxy.wav`).

### 2. Upload New Audio
Ask me to open the audio folder:
> "Open the audio folder in Finder"

// turbo
3. **Drop the new files** into the window that opens. You can delete the old ones or just add the new ones.

### 4. Provide the New Word Data
Tell me what the new words are. You only **need** to provide the word and its basic definition. I can automatically generate:
- **Distraction answers** (decoy options for multiple choice).
- **Sentences** using the word in context.
- **Synonyms and Antonyms**.

> [!IMPORTANT]
> **Fourth Grade Level**: I will ensure all definitions, sentences, and distractors are written specifically for a **4th-grade audience**.

### 5. Let Me Handle the Rest
I will:
- Update `constants.ts` with the new data.
- Remove any words from the spelling list that don't have a matching `.wav` file.
- Verify the build to ensure no syntax errors.

### 6. Sync to GitHub
Finally, I'll push the changes:
> "Push the new updates to GitHub"

> [!TIP]
> **Check your live site!** Once I push, your domain (oertools.com) will automatically update within a few minutes via Vercel.
