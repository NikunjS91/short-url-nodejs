# Wiki Setup Instructions

All your Wiki content is ready in the `/wiki` folder! Here's how to add it to your GitHub repository:

## Option 1: Use as GitHub Wiki (Recommended)

### Step 1: Enable Wiki on GitHub
1. Go to https://github.com/NikunjS91/short-url-nodejs
2. Click **Settings**
3. Scroll to **Features** section
4. Check the **Wikis** checkbox

### Step 2: Clone the Wiki Repository
```bash
git clone https://github.com/NikunjS91/short-url-nodejs.wiki.git
cd short-url-nodejs.wiki
```

### Step 3: Copy Wiki Files
Copy all files from your `/wiki` folder to the cloned wiki repository:
```bash
cp -r /path/to/your/project/wiki/* .
```

### Step 4: Commit and Push
```bash
git add .
git commit -m "Add comprehensive project documentation"
git push origin master
```

### Step 5: View Your Wiki
Visit: https://github.com/NikunjS91/short-url-nodejs/wiki

---

## Option 2: Use as Repository Documentation

If you prefer to keep documentation in your main repository:

### Step 1: Commit to Main Repo
```bash
git add wiki/
git commit -m "Add project documentation"
git push origin main
```

### Step 2: Update README
Add a link to the documentation in your README.md:
```markdown
## Documentation

Full documentation is available in the [wiki folder](./wiki/Home.md).
```

---

## Option 3: Use GitHub Pages

Convert the wiki folder to GitHub Pages for a beautiful documentation site:

1. Move wiki files to a `/docs` folder
2. Enable GitHub Pages in repository settings
3. Select `/docs` as the source
4. Your docs will be available at: https://nikunjs91.github.io/short-url-nodejs

---

## Files Created

✅ **Home.md** - Main landing page with project overview
✅ **Project-Description.md** - Detailed project description and features
✅ **Technologies-Used.md** - Complete tech stack documentation
✅ **How-to-Run-Locally.md** - Step-by-step setup guide
✅ **API-Documentation.md** - Complete API reference with all endpoints
✅ **_Sidebar.md** - Navigation sidebar for GitHub Wiki

---

## What's Included in Each Page

### Home.md
- Project overview
- Key features list
- Quick links to other pages

### Project-Description.md
- Detailed feature breakdown
- Architecture explanation
- Use cases

### Technologies-Used.md
- Complete technology stack
- Package versions
- Project structure diagram
- Development tools

### How-to-Run-Locally.md
- Prerequisites
- Installation steps
- Environment configuration
- Troubleshooting guide

### API-Documentation.md
- All API endpoints with examples
- Authentication flow
- Request/response formats
- cURL examples
- Error handling

### _Sidebar.md
- Navigation menu for GitHub Wiki
- Links all pages together

---

## Tips

- The sidebar will automatically appear when you add `_Sidebar.md` to GitHub Wiki
- You can edit pages directly on GitHub after uploading
- Add images by creating an `/images` folder in the wiki
- Keep the wiki in sync with code changes

Choose the option that works best for you and let me know if you need help with any of the steps!
