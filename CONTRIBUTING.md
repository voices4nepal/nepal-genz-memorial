# Contributing to Nepal GenZ Memorial

Thank you for helping us honor the memory of those lost in Nepal's GenZ protest movement. This guide will help you add new profiles to the memorial site.

## 📋 Quick Steps to Add a Profile

1. **Fork this repository**
2. **Add the person's photo** to the `images/` directory
3. **Add their information** to `data/profiles.json`
4. **Create a pull request**

## 📁 File Structure

```
nepal-genz-memorial/
├── data/
│   └── profiles.json          # Memorial profiles data
├── images/                    # Profile photos directory
├── js/
│   └── memorial.js           # Dynamic loading script
├── index.html                # Main webpage
└── styles.css               # Styling
```

## 🖼️ Adding a Photo

1. **Resize your image** to approximately 400x400 pixels (square format works best)
2. **Save as JPG or PNG** with a descriptive filename (e.g., `john-doe.jpg`)
3. **Place the file** in the `images/` directory
4. **Use lowercase** and hyphens instead of spaces in filenames

### Photo Guidelines:

- **Format**: JPG or PNG
- **Size**: Approximately 400x400px (will be automatically resized)
- **Quality**: Clear, respectful portrait photo
- **Naming**: Use format `firstname-lastname.jpg` (all lowercase, hyphens for spaces)

## 📝 Adding Profile Information

Edit the `data/profiles.json` file and add a new entry:

```json
{
  "name": "Full Name",
  "age": 25,
  "photo": "images/filename.jpg",
  "description": "A brief description about the person, their contribution to the movement, and their legacy. Maximum 200 characters."
}
```

### Required Fields:

- **`name`**: Full name of the person
- **`age`**: Age at the time of their passing
- **`photo`**: Path to their photo (relative to the root directory)
- **`description`**: Memorial description (maximum 200 characters)

### Example Entry:

```json
{
  "name": "Aman Sharma",
  "age": 23,
  "photo": "images/aman-sharma.jpg",
  "description": "A passionate student leader who believed in democracy and justice. His courage in standing up for what is right will forever inspire the next generation of activists."
}
```

## 🔧 Technical Details

### JSON Format Rules:

- Each profile must be a valid JSON object
- The file must contain an array of profile objects
- Don't forget commas between entries
- Last entry should NOT have a trailing comma

## 📤 Creating a Pull Request

1. **Fork the repository** on GitHub
2. **Clone your fork** to your computer
3. **Create a new branch**: `git checkout -b add-profile-firstname-lastname`
4. **Add the photo** to `images/` directory
5. **Edit** `data/profiles.json` to add the profile information
6. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add memorial profile for [Name]"
   ```
7. **Push to your fork**: `git push origin add-profile-firstname-lastname`
8. **Create a pull request** on GitHub

### Pull Request Guidelines:

- **Title**: "Add memorial profile for [Full Name]"
- **Description**: Brief note about the person and any relevant context
- **One profile per PR**: Please submit separate pull requests for each person

## ✅ Validation Checklist

Before submitting your pull request, please verify:

- [ ] Photo is added to `images/` directory
- [ ] Photo filename follows naming convention (lowercase, hyphens)
- [ ] Profile information is added to `data/profiles.json`
- [ ] JSON syntax is valid (no syntax errors)
- [ ] Name, age, photo path, and description are all provided
- [ ] Description is under 200 characters
- [ ] Information is accurate and respectful

## 🔍 Testing Locally

To test your changes locally:

1. **Serve the files** using a local web server:

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

2. **Open your browser** to `http://localhost:8000`
3. **Verify** that the new profile appears and displays correctly

## 🤝 Code of Conduct

- **Be respectful**: This is a memorial site honoring those who gave their lives
- **Verify information**: Ensure all details are accurate
- **Appropriate photos**: Use respectful, dignified photos
- **Factual descriptions**: Keep descriptions factual and honoring

## 🙏 Thank You

Your contribution helps ensure that the memory and sacrifice of these brave individuals will never be forgotten. Every profile added is a step toward honoring their legacy and keeping their stories alive.

---

_In memory of those who gave everything for Nepal's future._
