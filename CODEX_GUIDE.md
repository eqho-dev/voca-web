# VOCA Website Editing Guide

A complete guide for updating the VOCA website using AI. No coding knowledge required.

---

## Table of Contents

1. [Create a GitHub Account](#1-create-a-github-account)
2. [Accept the Repository Invitation](#2-accept-the-repository-invitation)
3. [Set Up OpenAI Codex](#3-set-up-openai-codex)
4. [Connect Your GitHub Repository](#4-connect-your-github-repository)
5. [How to Prompt Changes](#5-how-to-prompt-changes)
6. [Prompt Examples](#6-prompt-examples)
7. [Preview Your Changes](#7-preview-your-changes)
8. [Get Changes Approved and Published](#8-get-changes-approved-and-published)
9. [Keywords Reference](#9-keywords-reference)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Create a GitHub Account

GitHub is where the website code is stored. You need an account to make changes.

1. Go to **https://github.com/signup**
2. Enter your email address and click **Continue**
3. Create a password and click **Continue**
4. Choose a username (e.g., `firstname-voca`) and click **Continue**
5. Complete the verification puzzle
6. Check your email for a verification code, enter it on the page
7. On the welcome screen, you can skip all personalization questions

**After you finish:** Send your GitHub username to the tech lead so they can invite you to the VOCA website repository.

---

## 2. Accept the Repository Invitation

After the tech lead invites you:

1. Check your email for an invitation from GitHub with the subject "Invitation to collaborate"
2. Click **View invitation** in the email
3. On the GitHub page, click **Accept invitation**
4. You now have access to the VOCA website code

You can also accept pending invitations at **https://github.com/notifications**

---

## 3. Set Up OpenAI Codex

Codex is an AI coding agent by OpenAI. It reads your instructions, edits the website files, and submits the changes for review. There are three ways to use it:

### Option A: Web Version (Recommended)

This is the easiest option. No installation required.

1. Go to **https://chatgpt.com/codex**
2. If you don't have a ChatGPT account, click **Sign up** and create one
3. You need a **ChatGPT Pro, Plus, or Team** subscription to use Codex. Upgrade if needed by clicking your profile icon > **My Plan**
4. Once logged in, you will see the Codex dashboard

### Option B: Desktop (Windows)

OpenAI offers a ChatGPT desktop app for Windows:

1. Go to **https://openai.com/chatgpt/download/** in your browser
2. Click **Download for Windows**
3. Run the installer and follow the prompts
4. Open the ChatGPT app and sign in with your ChatGPT account
5. Navigate to **Codex** from the sidebar

### Option C: Mobile (iPhone / Android)

The ChatGPT mobile app is available but Codex features may be limited on mobile. The web version is recommended for making website changes.

- **iPhone:** Search "ChatGPT" in the App Store and install it
- **Android:** Search "ChatGPT" in the Google Play Store and install it
- Sign in with your ChatGPT account
- Look for Codex in the sidebar or navigation menu

---

## 4. Connect Your GitHub Repository

Before Codex can edit the website, you need to link your GitHub account:

1. Open Codex at **https://chatgpt.com/codex**
2. Click **Connect GitHub** (or look for a GitHub icon/settings option)
3. A GitHub authorization page will appear. Click **Authorize** to allow Codex to access your repositories
4. Once connected, you should see the VOCA website repository in your list of available repos
5. Select the repository to start working with it

If you don't see the repository, make sure you have accepted the invitation from Step 2.

---

## 5. How to Prompt Changes

When you type a request in Codex, you are writing a "prompt." Think of it as giving instructions to an assistant. Here is how to write good prompts:

### Be Specific About the Page

Always name which page you want to change. The website has these pages:

| Page name to use in your prompt | What it is |
|---|---|
| **homepage** | The main landing page |
| **about page** | The "About Us" page |
| **services page** | The "Services" page |
| **blog page** | The "Blog" page |
| **stage page** | "The Stage" page |
| **contact page** | The "Contact" page |

### Be Specific About the Section

Pages have multiple sections. Use descriptive names like:

- "the hero section" (the big banner at the top)
- "the stats section" (the numbers/counters area)
- "the footer" (the bottom of the page)
- "the navigation" or "the nav bar" (the menu at the top)
- "the testimonials section"
- "the services cards"
- "the blog post cards"

### Include the Exact Text

When changing text, write out the exact words you want. Don't say "make the headline better" -- say "change the headline to 'Your Brand, Everywhere.'"

### Mention Both Languages

The website has English and Thai versions. If you want both updated:

> "Change the homepage headline to 'Global Reach, Local Impact' on both the English and Thai pages"

If you only mention one language, only that version will change.

---

## 6. Prompt Examples

### Changing Text Content

> "On the homepage, change the hero headline from the current text to 'Strategic Clarity. Confidence in Every Move.'"

> "On the about page, update the company description paragraph to: 'VOCA is a creative globalization agency with 25 years of experience helping brands expand into new markets without losing their identity.'"

> "On the contact page, update the email address to contact@voca.co.th and the phone number to +66 2 123 4567"

> "Add a new blog post card to the blog page with the title 'Why Cultural Intelligence Matters in 2026', the description 'How leading brands are adapting their message for Southeast Asian markets', and set the category tag to 'Insights'"

### Changing Images

> "On the homepage hero section, replace the background image with this URL: https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"

> "On the about page, replace the team photo with this image URL: https://images.unsplash.com/photo-1522071820081-009f0129c71c"

> "On the services page, add a new image next to the Creative Localization section using this URL: https://images.unsplash.com/photo-1557804506-669a67965ba0"

**Tip:** To find free images, go to **https://unsplash.com**, search for what you need, click on an image, right-click it, and select "Copy image address." Then paste that URL into your prompt.

### Changing Design and Styling

> "Make the hero section on the homepage taller and add more spacing between the headline and the subtitle"

> "Change the background color of the stats counter section on the homepage from yellow to black, and make all the text in that section white"

> "Make the blog post cards have rounded corners and add a subtle shadow effect"

> "Increase the font size of all section headlines across the entire site"

> "Add a yellow underline decoration to the main headline on the about page"

### Adding New Content

> "Add a new section to the homepage between the services section and the stats section. It should be a testimonial carousel with a black background and yellow quote marks. Add two placeholder testimonials."

> "Add a new page called case-studies.html with the same navigation and footer as the other pages. Add a header section titled 'Case Studies' with a subtitle 'See how we help brands go global.' Include three placeholder case study cards."

> "Add a new FAQ question to the services page: Question: 'How long does a typical localization project take?' Answer: 'Most projects are completed within 4-6 weeks, depending on scope and the number of target languages.'"

### Removing Content

> "Remove the third blog post card from the blog page"

> "Remove the stats counter section from the homepage"

---

## 7. Preview Your Changes on the Staging Site

The website has two versions:

| Version | URL | Purpose |
|---|---|---|
| **Live site** (production) | `https://<your-github>.github.io/voca-web/` | What visitors see. Only the tech lead publishes here. |
| **Staging site** (preview) | `https://<your-github>.github.io/voca-web/staging/` | Where your changes appear first so you can review them. |

### How It Works

1. You prompt a change in Codex
2. Codex creates a **Pull Request** (PR) -- think of it as a "draft" of your changes
3. On the PR page in GitHub, click the green **Merge pull request** button to merge it into the `develop` branch
4. Wait 2-3 minutes for the staging site to update
5. Visit the **staging URL** above to see your changes

The live site is **not affected** -- your changes only appear on the staging site until the tech lead approves them.

### If the Staging Site Doesn't Look Right

**Option A: Ask Codex to fix it**

Go back to Codex and describe what needs to change:

> "The headline is correct but it's too small. Make it larger."

> "The new section looks good but the background should be black, not grey."

Codex will create a new PR. Merge it into `develop` again and the staging site will update.

**Option B: Tell the tech lead**

Message the tech lead or leave a comment on the PR in GitHub describing the problem.

---

## 8. Get Changes Approved and Published

Once you are happy with how the staging site looks:

1. Message the tech lead: **"Staging looks good, ready to go live"**
2. The tech lead will review the staging site
3. The tech lead merges the `develop` branch into `main`
4. The live website updates automatically within a few minutes

### What Happens If Changes Are Rejected?

The tech lead may ask for adjustments. You can then:
- Go back to Codex and prompt the fix
- Merge the new PR into `develop`
- Check the staging site again
- Let the tech lead know when it's ready

---

## 9. Keywords Reference

Use these words in your prompts to communicate clearly with Codex:

### Page Keywords

| Keyword | Meaning |
|---|---|
| **homepage** | The main page visitors see first |
| **about page** | About Us page |
| **services page** | Services page |
| **blog page** | Blog listing page |
| **stage page** | The Stage page |
| **contact page** | Contact page |
| **all pages** | Apply the change to every page |
| **English and Thai pages** | Update both language versions |

### Section Keywords

| Keyword | Meaning |
|---|---|
| **hero section** | The large banner area at the top of a page |
| **navigation** / **nav bar** | The menu bar at the top |
| **footer** | The bottom section of the page |
| **stats section** | The numbers/counters area |
| **cards** | The rectangular content blocks (blog posts, services, etc.) |
| **CTA** / **call to action** | A button or link that encourages visitors to act |

### Action Keywords

| Keyword | What it tells Codex to do |
|---|---|
| **change ... to** | Replace existing text or value with new text |
| **add** | Insert new content |
| **remove** / **delete** | Take content away |
| **replace** | Swap one thing for another |
| **move** | Reposition content to a different location |
| **make ... bigger/smaller** | Resize an element |
| **increase/decrease spacing** | Add or reduce space around elements |
| **update** | Modify existing content |

### Style Keywords

| Keyword | What it means |
|---|---|
| **background color** | The color behind content |
| **text color** | The color of the words |
| **font size** | How big or small text appears |
| **spacing** / **padding** | Space inside an element |
| **margin** | Space outside an element |
| **rounded corners** | Softer, curved edges instead of sharp corners |
| **shadow** | A subtle dark area behind an element for depth |
| **bold** | Thicker, heavier text |
| **centered** | Aligned to the middle |
| **full-width** | Stretches across the entire screen |

### VOCA Brand Colors

You can reference these by name in your prompts:

| Name | Use in prompt |
|---|---|
| VOCA Yellow | "change the background to VOCA yellow" |
| Black | "make the section background black" |
| White | "change the text color to white" |
| Teal | "use the teal accent color" |

---

## 10. Troubleshooting

### "I can't find the repository in Codex"
- Make sure you accepted the GitHub invitation (check your email or go to https://github.com/notifications)
- Try disconnecting and reconnecting GitHub in Codex settings

### "Codex made the wrong change"
- Be more specific in your next prompt. Include the exact text, the exact page, and the exact section.
- You can say: "Undo the last change and instead do [new instructions]"

### "The staging site hasn't updated"
- Wait 2-3 minutes after merging. The build takes a moment.
- Make sure you merged the PR into the `develop` branch (not `main`).
- If it still hasn't updated after 5 minutes, let the tech lead know.

### "I want to change something on both English and Thai"
- Always mention "on both the English and Thai pages" in your prompt.
- If you forget, you can submit a follow-up prompt: "Apply the same change to the Thai version of the page"

### "I'm not sure which page to change"
- Visit the live website and identify which page has the content you want to edit.
- Use the page names from the table in Section 5.

---

## Quick Start Checklist

- [ ] Created GitHub account at https://github.com/signup
- [ ] Sent GitHub username to tech lead
- [ ] Accepted the repository invitation
- [ ] Signed up for ChatGPT at https://chatgpt.com/codex
- [ ] Upgraded to ChatGPT Plus, Pro, or Team plan
- [ ] Connected GitHub account in Codex
- [ ] Made a test change and reviewed the preview

---

*If you get stuck at any point, reach out to the tech lead for help.*
